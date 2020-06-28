import { Vector3D } from "../vector/vector3d";


export class IntersectResult {

  static NoHit = new IntersectResult();

  readonly hit: boolean;

  constructor(
    public readonly geometry?: any,
    public readonly distance?: number,
    public readonly position?: Vector3D,
    public readonly normal?: Vector3D
  ) {
    this.hit = !!this.geometry;
  }

}
