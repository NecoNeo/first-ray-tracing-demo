import { Geometry } from "../rendering/geometries/geometry";
import { Camera } from "../rendering/cameras/camera";

export interface Scene {
  getSnapshot(t: number): { scene: Geometry, camera: Camera };
}
