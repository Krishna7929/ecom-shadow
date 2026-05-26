const Product = require('../models/product');

const getAllProducts = (req, res) => {
  const products = Product.getAll();
  res.json(products);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = Product.getById(productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};

const createProduct = (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  const newProduct = Product.create({ name, price, description });
  res.status(201).json(newProduct);
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const deletedProduct = Product.deleteById(productId);

  if (!deletedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ message: 'Product deleted successfully', product: deletedProduct });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
};
