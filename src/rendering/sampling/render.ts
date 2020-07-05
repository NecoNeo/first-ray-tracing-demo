import { Camera } from '../cameras/camera';
import { Geometry } from '../geometries/geometry';
import { IntersectResult } from '../intersect-result/intersect-result';
// import { normalTest } from './render-test/normal-test';
import { depthTest } from './render-test/depth-test';
import { Ray3D } from '../ray/ray3d';


export interface SampleMethod {
  sample: (result: IntersectResult, ray: Ray3D) => Uint8ClampedArray;
}

export function render (imgData: ImageData, scene: Geometry, camera: Camera, sampleMethod?: SampleMethod) {
  if (!sampleMethod) { sampleMethod = depthTest; }
  const pixels = imgData.data;
  const width = imgData.width;
  const height = imgData.height;

  let i = 0;
  for (let y = 0; y < height; y++) {
    const sy = 1 - y / height;
    for (let x = 0; x < width; x++) {
      const sx = 1 - x / width;
      const ray = camera.generateRay(sx, sy);
      const intersectResult = scene.intersect(ray);
      const sampleResult = sampleMethod.sample(intersectResult, ray);
      pixels[i] = sampleResult[0];
      pixels[i + 1] = sampleResult[1];
      pixels[i + 2] = sampleResult[2];
      pixels[i + 3] = sampleResult[3];
      i += 4;
    }
  }

  return imgData;
}
