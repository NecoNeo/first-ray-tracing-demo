import { Ray3D } from '../ray/ray3d';
import { Vector3D } from '../vector/vector3d';
import { Color } from '../color/color';

export abstract class Material {

  constructor(
    public readonly reflectiveness?: number
  ) {
    if (!reflectiveness) { this.reflectiveness = 0; }
  }

  abstract sample(ray: Ray3D, position: Vector3D, normal: Vector3D): Color;

}
