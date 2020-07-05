import { IntersectResult } from "../../intersect-result/intersect-result";
import { Ray3D } from "../../ray/ray3d";


const MIN_BRIGHTNESS = 15;

export const rayTracing = {
  sample(result: IntersectResult, ray: Ray3D) {
    const sampleResult = new Uint8ClampedArray(4);
    if (result.hit) {
      const color = result.material.sample(ray, result.position, result.normal);
      sampleResult[0] = color.r * 255;
      sampleResult[1] = color.g * 255;
      sampleResult[2] = color.b * 255;
    } else {
      sampleResult[0] = MIN_BRIGHTNESS;
      sampleResult[1] = MIN_BRIGHTNESS;
      sampleResult[2] = MIN_BRIGHTNESS;
    }
    sampleResult[3] = 255;
    return sampleResult;
  }
}
