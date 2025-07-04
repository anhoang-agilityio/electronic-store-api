import { Product } from '../../types';

export const olympusCameraProducts: Product[] = [
  {
    id: 'olympus-om-1',
    name: 'Olympus OM-1',
    images: ['/images/placeholder-camera.svg'],
    price: 2199,
    discountPercent: 5,
    description: 'Micro Four Thirds camera with 20.4MP sensor and advanced AF.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Olympus warranty',
    relatedProductIds: ['panasonic-lumix-g9', 'fujifilm-x-t5', 'sony-zv-e10', 'olympus-e-m10-iv'],
    detailDescription: '20.4MP Micro Four Thirds sensor, 4K video, 5-axis IBIS, Dual Card Slots.',
    details: {
      sensor: {
        type: 'Micro Four Thirds',
        resolution: '20.4MP',
        size: '17.3 x 13mm',
      },
      video: {
        maxResolution: '4K',
        frameRate: '30fps',
        codec: 'H.264',
      },
      autofocus: {
        type: 'Cross Quad Pixel AF',
        points: '1,053 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'BLX-1',
        shots: 'Up to 520 shots',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible autofocus and weather sealing!',
        date: '2024-01-20',
        reviewerName: 'Amanda White',
      },
    ],
    brandId: 'olympus',
    categoryId: 'camera',
    isNewArrival: true,
  },
  {
    id: 'olympus-e-m10-iv',
    name: 'Olympus E-M10 IV',
    images: ['/images/placeholder-camera.svg'],
    price: 699,
    discountPercent: 20,
    description: 'Compact Micro Four Thirds camera with 20.3MP sensor.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Olympus warranty',
    relatedProductIds: ['panasonic-lumix-g9', 'fujifilm-x-t5', 'sony-zv-e10', 'olympus-om-1'],
    detailDescription: '20.3MP Micro Four Thirds sensor, 4K video, 5-axis IBIS, Single Card Slot.',
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
        points: '121 AF areas',
        coverage: '100%',
      },
      connectivity: {
        wifi: 'Yes',
        bluetooth: 'Yes',
        usb: 'USB-C',
      },
      battery: {
        type: 'BLS-50',
        shots: 'Up to 360 shots',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great compact camera for travel.',
        date: '2024-01-25',
        reviewerName: 'Tom Anderson',
      },
    ],
    brandId: 'olympus',
    categoryId: 'camera',
    isDiscount: true,
  },
]; 