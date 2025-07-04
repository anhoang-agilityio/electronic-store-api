// Type definitions for electronic store

export type Category = {
  id: string;
  name: string;
  image: string; // SVG file path
};

export type Brand = {
  id: string;
  name: string;
  categoryId: string;
};

export type ProductDetail = {
  [key: string]: Record<string, string>;
};

export type Review = {
  rating: number; // 1-5
  comment: string;
  date: string;
  reviewerName: string;
};

export type Product = {
  id: string;
  name: string;
  images: string[];
  price: number;
  discountPercent: number;
  description: string;
  shippingInfo: string;
  availability: 'in_stock' | 'out_of_stock' | 'preorder';
  warranty: string;
  relatedProductIds: string[];
  detailDescription: string;
  details: ProductDetail;
  reviews: Review[];
  brandId: string;
  categoryId: string;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
  isDiscount?: boolean;
}; 