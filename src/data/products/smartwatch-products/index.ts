import { Product } from '../../types';
import { appleWatchProducts } from './apple';
import { garminWatchProducts } from './garmin';
import { samsungWatchProducts } from './samsung';

export const smartwatchProducts: Product[] = [
  ...appleWatchProducts,
  ...samsungWatchProducts,
  ...garminWatchProducts,
]; 