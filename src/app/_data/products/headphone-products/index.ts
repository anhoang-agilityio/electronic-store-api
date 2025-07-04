import { Product } from '../../types';
import { boseHeadphoneProducts } from './bose';
import { sonyHeadphoneProducts } from './sony';
import { jblHeadphoneProducts } from './jbl';
import { appleHeadphoneProducts } from './apple';

export const headphoneProducts: Product[] = [
  ...boseHeadphoneProducts,
  ...sonyHeadphoneProducts,
  ...jblHeadphoneProducts,
  ...appleHeadphoneProducts,
]; 