import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const appleVisionProducts: Product[] = [
  {
    id: 'apple-vision-pro',
    name: 'Apple Vision Pro',
    images: [generateImageUrl('placeholder-vision.svg')],
    price: 3499,
    discountPercent: 0,
    description: 'Revolutionary spatial computing device with micro-OLED displays.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Apple warranty',
    relatedProductIds: ['oculus-quest-3', 'htc-vive-xr-elite', 'hololens-2'],
    detailDescription: 'Micro-OLED displays, M2 chip, R1 chip, spatial audio, eye tracking.',
    details: {
      display: {
        resolution: '4K per eye',
        refreshRate: '90Hz/96Hz',
        lenses: 'Custom',
      },
      processor: {
        chip: 'M2 + R1',
        ram: '16GB',
        storage: '256GB/512GB/1TB',
      },
      connectivity: {
        type: 'Standalone',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.3',
      },
      features: {
        mixedReality: 'Yes',
        handTracking: 'Yes',
        eyeTracking: 'Yes',
        passthrough: 'Ultra-high resolution',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Revolutionary spatial computing experience!',
        date: '2024-06-20',
        reviewerName: 'Emily Davis',
      },
      {
        rating: 5,
        comment: 'Incredible display quality and seamless integration.',
        date: '2024-06-25',
        reviewerName: 'David Wilson',
      },
    ],
    brandId: 'apple-vision',
    categoryId: 'vision',
    isFeatured: true,
  },
]; 