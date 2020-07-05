import { IntersectResult } from "../../intersect-result/intersect-result";
import { Color } from "../../color/color";


const MIN_BRIGHTNESS = 30 / 255;

export const normalTest = {
  sample(result: IntersectResult) {
    if (result.hit) {
      return new Color((result.normal.x + 1) / 2, (result.normal.y + 1) / 2, (result.normal.z + 1) / 2);
    } else {
      return new Color(MIN_BRIGHTNESS, MIN_BRIGHTNESS, MIN_BRIGHTNESS);
    }
  }
}
