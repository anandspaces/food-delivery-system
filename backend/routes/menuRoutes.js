const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
});

// Add a new menu item
router.post('/', async (req, res) => {
  const { name, category, price, availability } = req.body;

  const menuItem = new Menu({ name, category, price, availability });
  await menuItem.save();
  res.status(201).json(menuItem);
});

// Update a menu item
router.put('/:id', async (req, res) => {
  const { name, category, price, availability } = req.body;
  const menuItem = await Menu.findByIdAndUpdate(req.params.id, { name, category, price, availability }, { new: true });

  if (!menuItem) {
    return res.status(404).json({ message: 'Menu item not found' });
  }
  
  res.json(menuItem);
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
  const menuItem = await Menu.findByIdAndDelete(req.params.id);
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu item not found' });
  }
  
  res.json({ message: 'Menu item deleted successfully' });
});

module.exports = router;
