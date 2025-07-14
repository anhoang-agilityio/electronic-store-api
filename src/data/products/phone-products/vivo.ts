import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const vivoPhones: Product[] = [
  // Vivo (Phone) - 5 products
  {
    id: 'vivo-x90-pro-plus',
    name: 'vivo X90 Pro+',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 899,
    discountPercent: 5,
    description: 'Zeiss optics with V2 imaging chip.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['vivo-x90-pro', 'vivo-x90', 'vivo-x80-pro', 'vivo-v29-pro', 'vivo-v29'],
    detailDescription: 'Zeiss cameras, 4700mAh battery, Snapdragon 8 Gen 2.',
    details: {
      screen: {
        diagonal: '6.78 inch',
        resolution: '3200 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '517 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8 Gen 2',
        cores: '8',
      },
      battery: {
        capacity: '4700 mAh',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Zeiss cameras are amazing!',
        date: '2023-05-01',
        reviewerName: 'Yuki Tanaka',
      },
      {
        rating: 4,
        comment: 'Great performance and design.',
        date: '2023-05-10',
        reviewerName: 'Hiroshi Yamamoto',
      },
      {
        rating: 5,
        comment: 'V2 imaging chip is impressive.',
        date: '2023-05-15',
        reviewerName: 'Aiko Sato',
      },
    ],
    brandId: 'vivo',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'vivo-x90-pro',
    name: 'vivo X90 Pro',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 699,
    discountPercent: 8,
    description: 'Flagship with Zeiss cameras.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['vivo-x90-pro-plus', 'vivo-x90', 'vivo-x80-pro', 'vivo-v29-pro', 'vivo-v29'],
    detailDescription: 'Zeiss cameras, 4870mAh battery, Dimensity 9200.',
    details: {
      screen: {
        diagonal: '6.78 inch',
        resolution: '2800 x 1260',
        refreshRate: '120Hz',
        pixelDensity: '453 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 9200',
        cores: '8',
      },
      battery: {
        capacity: '4870 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Excellent camera quality.',
        date: '2023-05-20',
        reviewerName: 'Kenji Nakamura',
      },
      {
        rating: 5,
        comment: 'Smooth performance.',
        date: '2023-05-25',
        reviewerName: 'Mika Suzuki',
      },
    ],
    brandId: 'vivo',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'vivo-x90',
    name: 'vivo X90',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 549,
    discountPercent: 12,
    description: 'Mainstream flagship option.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['vivo-x90-pro-plus', 'vivo-x90-pro', 'vivo-x80-pro', 'vivo-v29-pro', 'vivo-v29'],
    detailDescription: '4810mAh battery, 120W charging, Dimensity 9200.',
    details: {
      screen: {
        diagonal: '6.78 inch',
        resolution: '2800 x 1260',
        refreshRate: '120Hz',
        pixelDensity: '453 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 9200',
        cores: '8',
      },
      battery: {
        capacity: '4810 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good value for money.',
        date: '2023-06-01',
        reviewerName: 'Takashi Ito',
      },
    ],
    brandId: 'vivo',
    categoryId: 'phone',
    isDiscount: true,
  },
  {
    id: 'vivo-v29-pro',
    name: 'vivo V29 Pro',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 399,
    discountPercent: 10,
    description: 'Mid-range with great cameras.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['vivo-x90-pro-plus', 'vivo-x90-pro', 'vivo-x90', 'vivo-x80-pro', 'vivo-v29'],
    detailDescription: '4600mAh battery, 80W charging, Dimensity 8200.',
    details: {
      screen: {
        diagonal: '6.78 inch',
        resolution: '2400 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '388 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 8200',
        cores: '8',
      },
      battery: {
        capacity: '4600 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Solid mid-range performance.',
        date: '2023-06-05',
        reviewerName: 'Yumi Tanaka',
      },
    ],
    brandId: 'vivo',
    categoryId: 'phone',
  },
  {
    id: 'vivo-v29',
    name: 'vivo V29',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 299,
    discountPercent: 15,
    description: 'Affordable mid-range option.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['vivo-x90-pro-plus', 'vivo-x90-pro', 'vivo-x90', 'vivo-x80-pro', 'vivo-v29-pro'],
    detailDescription: '5000mAh battery, 66W charging, Snapdragon 778G.',
    details: {
      screen: {
        diagonal: '6.78 inch',
        resolution: '2400 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '388 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Snapdragon 778G',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good budget option.',
        date: '2023-06-10',
        reviewerName: 'Ryo Watanabe',
      },
    ],
    brandId: 'vivo',
    categoryId: 'phone',
  },
]