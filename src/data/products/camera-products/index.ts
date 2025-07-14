import { Product } from '../../types';
import { canonCameraProducts } from './canon';
import { nikonCameraProducts } from './nikon';
import { sonyCameraProducts } from './sony';
import { fujifilmCameraProducts } from './fujifilm';
import { panasonicCameraProducts } from './panasonic';
import { olympusCameraProducts } from './olympus';
import { goproCameraProducts } from './gopro';
import { djiCameraProducts } from './dji';

export const cameraProducts: Product[] = [
  ...canonCameraProducts,
  ...nikonCameraProducts,
  ...sonyCameraProducts,
  ...fujifilmCameraProducts,
  ...panasonicCameraProducts,
  ...olympusCameraProducts,
  ...goproCameraProducts,
  ...djiCameraProducts,
]; 