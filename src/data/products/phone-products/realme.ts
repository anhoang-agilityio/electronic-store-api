import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const realmePhones: Product[] = [
  // Realme (Phone) - 3 products
  {
    id: 'realme-gt-neo5',
    name: 'Realme GT Neo 5',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 399,
    discountPercent: 10,
    description: '240W charging, Snapdragon 8+ Gen 1.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['realme-gt-neo5-se', 'realme-gt-neo4', 'realme-10-pro-plus', 'realme-10-pro', 'realme-10'],
    detailDescription: '240W charging, 5000mAh battery, Snapdragon 8+ Gen 1.',
    details: {
      screen: {
        diagonal: '6.74 inch',
        resolution: '2772 x 1240',
        refreshRate: '144Hz',
        pixelDensity: '450 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8+ Gen 1',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: '240W charging is incredible!',
        date: '2023-05-01',
        reviewerName: 'Raj Patel',
      },
      {
        rating: 4,
        comment: 'Great performance for the price.',
        date: '2023-05-10',
        reviewerName: 'Priya Sharma',
      },
      {
        rating: 5,
        comment: 'Amazing value flagship.',
        date: '2023-05-15',
        reviewerName: 'Amit Kumar',
      },
    ],
    brandId: 'realme',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'realme-gt-neo5-se',
    name: 'Realme GT Neo 5 SE',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 299,
    discountPercent: 12,
    description: '100W charging, Snapdragon 7+ Gen 2.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['realme-gt-neo5', 'realme-gt-neo4', 'realme-10-pro-plus', 'realme-10-pro', 'realme-10'],
    detailDescription: '100W charging, 5500mAh battery, Snapdragon 7+ Gen 2.',
    details: {
      screen: {
        diagonal: '6.74 inch',
        resolution: '2772 x 1240',
        refreshRate: '144Hz',
        pixelDensity: '450 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Snapdragon 7+ Gen 2',
        cores: '8',
      },
      battery: {
        capacity: '5500 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great battery life.',
        date: '2023-05-20',
        reviewerName: 'Sneha Reddy',
      },
      {
        rating: 5,
        comment: 'Excellent value for money.',
        date: '2023-05-25',
        reviewerName: 'Vikram Singh',
      },
    ],
    brandId: 'realme',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'realme-10-pro-plus',
    name: 'Realme 10 Pro+',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 349,
    discountPercent: 15,
    description: '2160Hz PWM dimming, 100W charging.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['realme-gt-neo5', 'realme-gt-neo5-se', 'realme-gt-neo4', 'realme-10-pro', 'realme-10'],
    detailDescription: '2160Hz PWM dimming, 5000mAh battery, Dimensity 1080.',
    details: {
      screen: {
        diagonal: '6.7 inch',
        resolution: '2412 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '394 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 1080',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great display quality.',
        date: '2023-06-01',
        reviewerName: 'Arjun Mehta',
      },
    ],
    brandId: 'realme',
    categoryId: 'phone',
    isDiscount: true,
  },
]