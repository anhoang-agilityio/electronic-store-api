import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    const apiKey = process.env.API_KEY;
    const requestKey = request.headers.get('x-api-key');
    if (!apiKey || requestKey !== apiKey) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }
  return NextResponse.next();
}

// limit the middleware to only API routes
export const config = {
  matcher: ['/api/:path*'],
};