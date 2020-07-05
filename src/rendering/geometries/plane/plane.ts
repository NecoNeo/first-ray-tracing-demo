import { Vector3D } from '../../vector/vector3d';
import { Ray3D } from '../../ray/ray3d';
import { IntersectResult } from '../../intersect-result/intersect-result';
import { Geometry } from '../geometry';
import { Material } from '../../materials/material';


export class Plane extends Geometry {

  public material: Material;
  private position: Vector3D;

  constructor(
    public readonly normal: Vector3D,
    public readonly d: number
  ) {
    super();
    this.position = this.normal.multiply(this.d);
  }

  copy() {
    return new Plane(this.normal.copy(), this.d);
  }

  setMaterial(material: Material) {
    this.material = material;
  }

  intersect(ray: Ray3D) {
    const a = ray.direction.dot(this.normal);
    if (a >= 0) { return IntersectResult.NoHit; }

    const b = this.normal.dot(ray.origin.subtract(this.position));
    const distance = -b / a;
    const result = new IntersectResult(this.material, distance, ray.getPoint(distance), this.normal);
    return result;
  }

}
