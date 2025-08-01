import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const gigabyteComputers: Product[] = [
  // Gigabyte (Computer) - 6 products
  {
    id: 'gigabyte-aorus-17x',
    name: 'Gigabyte AORUS 17X',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 2799,
    discountPercent: 5,
    description: 'Premium gaming laptop with Intel Core i9 and RTX 4090.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year premium support',
    relatedProductIds: ['gigabyte-aorus-15', 'gigabyte-g5-kf', 'gigabyte-g6-kf', 'gigabyte-aero-16', 'gigabyte-u4'],
    detailDescription: 'Intel Core i9-13900HX, 32GB RAM, 1TB SSD, 17.3" QHD display, RTX 4090.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i9-13900HX',
        cores: '24',
        threads: '32',
        baseSpeed: '2.6 GHz',
        maxSpeed: '5.4 GHz',
      },
      memory: {
        capacity: '32 GB',
        type: 'DDR5',
        speed: '5600 MHz',
      },
      storage: {
        capacity: '1 TB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '17.3 inch',
        resolution: '2560 x 1440',
        type: 'IPS',
        refreshRate: '240 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4090',
        memory: '16 GB GDDR6X',
      },
      battery: {
        capacity: '99 Wh',
        life: 'Up to 4 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Absolute beast for gaming!',
        date: '2023-09-01',
        reviewerName: 'Alex Johnson',
      },
    ],
    brandId: 'gigabyte',
    categoryId: 'computer',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'gigabyte-aorus-15',
    name: 'Gigabyte AORUS 15',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 1899,
    discountPercent: 8,
    description: 'Gaming laptop with RTX 4070 and high refresh rate display.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year premium support',
    relatedProductIds: ['gigabyte-aorus-17x', 'gigabyte-g5-kf', 'gigabyte-g6-kf', 'gigabyte-aero-16', 'gigabyte-u4'],
    detailDescription: 'Intel Core i7-13700H, 16GB RAM, 1TB SSD, 15.6" QHD display, RTX 4070.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i7-13700H',
        cores: '14',
        threads: '20',
        baseSpeed: '2.4 GHz',
        maxSpeed: '5.0 GHz',
      },
      memory: {
        capacity: '16 GB',
        type: 'DDR5',
        speed: '5200 MHz',
      },
      storage: {
        capacity: '1 TB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '15.6 inch',
        resolution: '2560 x 1440',
        type: 'IPS',
        refreshRate: '165 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4070',
        memory: '8 GB GDDR6',
      },
      battery: {
        capacity: '99 Wh',
        life: 'Up to 6 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Excellent gaming performance!',
        date: '2023-09-15',
        reviewerName: 'Emily Davis',
      },
    ],
    brandId: 'gigabyte',
    categoryId: 'computer',
    isBestseller: true,
  },
  {
    id: 'gigabyte-g5-kf',
    name: 'Gigabyte G5 KF',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 999,
    discountPercent: 15,
    description: 'Budget gaming laptop with RTX 4060.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year standard support',
    relatedProductIds: ['gigabyte-aorus-17x', 'gigabyte-aorus-15', 'gigabyte-g6-kf', 'gigabyte-aero-16', 'gigabyte-u4'],
    detailDescription: 'Intel Core i5-12500H, 16GB RAM, 512GB SSD, 15.6" FHD display, RTX 4060.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i5-12500H',
        cores: '12',
        threads: '16',
        baseSpeed: '2.5 GHz',
        maxSpeed: '4.5 GHz',
      },
      memory: {
        capacity: '16 GB',
        type: 'DDR4',
        speed: '3200 MHz',
      },
      storage: {
        capacity: '512 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '15.6 inch',
        resolution: '1920 x 1080',
        type: 'IPS',
        refreshRate: '144 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4060',
        memory: '8 GB GDDR6',
      },
      battery: {
        capacity: '54 Wh',
        life: 'Up to 6 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great value for gaming.',
        date: '2023-09-25',
        reviewerName: 'Chris Rodriguez',
      },
    ],
    brandId: 'gigabyte',
    categoryId: 'computer',
    isDiscount: true,
  },
  {
    id: 'gigabyte-g6-kf',
    name: 'Gigabyte G6 KF',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 1199,
    discountPercent: 12,
    description: 'Gaming laptop with RTX 4060 and good performance.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year standard support',
    relatedProductIds: ['gigabyte-aorus-17x', 'gigabyte-aorus-15', 'gigabyte-g5-kf', 'gigabyte-aero-16', 'gigabyte-u4'],
    detailDescription: 'Intel Core i7-12650H, 16GB RAM, 512GB SSD, 15.6" FHD display, RTX 4060.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i7-12650H',
        cores: '10',
        threads: '16',
        baseSpeed: '2.3 GHz',
        maxSpeed: '4.7 GHz',
      },
      memory: {
        capacity: '16 GB',
        type: 'DDR4',
        speed: '3200 MHz',
      },
      storage: {
        capacity: '512 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '15.6 inch',
        resolution: '1920 x 1080',
        type: 'IPS',
        refreshRate: '144 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4060',
        memory: '8 GB GDDR6',
      },
      battery: {
        capacity: '54 Wh',
        life: 'Up to 6 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good gaming performance.',
        date: '2023-10-01',
        reviewerName: 'Lisa Thompson',
      },
    ],
    brandId: 'gigabyte',
    categoryId: 'computer',
    isBestseller: true,
  },
  {
    id: 'gigabyte-aero-16',
    name: 'Gigabyte AERO 16',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 2199,
    discountPercent: 5,
    description: 'Creator laptop with OLED display and RTX 4070.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year premium support',
    relatedProductIds: ['gigabyte-aorus-17x', 'gigabyte-aorus-15', 'gigabyte-g5-kf', 'gigabyte-g6-kf', 'gigabyte-u4'],
    detailDescription: 'Intel Core i7-13700H, 16GB RAM, 1TB SSD, 16" 4K OLED display, RTX 4070.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i7-13700H',
        cores: '14',
        threads: '20',
        baseSpeed: '2.4 GHz',
        maxSpeed: '5.0 GHz',
      },
      memory: {
        capacity: '16 GB',
        type: 'DDR5',
        speed: '5200 MHz',
      },
      storage: {
        capacity: '1 TB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '16 inch',
        resolution: '3840 x 2400',
        type: 'OLED',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4070',
        memory: '8 GB GDDR6',
      },
      battery: {
        capacity: '99 Wh',
        life: 'Up to 8 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Perfect for creative work!',
        date: '2023-10-10',
        reviewerName: 'Sophie Davis',
      },
    ],
    brandId: 'gigabyte',
    categoryId: 'computer',
    isFeatured: true,
  },
  {
    id: 'gigabyte-u4',
    name: 'Gigabyte U4',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 799,
    discountPercent: 20,
    description: 'Ultra-thin laptop with RTX 3050.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year standard support',
    relatedProductIds: ['gigabyte-aorus-17x', 'gigabyte-aorus-15', 'gigabyte-g5-kf', 'gigabyte-g6-kf', 'gigabyte-aero-16'],
    detailDescription: 'Intel Core i5-12450H, 8GB RAM, 256GB SSD, 14" FHD display, RTX 3050.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i5-12450H',
        cores: '8',
        threads: '12',
        baseSpeed: '2.0 GHz',
        maxSpeed: '4.4 GHz',
      },
      memory: {
        capacity: '8 GB',
        type: 'DDR4',
        speed: '3200 MHz',
      },
      storage: {
        capacity: '256 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '14 inch',
        resolution: '1920 x 1080',
        type: 'IPS',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 3050',
        memory: '4 GB GDDR6',
      },
      battery: {
        capacity: '36 Wh',
        life: 'Up to 8 hours',
      },
    },
    reviews: [
      {
        rating: 3,
        comment: 'Good for light gaming and work.',
        date: '2023-10-20',
        reviewerName: 'Mark Johnson',
      },
    ],
    brandId: 'gigabyte',
    categoryId: 'computer',
    isDiscount: true,
  },
]; 