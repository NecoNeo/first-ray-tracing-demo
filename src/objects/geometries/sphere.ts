import { Vector3D } from "../vector/vector3d";
import { Ray3D } from "../ray/ray3d";

export class Sphere {

  private sqrRadius: number;

  constructor(public readonly center: Vector3D, public readonly radius: number) {
    this.init();
  }

  init() {
    this.sqrRadius = this.radius * this.radius;
  }

  copy() {
    return new Sphere(this.center.copy(), this.radius);
  }

  intersect(ray: Ray3D) {}

}
