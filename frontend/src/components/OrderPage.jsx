import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';

const OrderPage = () => {
  const { cart, totalAmount } = useContext(CartContext);
  const [status, setStatus] = useState('');

  const handleOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/order', { cart, totalAmount });
      setStatus('Order placed successfully!');
    } catch (error) {
      setStatus('Failed to place the order.');
    }
  };

  return (
    <div className="p-4">
      <h3 className="font-bold">Order Summary</h3>
      <div>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
      <p>Total: ${totalAmount}</p>
      <button onClick={handleOrder} className="bg-green-500 text-white p-2 mt-4">Place Order</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default OrderPage;
