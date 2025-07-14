import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data';
import { getAverageRating } from '@/utils';

// GET /api/products/new-arrivals
// Returns new arrival products (isNewArrival: true)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  let newArrivals = products.filter((product) => product.isNewArrival);

  if (category) {
    newArrivals = newArrivals.filter(
      (product) => product.categoryId === category
    );
  }

  const limitedProducts = newArrivals.slice(0, limit);

  // Add calculated rating to each product
  const productsWithRating = limitedProducts.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  return NextResponse.json(productsWithRating);
} 