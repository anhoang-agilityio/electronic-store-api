import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const xiaomiPhones: Product[] = [
  // Xiaomi (Phone) - 5 products
  {
    id: 'xiaomi-13-ultra',
    name: 'Xiaomi 13 Ultra',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 899,
    discountPercent: 8,
    description: 'Professional photography phone with Leica optics.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['xiaomi-13-pro', 'xiaomi-13', 'xiaomi-12s-ultra', 'xiaomi-12-pro', 'xiaomi-12'],
    detailDescription: 'Leica optics, 5000mAh battery, Snapdragon 8 Gen 2.',
    details: {
      screen: {
        diagonal: '6.73 inch',
        resolution: '3200 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '522 ppi',
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
        comment: 'Camera quality is exceptional!',
        date: '2023-05-01',
        reviewerName: 'David Chen',
      },
      {
        rating: 4,
        comment: 'Great performance, but heavy.',
        date: '2023-05-10',
        reviewerName: 'Lisa Wang',
      },
      {
        rating: 5,
        comment: 'Leica partnership really shows.',
        date: '2023-05-15',
        reviewerName: 'Mike Zhang',
      },
    ],
    brandId: 'xiaomi',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'xiaomi-13-pro',
    name: 'Xiaomi 13 Pro',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 799,
    discountPercent: 10,
    description: 'Premium flagship with ceramic design.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['xiaomi-13-ultra', 'xiaomi-13', 'xiaomi-12s-ultra', 'xiaomi-12-pro', 'xiaomi-12'],
    detailDescription: 'Ceramic design, 4820mAh battery, 120W charging.',
    details: {
      screen: {
        diagonal: '6.73 inch',
        resolution: '3200 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '522 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8 Gen 2',
        cores: '8',
      },
      battery: {
        capacity: '4820 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Beautiful ceramic design.',
        date: '2023-05-20',
        reviewerName: 'Sarah Liu',
      },
      {
        rating: 5,
        comment: 'Fast charging is amazing.',
        date: '2023-05-25',
        reviewerName: 'Kevin Wu',
      },
    ],
    brandId: 'xiaomi',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'xiaomi-13',
    name: 'Xiaomi 13',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 599,
    discountPercent: 12,
    description: 'Compact flagship with great performance.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['xiaomi-13-ultra', 'xiaomi-13-pro', 'xiaomi-12s-ultra', 'xiaomi-12-pro', 'xiaomi-12'],
    detailDescription: 'Compact design, 4500mAh battery, 67W charging.',
    details: {
      screen: {
        diagonal: '6.36 inch',
        resolution: '2400 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '414 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8 Gen 2',
        cores: '8',
      },
      battery: {
        capacity: '4500 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Perfect size for one-handed use.',
        date: '2023-06-01',
        reviewerName: 'Emma Zhao',
      },
      {
        rating: 5,
        comment: 'Great value for money.',
        date: '2023-06-05',
        reviewerName: 'Alex Chen',
      },
    ],
    brandId: 'xiaomi',
    categoryId: 'phone',
    isDiscount: true,
  },
  {
    id: 'xiaomi-12s-ultra',
    name: 'Xiaomi 12S Ultra',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 699,
    discountPercent: 15,
    description: 'Previous generation ultra flagship.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['xiaomi-13-ultra', 'xiaomi-13-pro', 'xiaomi-13', 'xiaomi-12-pro', 'xiaomi-12'],
    detailDescription: '1-inch sensor, 4860mAh battery, Snapdragon 8+ Gen 1.',
    details: {
      screen: {
        diagonal: '6.73 inch',
        resolution: '3200 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '522 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8+ Gen 1',
        cores: '8',
      },
      battery: {
        capacity: '4860 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Still a great phone.',
        date: '2023-06-10',
        reviewerName: 'Tom Li',
      },
    ],
    brandId: 'xiaomi',
    categoryId: 'phone',
  },
  {
    id: 'xiaomi-12-pro',
    name: 'Xiaomi 12 Pro',
    images: [generateImageUrl('placeholder-phone.svg')],
    price: 549,
    discountPercent: 18,
    description: 'Previous generation pro model.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['xiaomi-13-ultra', 'xiaomi-13-pro', 'xiaomi-13', 'xiaomi-12s-ultra', 'xiaomi-12'],
    detailDescription: '4600mAh battery, 120W charging, Snapdragon 8 Gen 1.',
    details: {
      screen: {
        diagonal: '6.73 inch',
        resolution: '3200 x 1440',
        refreshRate: '120Hz',
        pixelDensity: '522 ppi',
        type: 'LTPO AMOLED',
      },
      cpu: {
        name: 'Snapdragon 8 Gen 1',
        cores: '8',
      },
      battery: {
        capacity: '4600 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good performance for the price.',
        date: '2023-06-15',
        reviewerName: 'Grace Wang',
      },
    ],
    brandId: 'xiaomi',
    categoryId: 'phone',
  },
]