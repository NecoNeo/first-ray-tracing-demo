import { Ray3D } from '../ray/ray3d';
import { IntersectResult } from '../intersect-result/intersect-result';

/**
 * BASE GEOMETRY
 */
export abstract class Geometry {

  abstract copy(): Geometry;

  abstract intersect(ray: Ray3D): IntersectResult;

}
