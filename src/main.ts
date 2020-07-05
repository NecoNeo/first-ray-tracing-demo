import { CanvasCtrl } from './canvas/canvas-ctrl';
import { render } from './rendering/sampling/render';
import { renderTestScene } from './scenes/render-test';
import { rayTracing } from './rendering/sampling/ray-tracing/ray-tracing';


const mainCanvasCtrl = new CanvasCtrl('main-canvas');
mainCanvasCtrl.renderTest();


document.getElementById('depth-test').addEventListener('click', () => {
  mainCanvasCtrl.render(
    render(
      mainCanvasCtrl.getImageData(),
      renderTestScene.scene,
      renderTestScene.camera,
      rayTracing
    )
  );
}, false);
