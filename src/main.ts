import { CanvasCtrl } from "./canvas/canvas-ctrl";
import { renderDepth } from "./rendering/depth-test";
import { Sphere } from "./rendering/geometries/sphere/sphere";
import { PerspectiveCamera } from "./rendering/cameras/perspective-camera";
import { Vector3D } from "./rendering/vector/vector3d";


const mainCanvasCtrl = new CanvasCtrl('main-canvas');
mainCanvasCtrl.renderTest();


document.getElementById('depth-test').addEventListener('click', () => {
  mainCanvasCtrl.render(
    renderDepth(
      mainCanvasCtrl.getImageData(),
      new Sphere(new Vector3D(0, 10, -10), 10),
      new PerspectiveCamera(
        new Vector3D(0, 10, 10),
        new Vector3D(0, 0, -1),
        new Vector3D(0, 1, 0),
        90
      )
    )
  );
}, false);
