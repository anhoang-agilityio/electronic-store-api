import { Product } from '../../types';
import { oculusVisionProducts } from './oculus';
import { htcViveVisionProducts } from './htc-vive';
import { hololensVisionProducts } from './hololens';
import { appleVisionProducts } from './apple-vision';

export const visionProducts: Product[] = [
  ...oculusVisionProducts,
  ...htcViveVisionProducts,
  ...hololensVisionProducts,
  ...appleVisionProducts,
]; 