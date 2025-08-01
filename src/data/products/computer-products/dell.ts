import { Product } from "../../types";
import { generateImageUrl } from '@/utils';

export const dellComputers: Product[] = [
  // Dell (Computer) - 10 products
  {
    id: 'dell-xps-13-plus',
    name: 'Dell XPS 13 Plus',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 1299,
    discountPercent: 8,
    description: 'Premium ultrabook with InfinityEdge display.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year premium support',
    relatedProductIds: ['dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570', 'dell-inspiron-16'],
    detailDescription: '13th Gen Intel Core i7, 16GB RAM, 512GB SSD, 13.4" 4K OLED display.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i7-1360P',
        cores: '12',
        threads: '16',
        baseSpeed: '2.2 GHz',
        maxSpeed: '5.0 GHz',
      },
      memory: {
        capacity: '16 GB',
        type: 'LPDDR5',
        speed: '5200 MHz',
      },
      storage: {
        capacity: '512 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '13.4 inch',
        resolution: '3456 x 2160',
        type: 'OLED',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Integrated',
        model: 'Intel Iris Xe',
      },
      battery: {
        capacity: '55 Wh',
        life: 'Up to 12 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible build quality and performance!',
        date: '2023-05-01',
        reviewerName: 'Alex Johnson',
      },
      {
        rating: 4,
        comment: 'Beautiful display, but expensive.',
        date: '2023-05-10',
        reviewerName: 'Sarah Williams',
      },
      {
        rating: 5,
        comment: 'Perfect for productivity work.',
        date: '2023-05-15',
        reviewerName: 'Michael Chen',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 'dell-xps-13',
    name: 'Dell XPS 13',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 999,
    discountPercent: 10,
    description: 'Classic ultrabook with premium design.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year premium support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570', 'dell-inspiron-16'],
    detailDescription: '13th Gen Intel Core i5, 8GB RAM, 256GB SSD, 13.4" FHD+ display.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i5-1330P',
        cores: '10',
        threads: '12',
        baseSpeed: '1.8 GHz',
        maxSpeed: '4.6 GHz',
      },
      memory: {
        capacity: '8 GB',
        type: 'LPDDR5',
        speed: '5200 MHz',
      },
      storage: {
        capacity: '256 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '13.4 inch',
        resolution: '1920 x 1200',
        type: 'IPS',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Integrated',
        model: 'Intel Iris Xe',
      },
      battery: {
        capacity: '51 Wh',
        life: 'Up to 12 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great laptop for everyday use.',
        date: '2023-05-20',
        reviewerName: 'Emily Davis',
      },
      {
        rating: 5,
        comment: 'Excellent battery life.',
        date: '2023-05-25',
        reviewerName: 'David Wilson',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isBestseller: true,
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 1799,
    discountPercent: 5,
    description: 'Powerful 15-inch creator laptop.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year premium support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-latitude-9440', 'dell-precision-5570', 'dell-inspiron-16'],
    detailDescription: '13th Gen Intel Core i7, 16GB RAM, 512GB SSD, 15.6" 4K OLED display, RTX 4050.',
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
        capacity: '512 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '15.6 inch',
        resolution: '3456 x 2160',
        type: 'OLED',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4050',
        memory: '6 GB GDDR6',
      },
      battery: {
        capacity: '86 Wh',
        life: 'Up to 13 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Perfect for video editing and gaming.',
        date: '2023-06-01',
        reviewerName: 'Chris Rodriguez',
      },
      {
        rating: 4,
        comment: 'Great performance, but heavy.',
        date: '2023-06-05',
        reviewerName: 'Lisa Thompson',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isFeatured: true,
  },
  {
    id: 'dell-latitude-9440',
    name: 'Dell Latitude 9440',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 1499,
    discountPercent: 12,
    description: 'Premium business laptop with security features.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '3 year pro support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-precision-5570', 'dell-inspiron-16'],
    detailDescription: '13th Gen Intel Core i7, 16GB RAM, 512GB SSD, 14" QHD+ display.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i7-1365U',
        cores: '10',
        threads: '12',
        baseSpeed: '1.8 GHz',
        maxSpeed: '5.2 GHz',
      },
      memory: {
        capacity: '16 GB',
        type: 'LPDDR5',
        speed: '5200 MHz',
      },
      storage: {
        capacity: '512 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '14 inch',
        resolution: '2560 x 1600',
        type: 'IPS',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Integrated',
        model: 'Intel Iris Xe',
      },
      battery: {
        capacity: '58 Wh',
        life: 'Up to 15 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Excellent for business use.',
        date: '2023-06-10',
        reviewerName: 'Robert Brown',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isBestseller: true,
  },
  {
    id: 'dell-precision-5570',
    name: 'Dell Precision 5570',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 2499,
    discountPercent: 8,
    description: 'Mobile workstation for professionals.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '3 year pro support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-inspiron-16'],
    detailDescription: '12th Gen Intel Core i7, 32GB RAM, 1TB SSD, 15.6" 4K display, RTX A1000.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i7-12800H',
        cores: '14',
        threads: '20',
        baseSpeed: '2.4 GHz',
        maxSpeed: '4.8 GHz',
      },
      memory: {
        capacity: '32 GB',
        type: 'DDR5',
        speed: '4800 MHz',
      },
      storage: {
        capacity: '1 TB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '15.6 inch',
        resolution: '3840 x 2160',
        type: 'IPS',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX A1000',
        memory: '4 GB GDDR6',
      },
      battery: {
        capacity: '86 Wh',
        life: 'Up to 10 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Perfect for CAD and 3D modeling.',
        date: '2023-06-15',
        reviewerName: 'Jennifer Lee',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isNewArrival: true,
  },
  {
    id: 'dell-inspiron-16',
    name: 'Dell Inspiron 16',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 799,
    discountPercent: 15,
    description: 'Affordable 16-inch laptop for everyday use.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year basic support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570'],
    detailDescription: '13th Gen Intel Core i5, 8GB RAM, 256GB SSD, 16" FHD display.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i5-1335U',
        cores: '10',
        threads: '12',
        baseSpeed: '1.8 GHz',
        maxSpeed: '4.6 GHz',
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
        size: '16 inch',
        resolution: '1920 x 1200',
        type: 'IPS',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Integrated',
        model: 'Intel Iris Xe',
      },
      battery: {
        capacity: '54 Wh',
        life: 'Up to 8 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good value for money.',
        date: '2023-06-20',
        reviewerName: 'Mark Anderson',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isDiscount: true,
  },
  {
    id: 'dell-alienware-m16',
    name: 'Dell Alienware M16',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 1999,
    discountPercent: 10,
    description: 'Gaming laptop with premium performance.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year premium support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570'],
    detailDescription: '13th Gen Intel Core i7, 16GB RAM, 512GB SSD, 16" QHD display, RTX 4060.',
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
        capacity: '512 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '16 inch',
        resolution: '2560 x 1600',
        type: 'IPS',
        refreshRate: '165 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 4060',
        memory: '8 GB GDDR6',
      },
      battery: {
        capacity: '86 Wh',
        life: 'Up to 6 hours',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Amazing gaming performance!',
        date: '2023-06-25',
        reviewerName: 'Kevin Martinez',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isFeatured: true,
  },
  {
    id: 'dell-vostro-3510',
    name: 'Dell Vostro 3510',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 599,
    discountPercent: 20,
    description: 'Business laptop for small businesses.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year basic support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570'],
    detailDescription: '11th Gen Intel Core i5, 8GB RAM, 256GB SSD, 15.6" FHD display.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Core i5-1135G7',
        cores: '4',
        threads: '8',
        baseSpeed: '2.4 GHz',
        maxSpeed: '4.2 GHz',
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
        size: '15.6 inch',
        resolution: '1920 x 1080',
        type: 'TN',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Integrated',
        model: 'Intel Iris Xe',
      },
      battery: {
        capacity: '42 Wh',
        life: 'Up to 7 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Solid business laptop.',
        date: '2023-07-01',
        reviewerName: 'Amanda White',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isDiscount: true,
  },
  {
    id: 'dell-g15-gaming',
    name: 'Dell G15 Gaming',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 899,
    discountPercent: 12,
    description: 'Affordable gaming laptop.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year basic support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570'],
    detailDescription: '12th Gen Intel Core i5, 8GB RAM, 256GB SSD, 15.6" FHD display, RTX 3050.',
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
        capacity: '8 GB',
        type: 'DDR4',
        speed: '3200 MHz',
      },
      storage: {
        capacity: '256 GB',
        type: 'PCIe NVMe SSD',
      },
      display: {
        size: '15.6 inch',
        resolution: '1920 x 1080',
        type: 'IPS',
        refreshRate: '120 Hz',
      },
      graphics: {
        type: 'Dedicated',
        model: 'NVIDIA RTX 3050',
        memory: '4 GB GDDR6',
      },
      battery: {
        capacity: '56 Wh',
        life: 'Up to 6 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Good gaming performance for the price.',
        date: '2023-07-05',
        reviewerName: 'Ryan Garcia',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
  },
  {
    id: 'dell-chromebook-3110',
    name: 'Dell Chromebook 3110',
    images: [generateImageUrl('placeholder-computer.png')],
    price: 299,
    discountPercent: 15,
    description: 'Educational Chromebook for students.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '1 year basic support',
    relatedProductIds: ['dell-xps-13-plus', 'dell-xps-13', 'dell-xps-15', 'dell-latitude-9440', 'dell-precision-5570'],
    detailDescription: 'Intel Celeron N4500, 4GB RAM, 32GB eMMC, 11.6" HD display.',
    details: {
      processor: {
        brand: 'Intel',
        model: 'Celeron N4500',
        cores: '2',
        threads: '2',
        baseSpeed: '1.1 GHz',
        maxSpeed: '2.8 GHz',
      },
      memory: {
        capacity: '4 GB',
        type: 'LPDDR4',
        speed: '2933 MHz',
      },
      storage: {
        capacity: '32 GB',
        type: 'eMMC',
      },
      display: {
        size: '11.6 inch',
        resolution: '1366 x 768',
        type: 'TN',
        refreshRate: '60 Hz',
      },
      graphics: {
        type: 'Integrated',
        model: 'Intel UHD Graphics 600',
      },
      battery: {
        capacity: '42 Wh',
        life: 'Up to 10 hours',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Perfect for students.',
        date: '2023-07-10',
        reviewerName: 'Maria Lopez',
      },
    ],
    brandId: 'dell',
    categoryId: 'computer',
    isDiscount: true,
  },
]
