import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const steelseriesGamingProducts: Product[] = [
  {
    id: 'steelseries-aerox-3',
    name: 'SteelSeries Aerox 3',
    images: [generateImageUrl('placeholder-gaming.png')],
    price: 79,
    discountPercent: 20,
    description: 'Ultra-lightweight wireless gaming mouse with TrueMove Air sensor.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year SteelSeries warranty',
    relatedProductIds: ['logitech-g-pro-x-superlight', 'razer-deathadder-v3-pro', 'steelseries-apex-pro'],
    detailDescription: '66g ultra-lightweight design, TrueMove Air sensor, 6 programmable buttons, 200+ hour battery life.',
    details: {
      sensor: {
        type: 'TrueMove Air',
        dpi: '18,000',
        tracking: '400+ IPS',
      },
      connectivity: {
        type: 'Wireless',
        technology: 'Quantum 2.0',
        battery: '200+ hours',
      },
      buttons: {
        total: '6',
        programmable: 'Yes',
        switches: 'Mechanical',
      },
      dimensions: {
        length: '120mm',
        width: '67mm',
        height: '37mm',
        weight: '66g',
      },
    },
    reviews: [
      {
        rating: 4,
        comment: 'Great lightweight mouse for competitive gaming.',
        date: '2024-03-10',
        reviewerName: 'Chris Rodriguez',
      },
    ],
    brandId: 'steelseries',
    categoryId: 'gaming',
    isDiscount: true,
  },
  {
    id: 'steelseries-apex-pro',
    name: 'SteelSeries Apex Pro',
    images: [generateImageUrl('placeholder-gaming.png')],
    price: 199,
    discountPercent: 15,
    description: 'Mechanical gaming keyboard with adjustable actuation.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year SteelSeries warranty',
    relatedProductIds: ['logitech-g915-tkl', 'razer-blackwidow-v3-pro', 'steelseries-aerox-3'],
    detailDescription: 'OmniPoint adjustable switches, RGB lighting, OLED display, aluminum frame.',
    details: {
      switches: {
        type: 'OmniPoint',
        actuation: '0.4-3.6mm',
        force: '45g',
      },
      connectivity: {
        type: 'Wired',
        technology: 'USB-C',
        cable: 'Detachable',
      },
      lighting: {
        type: 'RGB',
        zones: 'Per-key',
        effects: '16.8M colors',
      },
      layout: {
        type: 'Full-size',
        keys: '104',
        size: 'Standard',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible adjustable switches and build quality!',
        date: '2024-03-15',
        reviewerName: 'Lisa Thompson',
      },
    ],
    brandId: 'steelseries',
    categoryId: 'gaming',
    isFeatured: true,
  },
]; 