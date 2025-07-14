import { Product } from '../../types';
import { generateImageUrl } from '@/utils';

export const logitechGamingProducts: Product[] = [
  {
    id: 'logitech-g-pro-x-superlight',
    name: 'Logitech G Pro X Superlight',
    images: [generateImageUrl('placeholder-gaming.svg')],
    price: 149,
    discountPercent: 10,
    description: 'Ultra-lightweight wireless gaming mouse with HERO 25K sensor.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year Logitech warranty',
    relatedProductIds: ['razer-deathadder-v3-pro', 'steelseries-aerox-3', 'logitech-g915-tkl'],
    detailDescription: '63g ultra-lightweight design, HERO 25K sensor, 5 programmable buttons, 70+ hour battery life.',
    details: {
      sensor: {
        type: 'HERO 25K',
        dpi: '25,600',
        tracking: '400+ IPS',
      },
      connectivity: {
        type: 'Wireless',
        technology: 'LIGHTSPEED',
        battery: '70+ hours',
      },
      buttons: {
        total: '5',
        programmable: 'Yes',
        switches: 'Mechanical',
      },
      dimensions: {
        length: '125mm',
        width: '63.5mm',
        height: '40mm',
        weight: '63g',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Incredible lightweight mouse for competitive gaming!',
        date: '2024-02-15',
        reviewerName: 'Alex Johnson',
      },
      {
        rating: 4,
        comment: 'Great battery life and responsive sensor.',
        date: '2024-02-20',
        reviewerName: 'Sarah Williams',
      },
    ],
    brandId: 'logitech',
    categoryId: 'gaming',
    isBestseller: true,
  },
  {
    id: 'logitech-g915-tkl',
    name: 'Logitech G915 TKL',
    images: [generateImageUrl('placeholder-gaming.svg')],
    price: 199,
    discountPercent: 15,
    description: 'Wireless mechanical gaming keyboard with RGB lighting.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year Logitech warranty',
    relatedProductIds: ['razer-blackwidow-v3-pro', 'steelseries-apex-pro', 'logitech-g-pro-x-superlight'],
    detailDescription: 'Low-profile mechanical switches, RGB lighting, wireless connectivity, aluminum construction.',
    details: {
      switches: {
        type: 'GL Tactile',
        actuation: '1.5mm',
        force: '50g',
      },
      connectivity: {
        type: 'Wireless',
        technology: 'LIGHTSPEED',
        battery: '40+ hours',
      },
      lighting: {
        type: 'RGB',
        zones: 'Per-key',
        effects: '16.8M colors',
      },
      layout: {
        type: 'TKL',
        keys: '87',
        size: 'Tenkeyless',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Perfect wireless mechanical keyboard!',
        date: '2024-02-25',
        reviewerName: 'Michael Chen',
      },
    ],
    brandId: 'logitech',
    categoryId: 'gaming',
    isFeatured: true,
  },
]; 