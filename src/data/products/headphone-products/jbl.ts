import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const jblHeadphoneProducts: Product[] = [
  {
    id: 'jbl-tour-one-m2',
    name: 'JBL Tour One M2',
    images: [generateImageUrl('placeholder-headphone.svg')],
    price: 299,
    discountPercent: 8,
    description: 'Wireless noise-cancelling headphones with premium audio quality.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year JBL warranty',
    relatedProductIds: ['bose-quietcomfort-45', 'sony-wh-1000xm5', 'jbl-endurance-peak-3'],
    detailDescription: 'Adaptive Noise Cancelling, 50-hour battery life, Smart Ambient, premium comfort.',
    details: {
      audio: {
        drivers: '40mm',
        frequency: '10Hz-22kHz',
        impedance: '32 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.3',
        battery: '50 hours',
      },
      features: {
        noiseCancelling: 'Adaptive',
        transparency: 'Smart Ambient',
        voiceAssistant: 'Yes',
      },
      dimensions: {
        weight: '268g',
        foldable: 'Yes',
        case: 'Included',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great sound quality and long battery life.',
        date: '2024-04-10',
        reviewerName: 'Chris Rodriguez',
      },
    ],
    brandId: 'jbl',
    categoryId: 'headphone',
    isNewArrival: true,
  },
  {
    id: 'jbl-endurance-peak-3',
    name: 'JBL Endurance Peak 3',
    images: [generateImageUrl('placeholder-headphone.svg')],
    price: 99,
    discountPercent: 20,
    description: 'Wireless sport earbuds with secure fit and water resistance.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year JBL warranty',
    relatedProductIds: ['bose-sport-earbuds', 'sony-wf-1000xm4', 'jbl-tour-one-m2'],
    detailDescription: 'Secure fit, IPX5 water resistance, 10-hour battery life, charging case.',
    details: {
      audio: {
        drivers: '10mm',
        frequency: '20Hz-20kHz',
        impedance: '16 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.2',
        battery: '10 hours',
      },
      features: {
        waterResistant: 'IPX5',
        secureFit: 'Yes',
        voiceAssistant: 'Yes',
      },
      dimensions: {
        weight: '6.5g each',
        case: 'Included',
        charging: 'USB-C',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Perfect for workouts and outdoor activities.',
        date: '2024-04-15',
        reviewerName: 'Lisa Thompson',
      },
    ],
    brandId: 'jbl',
    categoryId: 'headphone',
    isDiscount: true,
  },
]; 