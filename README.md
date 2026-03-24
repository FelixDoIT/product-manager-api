# Product Manager API

A simple RESTful API for managing products built with **Node.js**, **Express.js**, and **SQL Server**. This project demonstrates core backend development concepts including async/await, Promise handling, MVC architecture, and database operations.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, Delete products
- ✅ **RESTful API**: Standard HTTP methods (GET, POST, PUT, DELETE)
- ✅ **Database Integration**: SQL Server/MSSQL integration with mssql package
- ✅ **Error Handling**: Proper error handling and validation
- ✅ **Environment Configuration**: Secure database credentials using .env

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQL Server (MSSQL)
- **Dependencies**:
  - `express` - Web framework
  - `mssql` - SQL Server client
  - `dotenv` - Environment variables management

## Project Structure

```
product-manager-api/
├── src/
│   ├── config/
│   │   └── db.js                 # Database connection configuration
│   ├── controllers/
│   │   └── productController.js  # Business logic for products
│   ├── routes/
│   │   └── productRoutes.js      # API route definitions
│   └── app.js                    # Express app setup
├── .env                           # Environment variables
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- SQL Server or SQL Server Express
- npm or yarn

### Steps

1. **Clone the repository** (or navigate to project folder)
   ```bash
   cd product-manager-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure database connection**
   - Create a `.env` file in the root directory
   - Add your SQL Server connection details:
     ```
     DB_SERVER=your_server_name
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_DATABASE=product_db
     DB_PORT=1433
     PORT=3000
     ```

4. **Create database and table** (SQL Server)
   ```sql
   CREATE DATABASE product_db;
   USE product_db;
   
   CREATE TABLE products (
     id INT PRIMARY KEY IDENTITY(1,1),
     name NVARCHAR(100) NOT NULL,
     description NVARCHAR(255),
     price DECIMAL(10, 2) NOT NULL,
     quantity INT NOT NULL DEFAULT 0,
     created_at DATETIME DEFAULT GETDATE()
   );
   ```

5. **Run the application**
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3000`

## API Endpoints

### Get All Products
```
GET /api/products
```
**Response**: Array of all products

### Get Product by ID
```
GET /api/products/:id
```
**Response**: Single product object

### Create New Product
```
POST /api/products
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product Description",
  "price": 99.99,
  "quantity": 10
}
```
**Response**: Created product with ID

### Update Product
```
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "description": "Updated Description",
  "price": 89.99,
  "quantity": 15
}
```
**Response**: Updated product object

### Delete Product
```
DELETE /api/products/:id
```
**Response**: Success message

## Testing

Use **Postman**, **Thunder Client**, or **cURL** to test the API:

```bash
# Get all products
curl http://localhost:3000/api/products

# Create product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","price":999.99,"quantity":5}'
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
- MVC architecture pattern in backend development
- CRUD operations implementation
- Error handling best practices

## Future Enhancements

- [ ] Add authentication and authorization
- [ ] Implement input validation and sanitization
- [ ] Add request/response logging
- [ ] Write unit tests
- [ ] Deploy to cloud (Azure, AWS, Heroku)
- [ ] Add pagination for large datasets
- [ ] Implement caching mechanisms

## Author

**Nguyễn Võ Duy Tuân**
- GitHub: [Felixdev205](https://github.com/Felixdev205)
- Email: nvdtuan205111@gmail.com

## License

ISC
