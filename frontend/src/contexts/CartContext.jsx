import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalAmount(totalAmount + item.price);
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter(item => item.id !== itemId);
    const itemToRemove = cart.find(item => item.id === itemId);
    setCart(newCart);
    setTotalAmount(totalAmount - itemToRemove.price);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
