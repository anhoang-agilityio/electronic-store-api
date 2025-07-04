import { Product } from '../../types';

export const razerGamingProducts: Product[] = [
  {
    id: 'razer-deathadder-v3-pro',
    name: 'Razer DeathAdder V3 Pro',
    images: ['/images/placeholder-gaming.svg'],
    price: 159,
    discountPercent: 8,
    description: 'Wireless gaming mouse with Focus Pro 30K sensor.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year Razer warranty',
    relatedProductIds: ['logitech-g-pro-x-superlight', 'steelseries-aerox-3', 'razer-blackwidow-v3-pro'],
    detailDescription: '63g ultra-lightweight design, Focus Pro 30K sensor, 5 programmable buttons, 90+ hour battery life.',
    details: {
      sensor: {
        type: 'Focus Pro 30K',
        dpi: '30,000',
        tracking: '750+ IPS',
      },
      connectivity: {
        type: 'Wireless',
        technology: 'HyperSpeed',
        battery: '90+ hours',
      },
      buttons: {
        total: '5',
        programmable: 'Yes',
        switches: 'Optical',
      },
      dimensions: {
        length: '128mm',
        width: '68mm',
        height: '44mm',
        weight: '63g',
      },
    },
    reviews: [
      {
        rating: 5,
        comment: 'Amazing sensor accuracy and wireless performance!',
        date: '2024-03-01',
        reviewerName: 'Emily Davis',
      },
    ],
    brandId: 'razer-gaming',
    categoryId: 'gaming',
    isNewArrival: true,
  },
  {
    id: 'razer-blackwidow-v3-pro',
    name: 'Razer BlackWidow V3 Pro',
    images: ['/images/placeholder-gaming.svg'],
    price: 229,
    discountPercent: 12,
    description: 'Wireless mechanical gaming keyboard with RGB lighting.',
    shippingInfo: 'Free shipping within 3-5 business days.',
    availability: 'in_stock',
    warranty: '2 year Razer warranty',
    relatedProductIds: ['logitech-g915-tkl', 'steelseries-apex-pro', 'razer-deathadder-v3-pro'],
    detailDescription: 'Razer Yellow mechanical switches, RGB lighting, wireless connectivity, aluminum frame.',
    details: {
      switches: {
        type: 'Razer Yellow',
        actuation: '1.2mm',
        force: '45g',
      },
      connectivity: {
        type: 'Wireless',
        technology: 'HyperSpeed',
        battery: '200+ hours',
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
        rating: 4,
        comment: 'Great wireless mechanical keyboard with long battery life.',
        date: '2024-03-05',
        reviewerName: 'David Wilson',
      },
    ],
    brandId: 'razer-gaming',
    categoryId: 'gaming',
    isBestseller: true,
  },
]; 