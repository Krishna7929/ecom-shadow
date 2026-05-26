const Order = require('../models/order');
const Product = require('../models/product');

const getAllOrders = (req, res) => {
  const orders = Order.getAll();
  res.json(orders);
};

const getOrderById = (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = Order.getById(orderId);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.json(order);
};

const placeOrder = (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: 'Product ID and quantity are required' });
  }

  const product = Product.getById(productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const newOrder = Order.create({
    productId,
    productName: product.name,
    quantity,
    totalPrice: product.price * quantity
  });

  res.status(201).json({
    message: 'Order placed successfully',
    order: newOrder
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
  placeOrder
};
