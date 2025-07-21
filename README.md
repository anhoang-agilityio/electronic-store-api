# Electronic Store API Documentation

## Environment Setup on local

Before running the project, create a `.env` file in the root directory with the following keys:

```env
API_KEY=your_api_key_here
API_URL=https://your-api-url.com
```

Replace `your_api_key_here` and `https://your-api-url.com` with the actual API key and API URL.

## Endpoints

### Categories

#### GET /api/categories
Returns all available categories.

**Response:**
```json
[
  {
    "id": "phone",
    "name": "Phone",
    "description": "Smartphones and mobile devices"
  }
]
```

### Brands

#### GET /api/brands
Returns all brands.

#### GET /api/brands?category=phone
Returns brands filtered by category.

**Query Parameters:**
- `category` (optional): Filter brands by category ID

**Response:**
```json
[
  {
    "id": "apple",
    "name": "Apple",
    "categoryId": "phone"
  }
]
```

### Products

#### GET /api/products
Returns products with filtering, sorting, and pagination.

**Query Parameters:**
- `category` (required): Category ID to filter products
- `brands` (optional): Comma-separated brand IDs (e.g., "apple,samsung")
- `minPrice` (optional): Minimum price filter
- `maxPrice` (optional): Maximum price filter
- `sort` (optional): Sort order - "rating_asc", "rating_desc"
- `page` (optional): Page number (default: 1)
- `pageSize` (optional): Items per page (default: 10)

**Response:**
```json
{
  "total": 50,
  "page": 1,
  "pageSize": 10,
  "products": [
    {
      "id": "iphone-15-pro",
      "name": "iPhone 15 Pro",
      "price": 999,
      "rating": 4.5,
      "brandId": "apple",
      "categoryId": "phone"
    }
  ]
}
```

#### GET /api/products/[id]
Returns detailed information about a specific product.

**Response:**
```json
{
  "id": "iphone-15-pro",
  "name": "iPhone 15 Pro",
  "images": ["/images/placeholder-phone.svg"],
  "price": 999,
  "discountPercent": 5,
  "description": "Latest iPhone with A17 Pro chip",
  "rating": 4.5,
  "reviews": [...],
  "details": {...},
  "brandId": "apple",
  "categoryId": "phone"
}
```

#### GET /api/products/[id]/related
Returns related products for a specific product.

**Response:**
```json
[
  {
    "id": "iphone-15",
    "name": "iPhone 15",
    "price": 799
  }
]
```

#### GET /api/products/featured
Returns featured products.

**Query Parameters:**
- `category` (optional): Filter by category
- `limit` (optional): Maximum number of results (default: 10)

#### GET /api/products/bestsellers
Returns bestseller products.

**Query Parameters:**
- `category` (optional): Filter by category
- `limit` (optional): Maximum number of results (default: 10)

#### GET /api/products/new-arrivals
Returns new arrival products.

**Query Parameters:**
- `category` (optional): Filter by category
- `limit` (optional): Maximum number of results (default: 10)

#### GET /api/products/discounted
Returns products with discounts.

**Query Parameters:**
- `category` (optional): Filter by category
- `minDiscount` (optional): Minimum discount percentage (default: 0)
- `limit` (optional): Maximum number of results (default: 20)

### Search

#### GET /api/search
Search products by name and description.

**Query Parameters:**
- `q` (required): Search query
- `category` (optional): Filter by category
- `brands` (optional): Comma-separated brand IDs
- `minPrice` (optional): Minimum price filter
- `maxPrice` (optional): Maximum price filter
- `sort` (optional): Sort order - "rating_asc", "rating_desc", "price_asc", "price_desc"
- `page` (optional): Page number (default: 1)
- `