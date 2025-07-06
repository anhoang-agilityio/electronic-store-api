import { Product } from '../../types';

export const boseHeadphoneProducts: Product[] = [
  {
    id: 'bose-quietcomfort-45',
    name: 'Bose QuietComfort 45',
    images: [`${process.env.API_URL}/images/placeholder-headphone.svg`],
    price: 329,
    discountPercent: 10,
    description: 'Wireless noise-cancelling headphones with premium comfort.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Bose warranty',
    relatedProductIds: ['sony-wh-1000xm5', 'jbl-tour-one-m2', 'bose-sport-earbuds'],
    detailDescription: 'Acoustic Noise Cancelling, 24-hour battery life, Aware Mode, premium comfort.',
    details: {
      audio: {
        drivers: '40mm',
        frequency: '20Hz-20kHz',
        impedance: '32 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.1',
        battery: '24 hours',
      },
      features: {
        noiseCancelling: 'Yes',
        transparency: 'Aware Mode',
        voiceAssistant: 'Yes',
      },
      dimensions: {
        weight: '240g',
        foldable: 'Yes',
        case: 'Included',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible noise cancellation and comfort!',
        date: '2024-03-20',
        reviewerName: 'Alex Johnson',
      },
      {
        rating: 4,
        comment: 'Great sound quality and long battery life.',
        date: '2024-03-25',
        reviewerName: 'Sarah Williams',
      },
    ],
    brandId: 'bose',
    categoryId: 'headphone',
    isBestseller: true,
  },
  {
    id: 'bose-sport-earbuds',
    name: 'Bose Sport Earbuds',
    images: [`${process.env.API_URL}/images/placeholder-headphone.svg`],
    price: 179,
    discountPercent: 15,
    description: 'Wireless sport earbuds with secure fit and water resistance.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Bose warranty',
    relatedProductIds: ['sony-wf-1000xm4', 'jbl-endurance-peak-3', 'bose-quietcomfort-45'],
    detailDescription: 'Secure fit, water resistant, 5-hour battery life, charging case.',
    details: {
      audio: {
        drivers: '9.3mm',
        frequency: '20Hz-20kHz',
        impedance: '32 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.1',
        battery: '5 hours',
      },
      features: {
        waterResistant: 'IPX4',
        secureFit: 'Yes',
        voiceAssistant: 'Yes',
      },
      dimensions: {
        weight: '6.75g each',
        case: 'Included',
        charging: 'USB-C',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Perfect for workouts and running.',
        date: '2024-03-30',
        reviewerName: 'Michael Chen',
      },
    ],
    brandId: 'bose',
    categoryId: 'headphone',
    isNewArrival: true,
  },
]; 