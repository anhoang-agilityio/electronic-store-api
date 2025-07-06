import { Product } from '../../types';

export const fujifilmCameraProducts: Product[] = [
  {
    id: 'fujifilm-x-t5',
    name: 'Fujifilm X-T5',
    images: [`${process.env.API_URL}/images/placeholder-camera.svg`],
    price: 1699,
    discountPercent: 5,
    description: 'APS-C mirrorless camera with 40MP sensor and classic design.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Fujifilm warranty',
    relatedProductIds: ['canon-eos-90d', 'nikon-d7500', 'sony-zv-e10', 'fujifilm-x100v'],
    detailDescription: '40MP APS-C X-Trans CMOS sensor, 4K video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'APS-C X-Trans CMOS',
        resolution: '40MP',
        size: '23.5 x 15.6mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Hybrid AF',
        points: '425 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'NP-W235',
        shots: 'Up to 580 shots',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Beautiful colors and film simulation modes!',
        date: '2024-01-01',
        reviewerName: 'Ryan Chen',
      },
    ],
    brandId: 'fujifilm',
    categoryId: 'camera',
    isFeatured: true,
  },
  {
    id: 'fujifilm-x100v',
    name: 'Fujifilm X100V',
    images: [`${process.env.API_URL}/images/placeholder-camera.svg`],
    price: 1399,
    discountPercent: 0,
    description: 'Premium compact camera with 26.1MP sensor and fixed 23mm lens.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Fujifilm warranty',
    relatedProductIds: ['canon-eos-90d', 'nikon-d7500', 'fujifilm-x-t5', 'sony-zv-e10'],
    detailDescription: '26.1MP APS-C X-Trans CMOS sensor, 4K video, 23mm f/2 lens, Hybrid Viewfinder.',
    details: {
      sensor: {
        type: 'APS-C X-Trans CMOS',
        resolution: '26.1MP',
        size: '23.5 x 15.6mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Hybrid AF',
        points: '425 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'NP-W126S',
        shots: 'Up to 420 shots',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Perfect street photography camera!',
        date: '2024-01-05',
        reviewerName: 'Sophie Davis',
      },
    ],
    brandId: 'fujifilm',
    categoryId: 'camera',
    isNewArrival: true,
  },
]; 