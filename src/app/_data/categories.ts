import { Category } from './types';

export const categories: Category[] = [
  { id: 'phone', name: 'Phone', image: `${process.env.API_URL}/images/category-phone.svg` },
  { id: 'computer', name: 'Computer', image: '/images/category-computer.svg' },
  { id: 'smartwatch', name: 'Smart Watch', image: `${process.env.API_URL}/images/category-smartwatch.svg` },
  { id: 'camera', name: 'Camera', image: '/images/category-camera.svg' },
  { id: 'headphone', name: 'Headphone', image: `${process.env.API_URL}/images/category-headphone.svg` },
  { id: 'gaming', name: 'Gaming', image: `${process.env.API_URL}/images/category-gaming.svg` },
  { id: 'vision', name: 'Vision', image: `${process.env.API_URL}/images/category-vision.svg` },
]; 