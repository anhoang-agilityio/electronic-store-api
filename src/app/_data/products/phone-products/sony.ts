import { Product } from '../../types';

export const sonyPhones: Product[] = [
  // Sony (Phone) - 3 products
  {
    id: 'sony-xperia-1-v',
    name: 'Sony Xperia 1 V',
    images: [`${process.env.API_URL}/images/placeholder-phone.svg`],
    price: 1299,
    discountPercent: 5,
    description: 'Cinema camera, 4K display.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['sony-xperia-5-v', 'sony-xperia-1-iv', 'sony-xperia-5-iv', 'sony-xperia-10-v', 'sony-xperia-10-iv'],
    detailDescription: 'Cinema camera, 5000mAh battery, Snapdragon 8 Gen 2.',
    details: {
      screen: {
        diagonal: '6.5 inch',
        resolution: '3840 x 1644',
        refreshRate: '120Hz',
        pixelDensity: '643 ppi',
        type: 'OLED',
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
        comment: 'Best camera for video!',
        date: '2023-05-01',
        reviewerName: 'Yuki Tanaka',
      },
      {
        rating: 4,
        comment: '4K display is stunning.',
        date: '2023-05-10',
        reviewerName: 'Hiroshi Yamamoto',
      },
      {
        rating: 5,
        comment: 'Professional features.',
        date: '2023-05-15',
        reviewerName: 'Aiko Sato',
      },
    ],
    brandId: 'sony',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'sony-xperia-5-v',
    name: 'Sony Xperia 5 V',
    images: [`${process.env.API_URL}/images/placeholder-phone.svg`],
    price: 999,
    discountPercent: 8,
    description: 'Compact flagship, cinema camera.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['sony-xperia-1-v', 'sony-xperia-1-iv', 'sony-xperia-5-iv', 'sony-xperia-10-v', 'sony-xperia-10-iv'],
    detailDescription: 'Compact design, 5000mAh battery, Snapdragon 8 Gen 2.',
    details: {
      screen: {
        diagonal: '6.1 inch',
        resolution: '2520 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '449 ppi',
        type: 'OLED',
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
        rating: 4,
        comment: 'Perfect compact size.',
        date: '2023-05-20',
        reviewerName: 'Kenji Nakamura',
      },
      {
        rating: 5,
        comment: 'Great camera performance.',
        date: '2023-05-25',
        reviewerName: 'Mika Suzuki',
      },
    ],
    brandId: 'sony',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'sony-xperia-10-v',
    name: 'Sony Xperia 10 V',
    images: [`${process.env.API_URL}/images/placeholder-phone.svg`],
    price: 449,
    discountPercent: 12,
    description: '21:9 display, 3 years updates.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['sony-xperia-1-v', 'sony-xperia-5-v', 'sony-xperia-1-iv', 'sony-xperia-5-iv', 'sony-xperia-10-iv'],
    detailDescription: '21:9 display, 5000mAh battery, Snapdragon 695.',
    details: {
      screen: {
        diagonal: '6.1 inch',
        resolution: '2520 x 1080',
        refreshRate: '60Hz',
        pixelDensity: '449 ppi',
        type: 'OLED',
      },
      cpu: {
        name: 'Snapdragon 695',
        cores: '8',
      },
      battery: {
        capacity: '5000 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great 21:9 display.',
        date: '2023-06-01',
        reviewerName: 'Takashi Ito',
      },
    ],
    brandId: 'sony',
    categoryId: 'phone',
    isDiscount: true,
  },
]