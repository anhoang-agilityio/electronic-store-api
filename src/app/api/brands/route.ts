import { NextRequest, NextResponse } from 'next/server';
import { brands } from '@/data';

// GET /api/brands?category=categoryId
// Returns the list of brands, optionally filtered by category
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  // If a category is specified, filter brands by categoryId
  const filteredBrands = category
    ? brands.filter((brand) => brand.categoryId === category)
    : brands;

  return NextResponse.json(filteredBrands);
} 