import { IntersectResult } from "../../intersect-result/intersect-result";
import { Ray3D } from "../../ray/ray3d";
import { Color } from "../../color/color";


const MIN_BRIGHTNESS = 15 / 255;

export const rayTracing = {
  sample(result: IntersectResult, ray: Ray3D) {
    if (result.hit) {
      return result.material.sample(ray, result.position, result.normal);
    } else {
      return new Color(MIN_BRIGHTNESS, MIN_BRIGHTNESS, MIN_BRIGHTNESS);
    }
  }
}
