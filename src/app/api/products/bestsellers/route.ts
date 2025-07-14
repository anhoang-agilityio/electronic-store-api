import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data';
import { getAverageRating, shuffleArray } from '@/utils';

// GET /api/products/bestsellers
// Returns bestseller products (isBestseller: true)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  let bestsellerProducts = products.filter((product) => product.isBestseller);

  // Filter by category if provided
  if (category) {
    bestsellerProducts = bestsellerProducts.filter(
      (product) => product.categoryId === category
    );
  }

  // Shuffle the array to randomize the selection
  const shuffledProducts = shuffleArray(bestsellerProducts);

  // Limit the number of results
  const limitedProducts = shuffledProducts.slice(0, limit);

  // Add calculated rating to each product
  const productsWithRating = limitedProducts.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  return NextResponse.json(productsWithRating);
} 