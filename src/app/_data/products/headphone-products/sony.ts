import { Product } from '../../types';

export const sonyHeadphoneProducts: Product[] = [
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    images: [`${process.env.API_URL}/images/placeholder-headphone.svg`],
    price: 399,
    discountPercent: 5,
    description: 'Premium wireless noise-cancelling headphones with industry-leading ANC.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Sony warranty',
    relatedProductIds: ['bose-quietcomfort-45', 'jbl-tour-one-m2', 'sony-wf-1000xm4'],
    detailDescription: 'Industry-leading noise cancellation, 30-hour battery life, LDAC support, Speak-to-Chat.',
    details: {
      audio: {
        drivers: '30mm',
        frequency: '4Hz-40kHz',
        impedance: '48 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.2',
        battery: '30 hours',
      },
      features: {
        noiseCancelling: 'Industry-leading',
        transparency: 'Speak-to-Chat',
        voiceAssistant: 'Yes',
      },
      dimensions: {
        weight: '250g',
        foldable: 'Yes',
        case: 'Included',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Best noise cancellation in the market!',
        date: '2024-04-01',
        reviewerName: 'Emily Davis',
      },
    ],
    brandId: 'sony-hp',
    categoryId: 'headphone',
    isFeatured: true,
  },
  {
    id: 'sony-wf-1000xm4',
    name: 'Sony WF-1000XM4',
    images: [`${process.env.API_URL}/images/placeholder-headphone.svg`],
    price: 279,
    discountPercent: 12,
    description: 'Wireless noise-cancelling earbuds with LDAC support.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Sony warranty',
    relatedProductIds: ['bose-sport-earbuds', 'jbl-endurance-peak-3', 'sony-wh-1000xm5'],
    detailDescription: 'Industry-leading noise cancellation, 8-hour battery life, LDAC support, IPX4 water resistance.',
    details: {
      audio: {
        drivers: '6mm',
        frequency: '20Hz-20kHz',
        impedance: '16 ohms',
      },
      connectivity: {
        type: 'Wireless',
        bluetooth: '5.2',
        battery: '8 hours',
      },
      features: {
        noiseCancelling: 'Industry-leading',
        waterResistant: 'IPX4',
        voiceAssistant: 'Yes',
      },
      dimensions: {
        weight: '7.3g each',
        case: 'Included',
        charging: 'USB-C',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Amazing sound quality and noise cancellation!',
        date: '2024-04-05',
        reviewerName: 'David Wilson',
      },
    ],
    brandId: 'sony-hp',
    categoryId: 'headphone',
    isBestseller: true,
  },
]; 