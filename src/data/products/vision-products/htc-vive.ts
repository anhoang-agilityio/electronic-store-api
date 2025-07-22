import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const htcViveVisionProducts: Product[] = [
  {
    id: 'htc-vive-xr-elite',
    name: 'HTC Vive XR Elite',
    images: [generateImageUrl('placeholder-vision.png')],
    price: 1099,
    discountPercent: 5,
    description: 'Premium standalone VR headset with pancake optics and mixed reality.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year HTC warranty',
    relatedProductIds: ['oculus-quest-3', 'hololens-2', 'apple-vision-pro'],
    detailDescription: 'Pancake optics, Snapdragon XR2, mixed reality, detachable battery pack.',
    details: {
      display: {
        resolution: '1920x1920 per eye',
        refreshRate: '90Hz',
        lenses: 'Pancake',
      },
      processor: {
        chip: 'Snapdragon XR2',
        ram: '12GB',
        storage: '128GB',
      },
      connectivity: {
        type: 'Standalone/PC',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.2',
      },
      features: {
        mixedReality: 'Yes',
        handTracking: 'Yes',
        eyeTracking: 'Yes',
        passthrough: 'Color',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Premium VR experience with excellent build quality.',
        date: '2024-06-10',
        reviewerName: 'Sarah Williams',
      },
    ],
    brandId: 'htc-vive',
    categoryId: 'vision',
    isFeatured: true,
  },
]; 