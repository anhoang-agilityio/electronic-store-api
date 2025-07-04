import { Product } from '../../types';
import { applePhones } from './apple';
import { samsungPhones } from './samsung';
import { xiaomiPhones } from './xiaomi';
import { oppoPhones } from './oppo';
import { vivoPhones } from './vivo';
import { googlePhones } from './google';
import { nokiaPhones } from './nokia';
import { oneplusPhones } from './oneplus';
import { realmePhones } from './realme';
import { sonyPhones } from './sony';

export const phoneProducts: Product[] = [
  ...applePhones,
  ...googlePhones,
  ...nokiaPhones,
  ...oneplusPhones,
  ...oppoPhones,
  ...realmePhones,
  ...samsungPhones,
  ...sonyPhones,
  ...vivoPhones,
  ...xiaomiPhones,
]; 