import { Product } from '../../types';

export const djiCameraProducts: Product[] = [
  {
    id: 'dji-osmo-action-3',
    name: 'DJI Osmo Action 3',
    images: [`${process.env.API_URL}/images/placeholder-camera.svg`],
    price: 329,
    discountPercent: 15,
    description: 'Action camera with 12MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year DJI warranty',
    relatedProductIds: ['gopro-hero-11-black', 'gopro-hero-10-black', 'sony-zv-e10', 'dji-pocket-2'],
    detailDescription: '12MP sensor, 4K video, RockSteady 3.0, 10-bit color, Waterproof to 16ft.',
    details: {
      sensor: {
        type: '1/1.7" CMOS',
        resolution: '12MP',
        size: '7.81 x 5.86mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '120fps',
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
        life: 'Up to 160 minutes',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great alternative to GoPro with good stabilization.',
        date: '2024-02-05',
        reviewerName: 'Robert Smith',
      },
    ],
    brandId: 'dji',
    categoryId: 'camera',
    isNewArrival: true,
  },
  {
    id: 'dji-pocket-2',
    name: 'DJI Pocket 2',
    images: [`${process.env.API_URL}/images/placeholder-camera.svg`],
    price: 349,
    discountPercent: 10,
    description: 'Pocket-sized camera with 64MP sensor and 4K video.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year DJI warranty',
    relatedProductIds: ['gopro-hero-11-black', 'fujifilm-x100v', 'sony-zv-e10', 'dji-osmo-action-3'],
    detailDescription: '64MP sensor, 4K video, 3-axis gimbal, 20mm f/1.8 lens, 1" sensor.',
    details: {
      sensor: {
        type: '1" CMOS',
        resolution: '64MP',
        size: '13.2 x 8.8mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '60fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Hybrid AF',
        points: 'N/A',
        coverage: 'N/A',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'Built-in',
        life: 'Up to 140 minutes',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Perfect for vlogging and travel content!',
        date: '2024-02-10',
        reviewerName: 'Maria Garcia',
      },
    ],
    brandId: 'dji',
    categoryId: 'camera',
    isFeatured: true,
  },
]; 