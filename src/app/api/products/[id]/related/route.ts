import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../../_data';

// GET /api/products/[id]/related
// Returns related products for a specific product
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

  // Get related products based on relatedProductIds
  const relatedProducts = products.filter((p) =>
    product.relatedProductIds.includes(p.id)
  );

  return NextResponse.json(relatedProducts);
} 