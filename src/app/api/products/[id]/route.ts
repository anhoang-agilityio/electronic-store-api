import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data';
import { getAverageRating } from '@/utils';

// GET /api/products/[id]
// Returns detailed information about a specific product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

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