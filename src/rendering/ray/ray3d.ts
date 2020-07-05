import { Vector3D } from '../vector/vector3d';


export class Ray3D {

  constructor(public readonly origin: Vector3D, public readonly direction: Vector3D) {}

  getPoint(t: number) {
    return this.origin.add(this.direction.multiply(t));
  }

}
