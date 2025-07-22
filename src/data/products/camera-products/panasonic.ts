import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const panasonicCameraProducts: Product[] = [
  {
    id: 'panasonic-lumix-s5',
    name: 'Panasonic Lumix S5',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 1999,
    discountPercent: 10,
    description: 'Full-frame mirrorless camera with 24.2MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Panasonic warranty',
    relatedProductIds: ['canon-eos-r5', 'nikon-z6-ii', 'sony-a7-iv', 'panasonic-lumix-g9'],
    detailDescription: '24.2MP full-frame CMOS sensor, 4K video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'Full-frame CMOS',
        resolution: '24.2MP',
        size: '35.6 x 23.8mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264/H.265',
      },
      autofocus: {
        type: 'Contrast AF',
        points: '225 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'DMW-BLK22',
        shots: 'Up to 470 shots',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Excellent video capabilities and build quality.',
        date: '2024-01-10',
        reviewerName: 'Jennifer Lee',
      },
    ],
    brandId: 'panasonic',
    categoryId: 'camera',
    isBestseller: true,
  },
  {
    id: 'panasonic-lumix-g9',
    name: 'Panasonic Lumix G9',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 1299,
    discountPercent: 15,
    description: 'Micro Four Thirds camera with 20.3MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Panasonic warranty',
    relatedProductIds: ['canon-eos-90d', 'nikon-d7500', 'sony-zv-e10', 'panasonic-lumix-s5'],
    detailDescription: '20.3MP Micro Four Thirds sensor, 4K video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'Micro Four Thirds',
        resolution: '20.3MP',
        size: '17.3 x 13mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Contrast AF',
        points: '225 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'DMW-BLF19',
        shots: 'Up to 400 shots',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great for wildlife and sports photography.',
        date: '2024-01-15',
        reviewerName: 'Mark Johnson',
      },
    ],
    brandId: 'panasonic',
    categoryId: 'camera',
    isDiscount: true,
  },
]; 