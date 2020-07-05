/**
 * deal with common canvas rendering works
 */
export class CanvasCtrl {

  private canvasEl: HTMLCanvasElement;
  private context2d: CanvasRenderingContext2D;

  constructor(public readonly id: string, public readonly width = 500, public readonly height = 500) {
    this.canvasEl = document.querySelector(`#${id}`) as HTMLCanvasElement;
    this.initCanvas(width, height);
  }

  private initCanvas(width: number, height: number) {
    this.canvasEl.width = width;
    this.canvasEl.height = height;
    this.context2d = this.canvasEl.getContext('2d');
    this.context2d.fillStyle = 'rgb(255, 255, 255)';
    this.context2d.fillRect(0, 0, width, height);
  }

  getImageData(x = 0, y = 0, w = this.width, h = this.height) {
    return this.context2d.getImageData(x, y, w, h);
  }

  clear() {}

  render(imgData: ImageData, dx = 0, dy = 0) {
    this.context2d.putImageData(imgData, dx, dy);
  }

  /** debug use */
  renderTest() {
    const imgData = this.getImageData();
    let i = 0;
    const pixels = imgData.data;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        pixels[i++] = 255 - y;
        pixels[i++] = x + y - 255;
        pixels[i++] = 255 - x;
        pixels[i++] = 255;
      }
    }
    // console.log(imgData);
    this.context2d.putImageData(imgData, 0, 0);
  }

}
