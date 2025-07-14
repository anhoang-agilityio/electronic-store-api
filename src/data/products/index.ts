import { Product } from '../types';
import { phoneProducts } from './phone-products';
import { computerProducts } from './computer-products';
import { cameraProducts } from './camera-products';
import { gamingProducts } from './gaming-products';
import { headphoneProducts } from './headphone-products';
import { smartwatchProducts } from './smartwatch-products';
import { visionProducts } from './vision-products';

// Combine all products from different categories
export const allProducts: Product[] = [
  ...phoneProducts,
  ...computerProducts,
  ...cameraProducts,
  ...gamingProducts,
  ...headphoneProducts,
  ...smartwatchProducts,
  ...visionProducts,
];

// Export individual category products for specific use cases
export { phoneProducts } from './phone-products';
export { computerProducts } from './computer-products';
export { cameraProducts } from './camera-products';
export { gamingProducts } from './gaming-products';
export { headphoneProducts } from './headphone-products';
export { smartwatchProducts } from './smartwatch-products';
export { visionProducts } from './vision-products';
