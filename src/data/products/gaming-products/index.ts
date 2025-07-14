import { Product } from '../../types';
import { logitechGamingProducts } from './logitech';
import { razerGamingProducts } from './razer';
import { steelseriesGamingProducts } from './steelseries';
import { sonyGamingProducts } from './sony';

export const gamingProducts: Product[] = [
  ...logitechGamingProducts,
  ...razerGamingProducts,
  ...steelseriesGamingProducts,
  ...sonyGamingProducts,
]; 