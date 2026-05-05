# API Endpoint Design - Online Store

## Base URI and Versioning
Base URL:

```bash
/api/v1
```

This versioning ensures backward compatibility.

---

## Resources
Primary resources used in this API:

1. Products
2. Orders
3. Users
4. Reviews

All resources use plural naming conventions.

---

## GET Endpoints

### Get all products
```http
GET /api/v1/products
```

Response:
- 200 OK

---

### Get single product by ID
```http
GET /api/v1/products/:id
```

Example:
```http
GET /api/v1/products/101
```

Response:
- 200 OK
- 404 Not Found

---

### Filter, sort, and paginate products
```http
GET /api/v1/products?category=electronics&sort=price_asc&limit=10
```

Query Parameters:
- category
- sort
- limit

Response:
- 200 OK

---

## POST Endpoint

### Create new order
```http
POST /api/v1/orders
```

Request Body:
```json
{
  "userId": 1,
  "productId": 101,
  "quantity": 2
}
```

Response:
- 201 Created
- 400 Bad Request

---

## DELETE Endpoint

### Delete order by ID
```http
DELETE /api/v1/orders/:id
```

Example:
```http
DELETE /api/v1/orders/500
```

Response:
- 200 OK
- 404 Not Found

---

## Nested Resources

### Get all orders for a user
```http
GET /api/v1/users/:userId/orders
```

Example:
```http
GET /api/v1/users/1/orders
```

Response:
- 200 OK

---

### Get reviews for a product
```http
GET /api/v1/products/:productId/reviews
```

Example:
```http
GET /api/v1/products/101/reviews
```

Response:
- 200 OK

---

## HTTP Status Codes

| Scenario | Status Code |
|---|---|
| Successful Request | 200 OK |
| Resource Created | 201 Created |
| Validation Error | 400 Bad Request |
| Resource Not Found | 404 Not Found |
| Server Error | 500 Internal Server Error |

---

## API Design Principles Used

- RESTful architecture
- Resource-oriented endpoints
- Path parameters for IDs
- Query parameters for filtering
- Nested resources for hierarchy
- Standard HTTP methods:
  - GET
  - POST
  - PUT
  - DELETE