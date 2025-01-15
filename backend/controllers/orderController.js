const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  const { items } = req.body;
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = new Order({
    userId: req.user.id,
    items,
    totalAmount,
  });
  await order.save();
  res.status(201).json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};

module.exports = { placeOrder, getOrders };
