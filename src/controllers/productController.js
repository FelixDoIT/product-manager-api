const { sql } = require('../config/db');

const getAllProducts = async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM products`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql.query`SELECT * FROM products WHERE id = ${id}`;
    if (result.recordset.length === 0)
      return res.status(404).json({ message: 'Product not found' });
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    await sql.query`INSERT INTO products (name, price, quantity) VALUES (${name}, ${price}, ${quantity})`;
    res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    await sql.query`UPDATE products SET name = ${name}, price = ${price}, quantity = ${quantity} WHERE id = ${id}`;
    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await sql.query`DELETE FROM products WHERE id = ${id}`;
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};