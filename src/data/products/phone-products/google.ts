import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const googlePhones: Product[] = [
  // Google (Phone) - 3 products
  {
    id: 'pixel-7-pro',
    name: 'Google Pixel 7 Pro',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 899,
    discountPercent: 5,
    description: 'Google Tensor G2, exceptional camera.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['pixel-7', 'pixel-6-pro', 'pixel-6', 'pixel-6a', 'pixel-5a'],
    detailDescription: 'Google Tensor G2, 5000mAh battery, 30W charging.',
    details: {
      screen: {
        diagonal: '6.7 inch',
        resolution: '3120 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '512 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Google Tensor G2',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Best camera on any phone!',
        date: '2023-05-01',
        reviewerName: 'Alex Turner',
      },
      {
        rating: 4,
        comment: 'Pure Android experience.',
        date: '2023-05-10',
        reviewerName: 'Rachel Green',
      },
      {
        rating: 5,
        comment: 'AI features are incredible.',
        date: '2023-05-15',
        reviewerName: 'Mark Johnson',
      },
    ],
    brandId: 'google',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'pixel-7',
    name: 'Google Pixel 7',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 599,
    discountPercent: 8,
    description: 'Google Tensor G2, great camera.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['pixel-7-pro', 'pixel-6-pro', 'pixel-6', 'pixel-6a', 'pixel-5a'],
    detailDescription: 'Google Tensor G2, 4355mAh battery, 20W charging.',
    details: {
      screen: {
        diagonal: '6.3 inch',
        resolution: '2400 x 1080',
        refreshRate: '90Hz',
        pixelDensity: '416 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Google Tensor G2',
        cores: '8',
      },
      battery: {
        capacity: '4355 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great camera performance.',
        date: '2023-05-20',
        reviewerName: 'Tom Harris',
      },
      {
        rating: 5,
        comment: 'Clean Android experience.',
        date: '2023-05-25',
        reviewerName: 'Jessica White',
      },
    ],
    brandId: 'google',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'pixel-6a',
    name: 'Google Pixel 6a',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 349,
    discountPercent: 12,
    description: 'Google Tensor, affordable Pixel.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['pixel-7-pro', 'pixel-7', 'pixel-6-pro', 'pixel-6', 'pixel-5a'],
    detailDescription: 'Google Tensor, 4410mAh battery, 18W charging.',
    details: {
      screen: {
        diagonal: '6.1 inch',
        resolution: '2400 x 1080',
        refreshRate: '60Hz',
        pixelDensity: '429 ppi',
        type: 'OLED',
      },
      cpu: {
        name: 'Google Tensor',
        cores: '8',
      },
      battery: {
        capacity: '4410 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great value for money.',
        date: '2023-06-01',
        reviewerName: 'Sam Wilson',
      },
    ],
    brandId: 'google',
    categoryId: 'phone',
    isDiscount: true,
  },
]