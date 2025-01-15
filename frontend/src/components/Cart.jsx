import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalAmount } = useContext(CartContext);

  return (
    <div className="p-4">
      <h3 className="font-bold">Cart</h3>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <p>Total: ${totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
