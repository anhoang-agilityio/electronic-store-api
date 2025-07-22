import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const appleWatchProducts: Product[] = [
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    images: [generateImageUrl('placeholder-smartwatch.png')],
    price: 399,
    discountPercent: 5,
    description: 'Latest Apple Watch with S9 chip and Double Tap gesture.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Apple warranty',
    relatedProductIds: ['samsung-galaxy-watch-6', 'garmin-fenix-7', 'apple-watch-se'],
    detailDescription: 'S9 chip, Double Tap gesture, Always-On Retina display, health monitoring.',
    details: {
      display: {
        size: '41mm/45mm',
        type: 'Always-On Retina',
        resolution: '352x430 (45mm)',
      },
      processor: {
        chip: 'S9',
        performance: 'Up to 2x faster',
      },
      connectivity: {
        cellular: 'Optional',
        bluetooth: '5.3',
        wifi: 'Yes',
      },
      features: {
        heartRate: 'Yes',
        ecg: 'Yes',
        bloodOxygen: 'Yes',
        gps: 'Yes',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Amazing performance and health features!',
        date: '2024-04-20',
        reviewerName: 'Alex Johnson',
      },
    ],
    brandId: 'apple-watch',
    categoryId: 'smartwatch',
    isBestseller: true,
  },
  {
    id: 'apple-watch-se',
    name: 'Apple Watch SE',
    images: [generateImageUrl('placeholder-smartwatch.png')],
    price: 249,
    discountPercent: 10,
    description: 'Affordable Apple Watch with essential features.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Apple warranty',
    relatedProductIds: ['samsung-galaxy-watch-6-classic', 'garmin-vivoactive-5', 'apple-watch-series-9'],
    detailDescription: 'S8 chip, Retina display, health monitoring, fitness tracking.',
    details: {
      display: {
        size: '40mm/44mm',
        type: 'Retina',
        resolution: '324x394 (44mm)',
      },
      processor: {
        chip: 'S8',
        performance: 'Fast and efficient',
      },
      connectivity: {
        cellular: 'Optional',
        bluetooth: '5.0',
        wifi: 'Yes',
      },
      features: {
        heartRate: 'Yes',
        ecg: 'No',
        bloodOxygen: 'No',
        gps: 'Yes',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great value for money with essential features.',
        date: '2024-04-25',
        reviewerName: 'Sarah Williams',
      },
    ],
    brandId: 'apple-watch',
    categoryId: 'smartwatch',
    isDiscount: true,
  },
]; 