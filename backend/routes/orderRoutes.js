const express = require('express');
const Order = require('../models/Order');
const Menu = require('../models/Menu');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Place a new order
router.post('/', async (req, res) => {
  const { items } = req.body;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const menuItems = await Menu.find({ _id: { $in: items.map(item => item.menuItemId) } });

    const totalAmount = items.reduce((total, item) => {
      const menuItem = menuItems.find(m => m._id.toString() === item.menuItemId);
      return total + menuItem.price * item.quantity;
    }, 0);

    const order = new Order({ userId, items, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all orders of the logged-in user
router.get('/', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
