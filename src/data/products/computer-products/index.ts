import { Product } from '../../types';
import { acerComputers } from './acer';
import { appleMacComputers } from './apple-mac';
import { asusComputers } from './asus';
import { dellComputers } from './dell';
import { gigabyteComputers } from './gigabyte';
import { hpComputers } from './hp';
import { lenovoComputers } from './lenovo';
import { microsoftComputers } from './microsoft';
import { msiComputers } from './msi';
import { razerComputers } from './razer';

export const computerProducts: Product[] = [
  ...acerComputers,
  ...appleMacComputers,
  ...asusComputers,
  ...dellComputers,
  ...gigabyteComputers,
  ...hpComputers,
  ...lenovoComputers,
  ...microsoftComputers,
  ...msiComputers,
  ...razerComputers,
];