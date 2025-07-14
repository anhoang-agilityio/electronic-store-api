import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../@/data';

// GET /api/products/[id]/related
// Returns related products for a specific product
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

  // Get related products based on relatedProductIds
  const relatedProducts = products.filter((p) =>
    product.relatedProductIds.includes(p.id)
  );

  return NextResponse.json(relatedProducts);
} 