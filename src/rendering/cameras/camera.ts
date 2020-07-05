import { Ray3D } from '../ray/ray3d';

/**
 * BASE CAMERA
 */
export abstract class Camera {

  abstract generateRay(x: number, y: number): Ray3D;

}
