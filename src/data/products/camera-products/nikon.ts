import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const nikonCameraProducts: Product[] = [
  {
    id: 'nikon-z6-ii',
    name: 'Nikon Z6 II',
    images: [generateImageUrl('placeholder-camera.svg')],
    price: 1999,
    discountPercent: 10,
    description: 'Full-frame mirrorless camera with 24.5MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Nikon warranty',
    relatedProductIds: ['canon-eos-r5', 'sony-a7-iv', 'fujifilm-x-t5', 'nikon-d7500'],
    detailDescription: '24.5MP full-frame CMOS sensor, 4K video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'Full-frame CMOS',
        resolution: '24.5MP',
        size: '35.9 x 23.9mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Hybrid AF',
        points: '273 AF areas',
        coverage: '90%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'EN-EL15c',
        shots: 'Up to 410 shots',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Excellent image quality and low-light performance!',
        date: '2023-12-15',
        reviewerName: 'Emily Davis',
      },
    ],
    brandId: 'nikon',
    categoryId: 'camera',
    isFeatured: true,
  },
  {
    id: 'nikon-d7500',
    name: 'Nikon D7500',
    images: [generateImageUrl('placeholder-camera.svg')],
    price: 999,
    discountPercent: 20,
    description: 'APS-C DSLR camera with 20.9MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Nikon warranty',
    relatedProductIds: ['canon-eos-90d', 'sony-a6600', 'fujifilm-x-t5', 'nikon-z6-ii'],
    detailDescription: '20.9MP APS-C CMOS sensor, 4K video, 51-point AF system, Single Card Slot.',
    details: {
      sensor: {
        type: 'APS-C CMOS',
        resolution: '20.9MP',
        size: '23.5 x 15.7mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: '51-point AF',
        points: '51 cross-type',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'EN-EL15a',
        shots: 'Up to 950 shots',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great DSLR for sports and wildlife photography.',
        date: '2023-12-20',
        reviewerName: 'David Wilson',
      },
    ],
    brandId: 'nikon',
    categoryId: 'camera',
    isDiscount: true,
  },
]; 