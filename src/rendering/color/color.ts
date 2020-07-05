export class Color {

  static readonly Black = new Color(0, 0, 0);
  static readonly White = new Color(1, 1, 1);
  static readonly Red = new Color(1, 0, 0);
  static readonly Green = new Color(0, 1, 0);
  static readonly Blue = new Color(0, 0, 1);

  constructor(
    /** 0 ~ 1 */
    public readonly r: number,
    /** 0 ~ 1 */
    public readonly g: number,
    /** 0 ~ 1 */
    public readonly b: number
  ) {}

  copy() {
    return new Color(this.r, this.g, this.b);
  }

  add(c: Color) {
    return new Color(this.r + c.r, this.g + c.g, this.b + c.b);
  }

  multiply(s: number) {
    return new Color(this.r * s, this.g * s, this.b *s);
  }

  modulate(c: Color) {
    return new Color(this.r * c.r, this.g * c.g, this.b * c.b);
  }

}
