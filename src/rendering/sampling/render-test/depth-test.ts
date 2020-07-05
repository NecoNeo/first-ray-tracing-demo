import { IntersectResult } from "../../intersect-result/intersect-result";
import { Color } from "../../color/color";


const MIN_BRIGHTNESS = 30 / 255;

export const depthTest = {
  sample(result: IntersectResult) {
    if (result.hit) {
      const depth = MIN_BRIGHTNESS + 255 - Math.min((result.distance - 20) / 8 * 255, 255);
      return new Color(depth / 255, depth / 255, depth / 255);
    } else {
      return new Color(MIN_BRIGHTNESS, MIN_BRIGHTNESS, MIN_BRIGHTNESS);
    }
  }
}
