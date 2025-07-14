import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const oneplusPhones: Product[] = [
  // OnePlus (Phone) - 3 products
  {
    id: 'oneplus-11',
    name: 'OnePlus 11',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 699,
    discountPercent: 8,
    description: 'Hasselblad cameras, 100W charging.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oneplus-11r', 'oneplus-10-pro', 'oneplus-10t', 'oneplus-nord-3', 'oneplus-nord-2t'],
    detailDescription: 'Hasselblad cameras, 5000mAh battery, Snapdragon 8 Gen 2.',
    details: {
      screen: {
        diagonal: '6.7 inch',
        resolution: '3216 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '525 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8 Gen 2',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Hasselblad cameras are amazing!',
        date: '2023-05-01',
        reviewerName: 'Chris Johnson',
      },
      {
        rating: 4,
        comment: 'Great performance and design.',
        date: '2023-05-10',
        reviewerName: 'Sarah Wilson',
      },
      {
        rating: 5,
        comment: 'Fast charging is incredible.',
        date: '2023-05-15',
        reviewerName: 'Mike Davis',
      },
    ],
    brandId: 'oneplus',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'oneplus-11r',
    name: 'OnePlus 11R',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 499,
    discountPercent: 10,
    description: '100W charging, Snapdragon 8+ Gen 1.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oneplus-11', 'oneplus-10-pro', 'oneplus-10t', 'oneplus-nord-3', 'oneplus-nord-2t'],
    detailDescription: '100W charging, 5000mAh battery, Snapdragon 8+ Gen 1.',
    details: {
      screen: {
        diagonal: '6.74 inch',
        resolution: '2772 x 1240',
        refreshRate: '120Hz',
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
        rating: 4,
        comment: 'Great value flagship.',
        date: '2023-05-20',
        reviewerName: 'Emma Thompson',
      },
      {
        rating: 5,
        comment: 'Excellent performance.',
        date: '2023-05-25',
        reviewerName: 'David Brown',
      },
    ],
    brandId: 'oneplus',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'oneplus-nord-3',
    name: 'OnePlus Nord 3',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 349,
    discountPercent: 12,
    description: '80W charging, Dimensity 9000.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['oneplus-11', 'oneplus-11r', 'oneplus-10-pro', 'oneplus-10t', 'oneplus-nord-2t'],
    detailDescription: '80W charging, 5000mAh battery, Dimensity 9000.',
    details: {
      screen: {
        diagonal: '6.74 inch',
        resolution: '2772 x 1240',
        refreshRate: '120Hz',
        pixelDensity: '450 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Dimensity 9000',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good mid-range option.',
        date: '2023-06-01',
        reviewerName: 'Lisa Anderson',
      },
    ],
    brandId: 'oneplus',
    categoryId: 'phone',
    isDiscount: true,
  },
]