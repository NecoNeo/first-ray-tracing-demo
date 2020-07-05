import { Sphere } from '../rendering/geometries/sphere/sphere';
import { Vector3D } from '../rendering/vector/vector3d';
import { PhongMaterial } from '../rendering/materials/phong/phong';
import { Color } from '../rendering/color/color';
import { PerspectiveCamera } from '../rendering/cameras/perspective-camera';
import { GeometrySet } from '../rendering/geometries/geometry-set';
import { Plane } from '../rendering/geometries/plane/plane';
import { CheckerMaterial } from '../rendering/materials/checker/checker';


const sphere1 = new Sphere(new Vector3D(-10, 10, -10), 10);
const sphere2 = new Sphere(new Vector3D(10, 10, -10), 10);
const plane = new Plane(new Vector3D(0, 1, 0), 0);

sphere1.setMaterial(new PhongMaterial(Color.Red, Color.White, 16));
sphere2.setMaterial(new PhongMaterial(Color.Blue, Color.White, 16));
plane.setMaterial(new CheckerMaterial(0.1))

export const renderTestScene = {
  scene: new GeometrySet([sphere1, sphere2, plane]),
  camera: new PerspectiveCamera(new Vector3D(0, 5, 15), new Vector3D(0, 0, -1), new Vector3D(0, 1, 0), 90)
}