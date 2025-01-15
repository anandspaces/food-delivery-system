const Menu = require("../models/Menu");

const getMenu = async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
};

const addMenuItem = async (req, res) => {
  const menuItem = new Menu(req.body);
  await menuItem.save();
  res.status(201).json(menuItem);
};

const updateMenuItem = async (req, res) => {
  const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedItem);
};

const deleteMenuItem = async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

module.exports = { getMenu, addMenuItem, updateMenuItem, deleteMenuItem };
