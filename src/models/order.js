let orders = [];

const getAll = () => orders;

const getById = (id) => orders.find(o => o.id === id);

const create = (orderData) => {
  const newOrder = {
    id: orders.length + 1,
    ...orderData,
    orderDate: new Date()
  };
  orders.push(newOrder);
  return newOrder;
};

module.exports = {
  getAll,
  getById,
  create
};
