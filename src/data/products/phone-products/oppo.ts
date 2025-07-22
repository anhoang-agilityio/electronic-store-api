import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const oppoPhones: Product[] = [
  // Oppo (Phone) - 5 products
  {
    id: 'oppo-find-x6-pro',
    name: 'OPPO Find X6 Pro',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 899,
    discountPercent: 5,
    description: 'Hasselblad camera system with MariSilicon X.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oppo-find-x6', 'oppo-find-x5-pro', 'oppo-find-x5', 'oppo-reno10-pro', 'oppo-reno10'],
    detailDescription: 'Hasselblad cameras, 5000mAh battery, Dimensity 9200.',
    details: {
      screen: {
        diagonal: '6.82 inch',
        resolution: '3216 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '525 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Dimensity 9200',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Hasselblad cameras are incredible!',
        date: '2023-05-01',
        reviewerName: 'James Lee',
      },
      {
        rating: 4,
        comment: 'Great design and performance.',
        date: '2023-05-10',
        reviewerName: 'Sophie Kim',
      },
      {
        rating: 5,
        comment: 'MariSilicon X makes a difference.',
        date: '2023-05-15',
        reviewerName: 'Daniel Park',
      },
    ],
    brandId: 'oppo',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'oppo-find-x6',
    name: 'OPPO Find X6',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 699,
    discountPercent: 8,
    description: 'Flagship with Hasselblad cameras.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oppo-find-x6-pro', 'oppo-find-x5-pro', 'oppo-find-x5', 'oppo-reno10-pro', 'oppo-reno10'],
    detailDescription: 'Hasselblad cameras, 4800mAh battery, Dimensity 9200.',
    details: {
      screen: {
        diagonal: '6.74 inch',
        resolution: '2772 x 1240',
        refreshRate: '120Hz',
        pixelDensity: '450 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 9200',
        cores: '8',
      },
      battery: {
        capacity: '4800 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great camera performance.',
        date: '2023-05-20',
        reviewerName: 'Maria Garcia',
      },
      {
        rating: 5,
        comment: 'Smooth performance.',
        date: '2023-05-25',
        reviewerName: 'Carlos Rodriguez',
      },
    ],
    brandId: 'oppo',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'oppo-find-x5-pro',
    name: 'OPPO Find X5 Pro',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 599,
    discountPercent: 15,
    description: 'Previous generation pro flagship.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oppo-find-x6-pro', 'oppo-find-x6', 'oppo-find-x5', 'oppo-reno10-pro', 'oppo-reno10'],
    detailDescription: 'MariSilicon X, 5000mAh battery, Snapdragon 8 Gen 1.',
    details: {
      screen: {
        diagonal: '6.7 inch',
        resolution: '3216 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '525 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8 Gen 1',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Still a great phone.',
        date: '2023-06-01',
        reviewerName: 'Ana Silva',
      },
    ],
    brandId: 'oppo',
    categoryId: 'phone',
  },
  {
    id: 'oppo-reno10-pro',
    name: 'OPPO Reno10 Pro',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 449,
    discountPercent: 10,
    description: 'Mid-range with great cameras.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oppo-find-x6-pro', 'oppo-find-x6', 'oppo-find-x5-pro', 'oppo-find-x5', 'oppo-reno10'],
    detailDescription: '4600mAh battery, 100W charging, Dimensity 8200.',
    details: {
      screen: {
        diagonal: '6.7 inch',
        resolution: '2412 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '394 ppi',
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
        comment: 'Good value for money.',
        date: '2023-06-05',
        reviewerName: 'Lucas Santos',
      },
    ],
    brandId: 'oppo',
    categoryId: 'phone',
    isDiscount: true,
  },
  {
    id: 'oppo-reno10',
    name: 'OPPO Reno10',
    images: [generateImageUrl('placeholder-phone.png')],
    price: 349,
    discountPercent: 12,
    description: 'Affordable mid-range option.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oppo-find-x6-pro', 'oppo-find-x6', 'oppo-find-x5-pro', 'oppo-find-x5', 'oppo-reno10-pro'],
    detailDescription: '5000mAh battery, 67W charging, Dimensity 7050.',
    details: {
      screen: {
        diagonal: '6.7 inch',
        resolution: '2412 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '394 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 7050',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Solid mid-range phone.',
        date: '2023-06-10',
        reviewerName: 'Isabella Costa',
      },
    ],
    brandId: 'oppo',
    categoryId: 'phone',
  },
]