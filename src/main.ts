import { CanvasCtrl } from './canvas/canvas-ctrl';
import { render } from './rendering/sampling/render';
import { renderTestScene } from './scenes/render-test';
import { rayTracing } from './rendering/sampling/ray-tracing/ray-tracing';


const mainCanvasCtrl = new CanvasCtrl('main-canvas');

let runningStatus = false;
let renderingTimer: number;


document.querySelector('#render').addEventListener('click', () => {
  if (runningStatus) {
    window.clearTimeout(renderingTimer);
    runningStatus = false;
    return;
  }
  runningStatus = true;
  let t = 0;
  let lastCountFrame = 0;
  let lastCountTimestamp = (new Date()).getTime();

  const drawFrame = () => {
    const snapshot = renderTestScene.getSnapshot(t);
    mainCanvasCtrl.render(
      render(
        mainCanvasCtrl.getImageData(),
        snapshot.scene,
        snapshot.camera,
        rayTracing
      )
    );
    t++;
    const timestamp = (new Date()).getTime();
    if (timestamp - lastCountTimestamp >= 1000) {
      const fps = t - lastCountFrame;
      lastCountTimestamp = timestamp;
      lastCountFrame = t;
      document.querySelector('#fps-number').innerHTML = `${fps}`;
    }
    renderingTimer = setTimeout(drawFrame, 0);
  };
  drawFrame();
}, false);
