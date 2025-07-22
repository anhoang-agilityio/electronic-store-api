import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const sonyCameraProducts: Product[] = [
  {
    id: 'sony-a7-iv',
    name: 'Sony A7 IV',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 2499,
    discountPercent: 8,
    description: 'Full-frame mirrorless camera with 33MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Sony warranty',
    relatedProductIds: ['canon-eos-r5', 'nikon-z6-ii', 'fujifilm-x-t5', 'sony-zv-e10'],
    detailDescription: '33MP full-frame CMOS sensor, 4K video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'Full-frame CMOS',
        resolution: '33MP',
        size: '35.6 x 23.8mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264/H.265',
      },
      autofocus: {
        type: 'Fast Hybrid AF',
        points: '759 AF areas',
        coverage: '94%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'NP-FZ100',
        shots: 'Up to 580 shots',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Outstanding autofocus and video capabilities!',
        date: '2023-12-25',
        reviewerName: 'Chris Rodriguez',
      },
    ],
    brandId: 'sony-cam',
    categoryId: 'camera',
    isBestseller: true,
  },
  {
    id: 'sony-zv-e10',
    name: 'Sony ZV-E10',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 699,
    discountPercent: 15,
    description: 'APS-C vlogging camera with 24.2MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Sony warranty',
    relatedProductIds: ['canon-eos-90d', 'nikon-d7500', 'fujifilm-x-t5', 'sony-a7-iv'],
    detailDescription: '24.2MP APS-C CMOS sensor, 4K video, Real-time Eye AF, Single Card Slot.',
    details: {
      sensor: {
        type: 'APS-C CMOS',
        resolution: '24.2MP',
        size: '23.5 x 15.6mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Fast Hybrid AF',
        points: '425 AF areas',
        coverage: '84%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'NP-FW50',
        shots: 'Up to 440 shots',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Perfect for vlogging and content creation.',
        date: '2023-12-30',
        reviewerName: 'Lisa Thompson',
      },
    ],
    brandId: 'sony-cam',
    categoryId: 'camera',
    isNewArrival: true,
  },
]; 