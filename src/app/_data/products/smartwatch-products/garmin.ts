import { Product } from '../../types';

export const garminWatchProducts: Product[] = [
  {
    id: 'garmin-fenix-7',
    name: 'Garmin Fenix 7',
    images: [`${process.env.API_URL}/images/placeholder-smartwatch.svg`],
    price: 699,
    discountPercent: 3,
    description: 'Premium multisport GPS watch with advanced training features.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Garmin warranty',
    relatedProductIds: ['apple-watch-series-9', 'samsung-galaxy-watch-6', 'garmin-vivoactive-5'],
    detailDescription: 'Solar charging, advanced training metrics, topographic maps, 18-day battery life.',
    details: {
      display: {
        size: '42mm/47mm/51mm',
        type: 'Transflective MIP',
        resolution: '260x260 (47mm)',
      },
      processor: {
        chip: 'Custom',
        performance: 'Optimized for sports',
      },
      connectivity: {
        cellular: 'No',
        bluetooth: '5.0',
        wifi: 'Yes',
      },
      features: {
        heartRate: 'Yes',
        gps: 'Multi-band',
        maps: 'Topographic',
        battery: '18 days',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Ultimate sports watch with incredible battery life!',
        date: '2024-05-10',
        reviewerName: 'David Wilson',
      },
    ],
    brandId: 'garmin',
    categoryId: 'smartwatch',
    isBestseller: true,
  },
  {
    id: 'garmin-vivoactive-5',
    name: 'Garmin Vivoactive 5',
    images: [`${process.env.API_URL}/images/placeholder-smartwatch.svg`],
    price: 299,
    discountPercent: 12,
    description: 'Fitness smartwatch with health monitoring and sports tracking.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Garmin warranty',
    relatedProductIds: ['apple-watch-se', 'samsung-galaxy-watch-6-classic', 'garmin-fenix-7'],
    detailDescription: 'AMOLED display, health monitoring, 20+ sports modes, 11-day battery life.',
    details: {
      display: {
        size: '42mm',
        type: 'AMOLED',
        resolution: '240x240',
      },
      processor: {
        chip: 'Custom',
        performance: 'Efficient',
      },
      connectivity: {
        cellular: 'No',
        bluetooth: '5.0',
        wifi: 'Yes',
      },
      features: {
        heartRate: 'Yes',
        gps: 'Yes',
        sports: '20+ modes',
        battery: '11 days',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great fitness watch with excellent battery life.',
        date: '2024-05-15',
        reviewerName: 'Chris Rodriguez',
      },
    ],
    brandId: 'garmin',
    categoryId: 'smartwatch',
    isNewArrival: true,
  },
]; 