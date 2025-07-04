import { Product } from '../../types';

export const oculusVisionProducts: Product[] = [
  {
    id: 'oculus-quest-3',
    name: 'Meta Quest 3',
    images: ['/images/placeholder-vision.svg'],
    price: 499,
    discountPercent: 10,
    description: 'Standalone VR headset with pancake lenses and mixed reality capabilities.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Meta warranty',
    relatedProductIds: ['htc-vive-xr-elite', 'hololens-2', 'apple-vision-pro'],
    detailDescription: 'Pancake lenses, Snapdragon XR2 Gen 2, mixed reality, 128GB storage.',
    details: {
      display: {
        resolution: '2064x2208 per eye',
        refreshRate: '90Hz/120Hz',
        lenses: 'Pancake',
      },
      processor: {
        chip: 'Snapdragon XR2 Gen 2',
        ram: '8GB',
        storage: '128GB',
      },
      connectivity: {
        type: 'Standalone',
        wifi: 'Wi-Fi 6E',
        bluetooth: '5.2',
      },
      features: {
        mixedReality: 'Yes',
        handTracking: 'Yes',
        eyeTracking: 'No',
        passthrough: 'Color',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great standalone VR with excellent mixed reality features.',
        date: '2024-06-05',
        reviewerName: 'Alex Johnson',
      },
    ],
    brandId: 'oculus',
    categoryId: 'vision',
    isNewArrival: true,
  },
]; 