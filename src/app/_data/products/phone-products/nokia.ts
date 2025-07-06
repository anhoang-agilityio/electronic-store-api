import { Product } from '../../types';

export const nokiaPhones: Product[] = [
  // Nokia (Phone) - 3 products
  {
    id: 'nokia-x30',
    name: 'Nokia X30',
    images: [`${process.env.API_URL}/images/placeholder-phone.svg`],
    price: 399,
    discountPercent: 10,
    description: 'Sustainable design, 3 years updates.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['nokia-g60', 'nokia-x20', 'nokia-g50', 'nokia-8-3', 'nokia-7-2'],
    detailDescription: 'Sustainable design, 4200mAh battery, Snapdragon 695.',
    details: {
      screen: {
        diagonal: '6.43 inch',
        resolution: '2400 x 1080',
        refreshRate: '90Hz',
        pixelDensity: '409 ppi',
        type: 'AMOLED',
      },
      cpu: {
        name: 'Snapdragon 695',
        cores: '8',
      },
      battery: {
        capacity: '4200 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great sustainable design.',
        date: '2023-05-01',
        reviewerName: 'Erik Svensson',
      },
      {
        rating: 5,
        comment: '3 years of updates is amazing.',
        date: '2023-05-10',
        reviewerName: 'Anna Lindberg',
      },
      {
        rating: 4,
        comment: 'Solid build quality.',
        date: '2023-05-15',
        reviewerName: 'Lars Johansson',
      },
    ],
    brandId: 'nokia',
    categoryId: 'phone',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'nokia-g60',
    name: 'Nokia G60',
    images: [`${process.env.API_URL}/images/placeholder-phone.svg`],
    price: 299,
    discountPercent: 12,
    description: '5G, 3 years updates.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['nokia-x30', 'nokia-x20', 'nokia-g50', 'nokia-8-3', 'nokia-7-2'],
    detailDescription: '5G, 4500mAh battery, Snapdragon 695.',
    details: {
      screen: {
        diagonal: '6.58 inch',
        resolution: '2408 x 1080',
        refreshRate: '120Hz',
        pixelDensity: '400 ppi',
        type: 'IPS LCD',
      },
      cpu: {
        name: 'Snapdragon 695',
        cores: '8',
      },
      battery: {
        capacity: '4500 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good 5G performance.',
        date: '2023-05-20',
        reviewerName: 'Maria Andersson',
      },
      {
        rating: 5,
        comment: 'Great battery life.',
        date: '2023-05-25',
        reviewerName: 'Johan Bergman',
      },
    ],
    brandId: 'nokia',
    categoryId: 'phone',
    isBestseller: true,
  },
  {
    id: 'nokia-x20',
    name: 'Nokia X20',
    images: [`${process.env.API_URL}/images/placeholder-phone.svg`],
    price: 249,
    discountPercent: 15,
    description: '3 years updates, Zeiss optics.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year official warranty',
    relatedProductIds: ['nokia-x30', 'nokia-g60', 'nokia-g50', 'nokia-8-3', 'nokia-7-2'],
    detailDescription: '3 years updates, 4470mAh battery, Snapdragon 480.',
    details: {
      screen: {
        diagonal: '6.67 inch',
        resolution: '2400 x 1080',
        refreshRate: '60Hz',
        pixelDensity: '395 ppi',
        type: 'IPS LCD',
      },
      cpu: {
        name: 'Snapdragon 480',
        cores: '8',
      },
      battery: {
        capacity: '4470 mAh',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good value for money.',
        date: '2023-06-01',
        reviewerName: 'Peter Nilsson',
      },
    ],
    brandId: 'nokia',
    categoryId: 'phone',
    isDiscount: true,
  },
]