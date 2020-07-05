import { Material } from '../material';
import { Ray3D } from '../../ray/ray3d';
import { Vector3D } from '../../vector/vector3d';
import { Color } from '../../color/color';


/**
 * simple checker-material
 */
export class CheckerMaterial extends Material {

  constructor(
    public readonly scale: number,
    public readonly reflectiveness?: number
  ) {
    super();
  }

  sample(ray: Ray3D, position: Vector3D, normal: Vector3D) {
    return Math.abs((Math.floor(position.x * 0.1) + Math.floor(position.z * this.scale)) % 2) < 1 ? Color.Black : Color.White;
  }
}
