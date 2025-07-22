import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const appleHeadphoneProducts: Product[] = [
  {
    id: 'apple-airpods-max',
    name: 'Apple AirPods Max',
    images: [generateImageUrl('placeholder-headphone.png')],
    price: 549,
    discountPercent: 8,
    description: 'Premium over-ear headphones with Active Noise Cancellation.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Apple warranty',
    relatedProductIds: ['bose-quietcomfort-45', 'sony-wh-1000xm5', 'jbl-tour-one-m2'],
    detailDescription: 'Active Noise Cancellation, Transparency mode, Spatial Audio, 20-hour battery life.',
    details: {
      audio: {
        drivers: '40mm',
        frequency: '20Hz-20kHz',
        impedance: '32 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.0',
        battery: '20 hours',
      },
      features: {
        noiseCancelling: 'Active',
        transparency: 'Yes',
        spatialAudio: 'Yes',
        voiceAssistant: 'Siri',
      },
      dimensions: {
        weight: '384g',
        foldable: 'Yes',
        case: 'Smart Case',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible sound quality and noise cancellation!',
        date: '2024-05-20',
        reviewerName: 'Alex Johnson',
      },
      {
        rating: 4,
        comment: 'Premium build quality and excellent audio.',
        date: '2024-05-25',
        reviewerName: 'Sarah Williams',
      },
    ],
    brandId: 'apple-hp',
    categoryId: 'headphone',
    isBestseller: true,
  },
]; 