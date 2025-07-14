import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data';
import { getAverageRating } from '@/utils';

// GET /api/products/discounted
// Returns products with discounts (discountPercent > 0)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const minDiscount = parseInt(searchParams.get('minDiscount') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  let discountedProducts = products.filter(
    (product) => product.discountPercent > minDiscount
  );

  // Filter by category if provided
  if (category) {
    discountedProducts = discountedProducts.filter(
      (product) => product.categoryId === category
    );
  }

  // Sort by discount percentage (highest first)
  discountedProducts.sort((a, b) => b.discountPercent - a.discountPercent);

  // Limit the number of results
  const limitedProducts = discountedProducts.slice(0, limit);

  // Add calculated rating to each product
  const productsWithRating = limitedProducts.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  return NextResponse.json(productsWithRating);
} 