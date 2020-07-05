import { PerspectiveCamera } from "./cameras/perspective-camera";
import { Sphere } from "./geometries/sphere/sphere";


const MIN_BRIGHTNESS = 30;

export function renderDepth (imgData: ImageData, scene: Sphere, camera: PerspectiveCamera, maxDepth = 20) {
  const pixels = imgData.data;
  const width = imgData.width;
  const height = imgData.height;

  let i = 0;
  for (let y = 0; y < height; y++) {
    const sy = 1 - y / height;
    for (let x = 0; x < width; x++) {
      const sx = 1 - x / width;
      const ray = camera.generateRay(sx, sy);
      const result = scene.intersect(ray);
      if (result.hit) {
        // change brightness here
        // const depth = MIN_BRIGHTNESS + 255 - Math.min((result.distance - 10) / 8 * 255, 255);

        // pixels[i] = depth;
        // pixels[i + 1] = depth;
        // pixels[i + 2] = depth;

        // test normal
        pixels[i] = (result.normal.x + 1) * 128;
        pixels[i + 1] = (result.normal.y + 1) * 128;
        pixels[i + 2] = (result.normal.z + 1) * 128;
        pixels[i + 3] = 255;
      } else {
        pixels[i] = MIN_BRIGHTNESS;
        pixels[i + 1] = MIN_BRIGHTNESS;
        pixels[i + 2] = MIN_BRIGHTNESS;
        pixels[i + 3] = 255;
      }
      i += 4;
    }
  }

  return imgData;
}
