import { Sphere } from '../rendering/geometries/sphere/sphere';
import { Vector3D } from '../rendering/vector/vector3d';
import { PhongMaterial } from '../rendering/materials/phong/phong';
import { Color } from '../rendering/color/color';
import { PerspectiveCamera } from '../rendering/cameras/perspective-camera';
import { GeometrySet } from '../rendering/geometries/geometry-set';
import { Plane } from '../rendering/geometries/plane/plane';
import { CheckerMaterial } from '../rendering/materials/checker/checker';


const sphere1 = new Sphere(new Vector3D(-8, 12, -8), 10);
const sphere2 = new Sphere(new Vector3D(10, 10, -12), 10);
const plane = new Plane(new Vector3D(0, 1, 0), 0);

sphere1.setMaterial(new PhongMaterial(new Color(0.5, 0.8, 1), Color.White, 16, 0.25));
sphere2.setMaterial(new PhongMaterial(Color.Blue, Color.White, 16, 0.25));
plane.setMaterial(new CheckerMaterial(0.1, 0.5))

// export const renderTestScene = {
//   scene: new GeometrySet([sphere1, sphere2, plane]),
//   camera: new PerspectiveCamera(new Vector3D(0, 5, 45), new Vector3D(0, 0, -1), new Vector3D(0, 1, 0), 45)
// }

const scene = new GeometrySet([sphere1, sphere2, plane]);

export const renderTestScene = {
  getSnapshot(t: number) {
    return {
      scene,
      camera: new PerspectiveCamera(
        new Vector3D(Math.sin(t * Math.PI / 180) * 45, 5, Math.cos(t * Math.PI / 180) * 45),
        (new Vector3D(Math.sin(t * Math.PI / 180 - Math.PI), 0, -Math.cos(t * Math.PI / 180))).normalize(),
        (new Vector3D(0, 1, 0)).normalize(),
        45
      )
    };
  }
}