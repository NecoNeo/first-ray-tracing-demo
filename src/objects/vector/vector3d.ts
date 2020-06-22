export class Vector3D {

  constructor(public readonly x: number, public readonly y: number, public readonly z: number) {}

  copy() {
    return new Vector3D(this.x, this.y, this.z);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  sqrLength() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  normalize() {
    const inv = 1 / this.length();
    return new Vector3D(this.x * inv, this.y * inv, this.z * inv);
  }

  negate() {
    return new Vector3D(-this.x, -this.y, -this.z);
  }

  add(vector: Vector3D) {
    return new Vector3D(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  subtract(vector: Vector3D) {
    return new Vector3D(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  multiply(f: number) {
    return new Vector3D(this.x * f, this.y * f, this.z * f);
  }

  divide(f: number) {
    const invf = 1 / f;
    return new Vector3D(this.x * invf, this.y * invf, this.z * invf);
  }

  dot(vector: Vector3D) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  cross(vector: Vector3D) {
    return new Vector3D(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x
    );
  }

}
