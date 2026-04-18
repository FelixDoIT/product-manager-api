# REST Auth API

A RESTful API with **JWT Authentication** built with **Node.js**, **Express.js**, and **MySQL**. Supports user registration, login, token refresh, and full product CRUD protected by JWT.

## Features

- ✅ **JWT Authentication**: Access token + Refresh token flow
- ✅ **CRUD Operations**: Create, Read, Update, Delete products
- ✅ **RESTful API**: Standard HTTP methods (GET, POST, PUT, DELETE)
- ✅ **Database Integration**: MySQL integration with mysql2 package
- ✅ **Error Handling**: Proper error handling and validation
- ✅ **Swagger Docs**: Interactive API documentation at `/api-docs`
- ✅ **Environment Configuration**: Secure credentials using .env

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Dependencies**:
  - `express` - Web framework
  - `mysql2` - MySQL client
  - `bcryptjs` - Password hashing
  - `jsonwebtoken` - JWT generation and verification
  - `swagger-jsdoc` + `swagger-ui-express` - API documentation
  - `dotenv` - Environment variables management

## Project Structure

```
rest-auth-api/
├── src/
│   ├── config/
│   │   └── db.js                    # MySQL connection pool
│   ├── controllers/
│   │   ├── authController.js        # Register, login, logout, refresh, getMe
│   │   └── productController.js     # CRUD business logic
│   ├── middlewares/
│   │   └── authMiddleware.js        # JWT verification middleware
│   ├── routes/
│   │   ├── authRoutes.js            # /api/auth/* routes
│   │   └── productRoutes.js         # /api/products/* routes
│   └── app.js                       # Express app setup + Swagger
├── DBMySQL.sql                       # MySQL schema + seed data
├── .env                              # Environment variables
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Steps

1. **Navigate to project folder**
   ```bash
   cd rest-auth-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory:
     ```
     PORT=3000
     DB_HOST=localhost
     DB_PORT=3306
     DB_USER=root
     DB_PASSWORD=your_password
     DB_NAME=rest_auth_api
     ACCESS_TOKEN_SECRET=your_access_token_secret
     REFRESH_TOKEN_SECRET=your_refresh_token_secret
     ACCESS_TOKEN_EXPIRES_IN=15m
     REFRESH_TOKEN_EXPIRES_IN=7d
     ```

4. **Create database and tables** (MySQL)
   ```bash
   mysql -u root -p < DBMySQL.sql
   ```

5. **Run the application**
   ```bash
   npm start        # production
   npm run dev      # development with nodemon
   ```
   - API: `http://localhost:3000`
   - Swagger Docs: `http://localhost:3000/api-docs`

## API Endpoints

### Auth (`/api/auth`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | No | Register new user |
| POST | `/login` | No | Login, get access + refresh token |
| POST | `/logout` | No | Logout, invalidate refresh token |
| POST | `/refresh-token` | No | Get new access token |
| GET | `/me` | JWT | Get current user info |

### Products (`/api/products`) — all require JWT

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all products |
| GET | `/:id` | Get product by ID |
| POST | `/` | Create new product |
| PUT | `/:id` | Update product |
| DELETE | `/:id` | Delete product |

## Testing

Use **Postman**, **Thunder Client**, or the built-in **Swagger UI** at `http://localhost:3000/api-docs`.

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'

# Get all products (with token)
curl http://localhost:3000/api/products \
  -H "Authorization: Bearer <accessToken>"
```

## Key Concepts Demonstrated

- **Async/Await**: Asynchronous database operations
- **Promise Handling**: Error handling with try-catch blocks
- **MVC Pattern**: Separation of concerns (Models, Views, Controllers)
- **RESTful Design**: Standard API conventions
- **Environment Variables**: Secure configuration management
- **NPM Package Management**: Dependency management with package.json

## Learning Points

This project showcases:
- How Express.js handles HTTP requests and responses
- Async operations in Node.js using async/await syntax
- Database connectivity and query execution
- JWT Access Token + Refresh Token flow
- MVC architecture pattern in backend development
- CRUD operations with MySQL
- Password hashing with bcryptjs
- Middleware-based route protection
- Interactive API documentation with Swagger

## Author

**Nguyễn Võ Duy Tuân**
- GitHub: [Felixdev205](https://github.com/Felixdev205)
- Email: nvdtuan205111@gmail.com

## License

ISC
