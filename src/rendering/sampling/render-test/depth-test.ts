import { IntersectResult } from "../../intersect-result/intersect-result";


const MIN_BRIGHTNESS = 30;

export const depthTest = {
  sample(result: IntersectResult) {
    const sampleResult = new Uint8ClampedArray(4);
    if (result.hit) {
      const depth = MIN_BRIGHTNESS + 255 - Math.min((result.distance - 20) / 8 * 255, 255);

      sampleResult[0] = depth;
      sampleResult[1] = depth;
      sampleResult[2] = depth;
    } else {
      sampleResult[0] = MIN_BRIGHTNESS;
      sampleResult[1] = MIN_BRIGHTNESS;
      sampleResult[2] = MIN_BRIGHTNESS;
    }
    sampleResult[3] = 255;
    return sampleResult;
  }
}
