import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../_data';

// Helper function to calculate average rating from reviews
function getAverageRating(reviews: { rating: number }[]): number {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 100) / 100; // rounded to 2 decimals
}

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

  // Limit the number of results
  const limitedProducts = featuredProducts.slice(0, limit);

  // Add calculated rating to each product
  const productsWithRating = limitedProducts.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  return NextResponse.json(productsWithRating);
} 