import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../_data';

// Helper function to calculate average rating from reviews
function getAverageRating(reviews: { rating: number }[]): number {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 100) / 100; // rounded to 2 decimals
}

// GET /api/products?category=...&brands=...&minPrice=...&maxPrice=...&sort=rating_asc|rating_desc&page=...&pageSize=...
// Returns a paginated, filtered, and sorted list of products
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const brandsParam = searchParams.get('brands'); // comma-separated brand ids
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sort = searchParams.get('sort'); // 'rating_asc' or 'rating_desc'
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  if (!category) {
    return NextResponse.json({ error: 'Category is required.' }, { status: 400 });
  }

  let filtered = products.filter((product) => product.categoryId === category);

  // Filter by brands if provided
  if (brandsParam) {
    const brandIds = brandsParam.split(',');
    filtered = filtered.filter((product) => brandIds.includes(product.brandId));
  }

  // Filter by price range if provided
  if (minPrice) {
    filtered = filtered.filter((product) => product.price >= Number(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter((product) => product.price <= Number(maxPrice));
  }

  // Attach calculated rating to each product for sorting and response
  const filteredWithRating = filtered.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  // Sort by rating if requested
  let sorted = filteredWithRating;
  if (sort === 'rating_asc') {
    sorted = filteredWithRating.sort((a, b) => a.rating - b.rating);
  } else if (sort === 'rating_desc') {
    sorted = filteredWithRating.sort((a, b) => b.rating - a.rating);
  }

  // Pagination
  const total = sorted.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = sorted.slice(start, end);

  return NextResponse.json({
    total,
    page,
    pageSize,
    products: paginated,
  });
} 