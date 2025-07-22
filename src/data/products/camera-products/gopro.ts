import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const goproCameraProducts: Product[] = [
  {
    id: 'gopro-hero-11-black',
    name: 'GoPro Hero 11 Black',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 499,
    discountPercent: 10,
    description: 'Action camera with 27MP sensor and 5.3K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year GoPro warranty',
    relatedProductIds: ['dji-osmo-action-3', 'sony-zv-e10', 'fujifilm-x100v', 'gopro-hero-10-black'],
    detailDescription: '27MP sensor, 5.3K video, HyperSmooth 5.0, 10-bit color, Waterproof to 33ft.',
    details: {
      sensor: {
        type: '1/1.9" CMOS',
        resolution: '27MP',
        size: '6.17 x 4.55mm',
      },
      video: {
        maxResolution: '5.3K',
        frameRate: '60fps',
        codec: 'H.264/H.265',
      },
      autofocus: {
        type: 'Fixed focus',
        points: 'N/A',
        coverage: 'N/A',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'Rechargeable',
        life: 'Up to 2 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Amazing action camera with incredible stabilization!',
        date: '2024-01-30',
        reviewerName: 'Carlos Rodriguez',
      },
    ],
    brandId: 'gopro',
    categoryId: 'camera',
    isBestseller: true,
  },
  {
    id: 'gopro-hero-10-black',
    name: 'GoPro Hero 10 Black',
    images: [generateImageUrl('placeholder-camera.png')],
    price: 399,
    discountPercent: 20,
    description: 'Action camera with 23MP sensor and 5.3K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year GoPro warranty',
    relatedProductIds: ['dji-osmo-action-3', 'sony-zv-e10', 'gopro-hero-11-black', 'fujifilm-x100v'],
    detailDescription: '23MP sensor, 5.3K video, HyperSmooth 4.0, 10-bit color, Waterproof to 33ft.',
    details: {
      sensor: {
        type: '1/2.3" CMOS',
        resolution: '23MP',
        size: '6.17 x 4.55mm',
      },
      video: {
        maxResolution: '5.3K',
        frameRate: '60fps',
        codec: 'H.264/H.265',
      },
      autofocus: {
        type: 'Fixed focus',
        points: 'N/A',
        coverage: 'N/A',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'Rechargeable',
        life: 'Up to 2 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great action camera for sports and adventures.',
        date: '2024-02-01',
        reviewerName: 'Emma Wilson',
      },
    ],
    brandId: 'gopro',
    categoryId: 'camera',
    isDiscount: true,
  },
]; 