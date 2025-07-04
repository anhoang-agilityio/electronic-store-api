import { NextRequest, NextResponse } from 'next/server';
import { products, categories, brands } from '../../_data';

// GET /api/stats
// Returns overview statistics about the store
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let filteredProducts = products;

  // Filter by category if provided
  if (category) {
    filteredProducts = products.filter((product) => product.categoryId === category);
  }

  // Calculate statistics
  const totalProducts = filteredProducts.length;
  const totalCategories = categories.length;
  const totalBrands = brands.length;

  // Price statistics
  const prices = filteredProducts.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  // Discount statistics
  const discountedProducts = filteredProducts.filter((p) => p.discountPercent > 0);
  const totalDiscounted = discountedProducts.length;
  const avgDiscount = totalDiscounted > 0 
    ? Math.round(discountedProducts.reduce((sum, p) => sum + p.discountPercent, 0) / totalDiscounted)
    : 0;

  // Product type statistics
  const featuredProducts = filteredProducts.filter((p) => p.isFeatured).length;
  const bestsellerProducts = filteredProducts.filter((p) => p.isBestseller).length;
  const newArrivalProducts = filteredProducts.filter((p) => p.isNewArrival).length;

  // Availability statistics
  const inStockProducts = filteredProducts.filter((p) => p.availability === 'in_stock').length;
  const outOfStockProducts = filteredProducts.filter((p) => p.availability === 'out_of_stock').length;

  // Rating statistics
  const productsWithReviews = filteredProducts.filter((p) => p.reviews.length > 0);
  const avgRating = productsWithReviews.length > 0
    ? Math.round(productsWithReviews.reduce((sum, p) => {
        const avg = p.reviews.reduce((acc, r) => acc + r.rating, 0) / p.reviews.length;
        return sum + avg;
      }, 0) / productsWithReviews.length * 100) / 100
    : 0;

  const stats = {
    overview: {
      totalProducts,
      totalCategories,
      totalBrands,
    },
    pricing: {
      minPrice,
      maxPrice,
      avgPrice,
    },
    discounts: {
      totalDiscounted,
      avgDiscount,
    },
    productTypes: {
      featured: featuredProducts,
      bestsellers: bestsellerProducts,
      newArrivals: newArrivalProducts,
    },
    availability: {
      inStock: inStockProducts,
      outOfStock: outOfStockProducts,
    },
    ratings: {
      avgRating,
      productsWithReviews: productsWithReviews.length,
    },
  };

  return NextResponse.json(stats);
} 