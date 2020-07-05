import { Vector3D } from '../../vector/vector3d';
import { Ray3D } from '../../ray/ray3d';
import { IntersectResult } from '../../intersect-result/intersect-result';
import { Geometry } from '../geometry';
import { Material } from '../../materials/material';


export class Sphere extends Geometry {

  public material: Material;
  private sqrRadius: number;

  constructor(public readonly center: Vector3D, public readonly radius: number) {
    super();
    this.sqrRadius = this.radius * this.radius;
  }

  copy() {
    return new Sphere(this.center.copy(), this.radius);
  }

  setMaterial(material: Material) {
    this.material = material;
  }

  intersect(ray: Ray3D) {
    const v = ray.origin.subtract(this.center);
    const c = v.sqrLength() - this.sqrRadius;
    const dDotV = ray.direction.dot(v);

    if (dDotV <= 0) {
      const discr = dDotV * dDotV - c;
      if (discr > 0) {
        const distance = -dDotV - Math.sqrt(discr);
        const position = ray.getPoint(distance);
        const normal = position.subtract(this.center).normalize();
        return new IntersectResult(this.material, distance, position, normal);
      }
    }

    return IntersectResult.NoHit;
  }

}
