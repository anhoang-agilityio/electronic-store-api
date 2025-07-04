import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../_data';

// Helper function to calculate average rating from reviews
function getAverageRating(reviews: { rating: number }[]): number {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 100) / 100; // rounded to 2 decimals
}

// GET /api/products/[id]
// Returns detailed information about a specific product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found.' },
      { status: 404 }
    );
  }

  // Add calculated rating to the product
  const productWithRating = {
    ...product,
    rating: getAverageRating(product.reviews),
  };

  return NextResponse.json(productWithRating);
} 