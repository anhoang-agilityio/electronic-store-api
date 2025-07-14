// Calculate average rating from reviews
export function getAverageRating(reviews: { rating: number }[]): number {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 100) / 100; // rounded to 2 decimals
}

// Shuffle an array randomly
export function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Generate image url from image name
export function generateImageUrl(imageName: string): string {
  return `${process.env.API_URL}/images/${imageName}`;
} 
