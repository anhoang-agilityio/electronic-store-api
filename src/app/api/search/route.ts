import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../_data';

// Helper function to calculate average rating from reviews
function getAverageRating(reviews: { rating: number }[]): number {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 100) / 100; // rounded to 2 decimals
}

// GET /api/search?q=searchTerm&category=...&brands=...&minPrice=...&maxPrice=...&sort=rating_asc|rating_desc|price_asc|price_desc&page=...&pageSize=...
// Returns search results for products
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const category = searchParams.get('category');
  const brandsParam = searchParams.get('brands'); // comma-separated brand ids
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sort = searchParams.get('sort'); // 'rating_asc', 'rating_desc', 'price_asc', 'price_desc'
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  if (!query) {
    return NextResponse.json({ error: 'Search query is required.' }, { status: 400 });
  }

  // Search in product name and description
  let searchResults = products.filter((product) => {
    const searchTerm = query.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
    const detailDescriptionMatch = product.detailDescription.toLowerCase().includes(searchTerm);
    
    return nameMatch || descriptionMatch || detailDescriptionMatch;
  });

  // Filter by category if provided
  if (category) {
    searchResults = searchResults.filter((product) => product.categoryId === category);
  }

  // Filter by brands if provided
  if (brandsParam) {
    const brandIds = brandsParam.split(',');
    searchResults = searchResults.filter((product) => brandIds.includes(product.brandId));
  }

  // Filter by price range if provided
  if (minPrice) {
    searchResults = searchResults.filter((product) => product.price >= Number(minPrice));
  }
  if (maxPrice) {
    searchResults = searchResults.filter((product) => product.price <= Number(maxPrice));
  }

  // Attach calculated rating to each product for sorting and response
  const resultsWithRating = searchResults.map((product) => ({
    ...product,
    rating: getAverageRating(product.reviews),
  }));

  // Sort results
  let sorted = resultsWithRating;
  if (sort === 'rating_asc') {
    sorted = resultsWithRating.sort((a, b) => a.rating - b.rating);
  } else if (sort === 'rating_desc') {
    sorted = resultsWithRating.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'price_asc') {
    sorted = resultsWithRating.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    sorted = resultsWithRating.sort((a, b) => b.price - a.price);
  }

  // Pagination
  const total = sorted.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = sorted.slice(start, end);

  return NextResponse.json({
    query,
    total,
    page,
    pageSize,
    products: paginated,
  });
} 