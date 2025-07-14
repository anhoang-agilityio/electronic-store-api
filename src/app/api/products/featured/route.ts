import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data';
import { getAverageRating, shuffleArray } from '@/utils';

// GET /api/products/featured
// Returns featured products (isFeatured: true)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  let featuredProducts = products.filter((product) => product.isFeatured);

  // Filter by category if provided
  if (category) {
    featuredProducts = featuredProducts.filter(
      (product) => product.categoryId === category
    );
  }

  const shuffledProducts = shuffleArray(featuredProducts);
  const limitedProducts = shuffledProducts.slice(0, limit);

  // Add calculated rating to each product
  const productsWithRating = limitedProducts.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  return NextResponse.json(productsWithRating);
} 