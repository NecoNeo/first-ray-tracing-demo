import { Vector3D } from '../vector/vector3d';
import { Ray3D } from '../ray/ray3d';
import { Camera } from './camera';


export class PerspectiveCamera extends Camera {

  readonly right: Vector3D;
  readonly fovScale: number;

  constructor(
    public readonly eye: Vector3D,
    public readonly front: Vector3D,
    public readonly up: Vector3D,
    /** degree */
    public readonly fov: number
  ) {
    super();
    this.right = this.front.cross(this.up);
    this.up = this.right.cross(this.front);
    this.fovScale = Math.tan(this.fov * 0.5 * Math.PI / 180) * 2;
  }

  generateRay(x: number, y: number) {
    const r = this.right.multiply((x - 0.5) * this.fovScale);
    const u = this.up.multiply((y - 0.5) * this.fovScale);
    return new Ray3D(this.eye, this.front.add(r).add(u).normalize());
  }

}
