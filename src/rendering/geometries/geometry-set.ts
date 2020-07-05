import { Geometry } from './geometry';
import { Ray3D } from '../ray/ray3d';
import { IntersectResult } from '../intersect-result/intersect-result';


export class GeometrySet extends Geometry {

  constructor(
    public geometries: Geometry[]
  ) {
    super();
  }

  copy() {
    return new GeometrySet(this.geometries.map(geometry => geometry.copy()));
  }

  intersect(ray: Ray3D) {
    let minDistance = Infinity;
    let minResult = IntersectResult.NoHit;
    for (const geometry of this.geometries) {
      const result = geometry.intersect(ray);
      if (result.hit && result.distance < minDistance) {
        minDistance = result.distance;
        minResult = result;
      }
    }
    return minResult;
  }

}
