const express = require('express');
const app = express();
const port = 3000;

const productRoutes = require('./src/routes/productRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('E-commerce API is running...');
});

app.listen(port, () => {
  console.log(`E-commerce API running at http://localhost:${port}`);
});
