import { Category } from './types';
import { generateImageUrl } from '@/utils';

export const categories: Category[] = [
  { id: 'phone', name: 'Phone', image: generateImageUrl('category-phone.svg') },
  { id: 'computer', name: 'Computer', image: generateImageUrl('category-computer.svg') },
  { id: 'smartwatch', name: 'Smart Watch', image: generateImageUrl('category-smartwatch.svg') },
  { id: 'camera', name: 'Camera', image: generateImageUrl('category-camera.svg') },
  { id: 'headphone', name: 'Headphone', image: generateImageUrl('category-headphone.svg') },
  { id: 'gaming', name: 'Gaming', image: generateImageUrl('category-gaming.svg') },
  { id: 'vision', name: 'Vision', image: generateImageUrl('category-vision.svg') },
]; 