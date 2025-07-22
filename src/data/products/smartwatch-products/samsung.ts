import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const samsungWatchProducts: Product[] = [
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6',
    images: [generateImageUrl('placeholder-smartwatch.png')],
    price: 299,
    discountPercent: 8,
    description: 'Android smartwatch with advanced health monitoring.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Samsung warranty',
    relatedProductIds: ['apple-watch-series-9', 'garmin-fenix-7', 'samsung-galaxy-watch-6-classic'],
    detailDescription: 'Wear OS 4, Exynos W930 chip, health monitoring, fitness tracking.',
    details: {
      display: {
        size: '40mm/44mm',
        type: 'Super AMOLED',
        resolution: '432x432 (44mm)',
      },
      processor: {
        chip: 'Exynos W930',
        performance: 'Fast and efficient',
      },
      connectivity: {
        cellular: 'Optional',
        bluetooth: '5.3',
        wifi: 'Yes',
      },
      features: {
        heartRate: 'Yes',
        ecg: 'Yes',
        bloodPressure: 'Yes',
        gps: 'Yes',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great Android smartwatch with excellent health features.',
        date: '2024-05-01',
        reviewerName: 'Michael Chen',
      },
    ],
    brandId: 'samsung-watch',
    categoryId: 'smartwatch',
    isNewArrival: true,
  },
  {
    id: 'samsung-galaxy-watch-6-classic',
    name: 'Samsung Galaxy Watch 6 Classic',
    images: [generateImageUrl('placeholder-smartwatch.png')],
    price: 399,
    discountPercent: 5,
    description: 'Premium Android smartwatch with rotating bezel.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Samsung warranty',
    relatedProductIds: ['apple-watch-se', 'garmin-vivoactive-5', 'samsung-galaxy-watch-6'],
    detailDescription: 'Rotating bezel, Wear OS 4, Exynos W930 chip, premium design.',
    details: {
      display: {
        size: '43mm/47mm',
        type: 'Super AMOLED',
        resolution: '480x480 (47mm)',
      },
      processor: {
        chip: 'Exynos W930',
        performance: 'Fast and efficient',
      },
      connectivity: {
        cellular: 'Optional',
        bluetooth: '5.3',
        wifi: 'Yes',
      },
      features: {
        heartRate: 'Yes',
        ecg: 'Yes',
        bloodPressure: 'Yes',
        gps: 'Yes',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Premium design with rotating bezel is amazing!',
        date: '2024-05-05',
        reviewerName: 'Emily Davis',
      },
    ],
    brandId: 'samsung-watch',
    categoryId: 'smartwatch',
    isFeatured: true,
  },
]; 