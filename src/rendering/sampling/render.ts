import { Camera } from '../cameras/camera';
import { Geometry } from '../geometries/geometry';
import { IntersectResult } from '../intersect-result/intersect-result';
import { normalTest } from './render-test/normal-test';
// import { depthTest } from './render-test/depth-test';
import { Ray3D } from '../ray/ray3d';
import { Color } from '../color/color';


export interface SampleMethod {
  sample: (result: IntersectResult, ray: Ray3D) => Color;
}

function rayTraceRecursive(scene: Geometry, ray: Ray3D, maxReflect: number, sampleMethod: SampleMethod) {
  const intersectResult = scene.intersect(ray);
  if (intersectResult.hit) {
    const reflectiveness = intersectResult.material.reflectiveness || 0;
    let color = sampleMethod.sample(intersectResult, ray);
    color = color.multiply(1 - reflectiveness);
    if (reflectiveness > 0 && maxReflect > 0) {
      const r = intersectResult.normal.multiply(-2 * intersectResult.normal.dot(ray.direction)).add(ray.direction);
      const reflectedColor = rayTraceRecursive(scene, new Ray3D(intersectResult.position, r), maxReflect - 1, sampleMethod);
      color = color.add(reflectedColor.multiply(reflectiveness));
    }
    return color;
  } else {
    return sampleMethod.sample(intersectResult, ray);
  }
}

export function render (
  imgData: ImageData,
  scene: Geometry,
  camera: Camera,
  sampleMethod?: SampleMethod,
  options = { maxReflect: 3 }
) {
  if (!sampleMethod) { sampleMethod = normalTest; }
  const pixels = imgData.data;
  const width = imgData.width;
  const height = imgData.height;

  let i = 0;
  for (let y = 0; y < height; y++) {
    const sy = 1 - y / height;
    for (let x = 0; x < width; x++) {
      const sx = 1 - x / width;
      const ray = camera.generateRay(sx, sy);
      const sampleResult = rayTraceRecursive(scene, ray, options.maxReflect, sampleMethod);
      pixels[i] = sampleResult.r * 255;
      pixels[i + 1] = sampleResult.g * 255;
      pixels[i + 2] = sampleResult.b * 255;
      pixels[i + 3] = 255;
      i += 4;
    }
  }

  return imgData;
}
