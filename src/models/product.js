let products = [
  { id: 1, name: 'Smartphone', price: 699, description: 'A high-end smartphone with a great camera.' },
  { id: 2, name: 'Laptop', price: 1299, description: 'A powerful laptop for work and play.' },
  { id: 3, name: 'Headphones', price: 199, description: 'Noise-canceling headphones for immersive audio.' }
];

const getAll = () => products;

const getById = (id) => products.find(p => p.id === id);

const create = (data) => {
  const newProduct = { id: products.length + 1, ...data };
  products.push(newProduct);
  return newProduct;
};

const deleteById = (id) => {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    return products.splice(index, 1)[0];
  }
  return null;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById
};
