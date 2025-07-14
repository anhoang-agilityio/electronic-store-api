import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const sonyGamingProducts: Product[] = [
  {
    id: 'sony-playstation-5',
    name: 'Sony PlayStation 5',
    images: [generateImageUrl('placeholder-gaming.svg')],
    price: 499,
    discountPercent: 0,
    description: 'Next-generation gaming console with 4K graphics and ray tracing.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year Sony warranty',
    relatedProductIds: ['logitech-g-pro-x-superlight', 'razer-deathadder-v3-pro', 'steelseries-aerox-3'],
    detailDescription: 'Custom AMD Zen 2 CPU, RDNA 2 GPU, 825GB SSD, 4K gaming, ray tracing support.',
    details: {
      processor: {
        cpu: 'AMD Zen 2',
        cores: '8-core',
        frequency: '3.5GHz',
      },
      graphics: {
        gpu: 'AMD RDNA 2',
        memory: '16GB GDDR6',
        rayTracing: 'Yes',
      },
      storage: {
        type: 'SSD',
        capacity: '825GB',
        speed: '5.5GB/s',
      },
      features: {
        resolution: '4K',
        framerate: 'Up to 120fps',
        hdr: 'Yes',
        backwardCompatibility: 'PS4',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible gaming performance and graphics!',
        date: '2024-05-30',
        reviewerName: 'Michael Chen',
      },
      {
        rating: 5,
        comment: 'Fast loading times and amazing exclusives.',
        date: '2024-06-01',
        reviewerName: 'Emily Davis',
      },
    ],
    brandId: 'sony-gaming',
    categoryId: 'gaming',
    isFeatured: true,
  },
]; 