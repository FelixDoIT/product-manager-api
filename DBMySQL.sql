CREATE DATABASE IF NOT EXISTS rest_auth_api;
USE rest_auth_api;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  refresh_token TEXT,
  created_at DATETIME DEFAULT NOW()
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  created_at DATETIME DEFAULT NOW()
);

INSERT INTO products (name, price, quantity) VALUES
('Laptop Dell', 15000000, 10),
('Chuột Logitech', 500000, 50),
('Bàn phím Mechanical', 1200000, 30);