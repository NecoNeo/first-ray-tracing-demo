import { Vector3D } from '../vector/vector3d';
import { Ray3D } from '../ray/ray3d';
import { Camera } from './camera';


export class OrthographicCamera extends Camera {

  readonly right: Vector3D;

  constructor(
    public readonly eye: Vector3D,
    public readonly front: Vector3D,
    public readonly up: Vector3D,
    public readonly width: number,
    public readonly height: number
  ) {
    super();
    this.right = this.front.cross(this.up);
    this.up = this.right.cross(this.front);
  }

  generateRay(x: number, y: number) {
    const r = this.right.multiply((x - 0.5) * this.width);
    const u = this.up.multiply((y - 0.5) * this.height);
    return new Ray3D(this.eye.add(r).add(u), this.front);
  }

}
