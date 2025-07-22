import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const canonCameraProducts: Product[] = [
  {
    id: 'canon-eos-r5',
    name: 'Canon EOS R5',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 3899,
    discountPercent: 5,
    description: 'Full-frame mirrorless camera with 45MP sensor and 8K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Canon warranty',
    relatedProductIds: ['sony-a7-iv', 'nikon-z6-ii', 'fujifilm-x-t5', 'canon-eos-90d'],
    detailDescription: '45MP full-frame CMOS sensor, 8K RAW video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'Full-frame CMOS',
        resolution: '45MP',
        size: '36 x 24mm',
      },
      video: {
        maxResolution: '8K RAW',
        frameRate: '30fps',
        codec: 'H.265',
      },
      autofocus: {
        type: 'Dual Pixel CMOS AF II',
        points: '1,053 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'LP-E6NH',
        shots: 'Up to 490 shots',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible image quality and video capabilities!',
        date: '2023-12-01',
        reviewerName: 'Alex Johnson',
      },
      {
        rating: 4,
        comment: 'Great for professional photography and videography.',
        date: '2023-12-05',
        reviewerName: 'Sarah Williams',
      },
    ],
    brandId: 'canon',
    categoryId: 'camera',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'canon-eos-90d',
    name: 'Canon EOS 90D',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 1199,
    discountPercent: 15,
    description: 'APS-C DSLR camera with 32.5MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Canon warranty',
    relatedProductIds: ['canon-eos-r5', 'nikon-d7500', 'sony-a6600', 'fujifilm-x-t5'],
    detailDescription: '32.5MP APS-C CMOS sensor, 4K video, 45-point AF system, Dual Card Slots.',
    details: {
      sensor: {
        type: 'APS-C CMOS',
        resolution: '32.5MP',
        size: '22.3 x 14.9mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: '45-point AF',
        points: '45 cross-type',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'LP-E6N',
        shots: 'Up to 1,300 shots',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Excellent DSLR for enthusiasts.',
        date: '2023-12-10',
        reviewerName: 'Michael Chen',
      },
    ],
    brandId: 'canon',
    categoryId: 'camera',
    isBestseller: true,
  },
]; 