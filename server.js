const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory "database"
const products = [
  { id: 1, name: 'Smartphone', price: 699, description: 'A high-end smartphone with a great camera.' },
  { id: 2, name: 'Laptop', price: 1299, description: 'A powerful laptop for work and play.' },
  { id: 3, name: 'Headphones', price: 199, description: 'Noise-canceling headphones for immersive audio.' }
];

const orders = [];

// API 1: Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API 2: Get a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// API 3: Place an order
app.post('/api/orders', (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: 'Product ID and quantity are required' });
  }

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const newOrder = {
    id: orders.length + 1,
    productId,
    productName: product.name,
    quantity,
    totalPrice: product.price * quantity,
    orderDate: new Date()
  };

  orders.push(newOrder);

  res.status(201).json({
    message: 'Order placed successfully',
    order: newOrder
  });
});

app.listen(port, () => {
  console.log(`E-commerce API running at http://localhost:${port}`);
});
