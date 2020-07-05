import { Vector3D } from '../vector/vector3d';
import { Material } from '../materials/material';


export class IntersectResult {

  static NoHit = new IntersectResult(null, null, null, null, false);

  constructor(
    public readonly material?: Material,
    public readonly distance?: number,
    public readonly position?: Vector3D,
    public readonly normal?: Vector3D,
    public readonly hit = true
  ) {}

}
