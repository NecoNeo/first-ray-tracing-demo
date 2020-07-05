import { IntersectResult } from "../../intersect-result/intersect-result";


const MIN_BRIGHTNESS = 30;

export const normalTest = {
  sample(result: IntersectResult) {
    const sampleResult = new Uint8ClampedArray(4);
    if (result.hit) {
      sampleResult[0] = (result.normal.x + 1) * 128;
      sampleResult[1] = (result.normal.y + 1) * 128;
      sampleResult[2] = (result.normal.z + 1) * 128;
    } else {
      sampleResult[0] = MIN_BRIGHTNESS;
      sampleResult[1] = MIN_BRIGHTNESS;
      sampleResult[2] = MIN_BRIGHTNESS;
    }
    sampleResult[3] = 255;
    return sampleResult;
  }
}
