import { NextResponse } from 'next/server';
import { categories } from '@/data';
 
// GET /api/categories
// Returns the list of all categories
export async function GET() {
  return NextResponse.json(categories);
} 