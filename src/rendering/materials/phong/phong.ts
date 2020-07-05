import { Material } from '../material';
import { Ray3D } from '../../ray/ray3d';
import { Vector3D } from '../../vector/vector3d';
import { Color } from '../../color/color';


// TO DO add light source
const lightDir = new Vector3D(1, 1, 1).normalize();
const lightColor = Color.White;

export class PhongMaterial extends Material {

  constructor(
    public readonly diffuse: Color,
    public readonly specular: Color,
    public readonly shininess: number,
    public readonly reflectiveness?: number
  ) {
    super(reflectiveness);
  }

  sample(ray: Ray3D, position: Vector3D, normal: Vector3D) {
    const NdotL = normal.dot(lightDir);
    const H = (lightDir.subtract(ray.direction)).normalize();
    const NdotH = normal.dot(H);
    const diffuseTerm = this.diffuse.multiply(Math.max(NdotL, 0));
    const specularTerm = this.specular.multiply(Math.pow(Math.max(NdotH, 0), this.shininess));
    return lightColor.modulate(diffuseTerm.add(specularTerm));
  }
}
