import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const hololensVisionProducts: Product[] = [
  {
    id: 'hololens-2',
    name: 'Microsoft HoloLens 2',
    images: [generateImageUrl('placeholder-vision.svg')],
    price: 3500,
    discountPercent: 0,
    description: 'Enterprise mixed reality headset for business and development.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Microsoft warranty',
    relatedProductIds: ['oculus-quest-3', 'htc-vive-xr-elite', 'apple-vision-pro'],
    detailDescription: 'Holographic display, hand tracking, eye tracking, enterprise-focused.',
    details: {
      display: {
        resolution: '2K per eye',
        refreshRate: '120Hz',
        lenses: 'Waveguide',
      },
      processor: {
        chip: 'Snapdragon 850',
        ram: '4GB',
        storage: '64GB',
      },
      connectivity: {
        type: 'Standalone',
        wifi: 'Wi-Fi 5',
        bluetooth: '5.0',
      },
      features: {
        mixedReality: 'Yes',
        handTracking: 'Yes',
        eyeTracking: 'Yes',
        passthrough: 'See-through',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Revolutionary enterprise AR with incredible holographic display.',
        date: '2024-06-15',
        reviewerName: 'Michael Chen',
      },
    ],
    brandId: 'hololens',
    categoryId: 'vision',
    isBestseller: true,
  },
]; 