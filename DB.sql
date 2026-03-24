CREATE DATABASE product_manager;
GO

USE product_manager;
GO

CREATE TABLE products (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  created_at DATETIME DEFAULT GETDATE()
);
GO

-- Thêm vài dữ liệu mẫu
INSERT INTO products (name, price, quantity) VALUES
(N'Laptop Dell', 15000000, 10),
(N'Chuột Logitech', 500000, 50),
(N'Bàn phím Mechanical', 1200000, 30);
GO