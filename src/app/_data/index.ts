// Export all data from the electronic store
export { categories } from './categories';
export { brands } from './brands';
export { allProducts as products } from './products';
export { 
  phoneProducts, 
  computerProducts, 
  cameraProducts, 
  gamingProducts, 
  headphoneProducts, 
  smartwatchProducts, 
  visionProducts 
} from './products';

// Export types
export type { Category, Brand, Product, Review, ProductDetail } from './types'; 