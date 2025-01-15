import { useEffect, useState } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/menu', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMenu(response.data);
      } catch (error) {
        console.error('Failed to fetch menu', error);
      }
    };
    fetchMenu();
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {menu.map(item => (
          <div key={item._id} className="border p-4">
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p>{item.availability ? 'Available' : 'Unavailable'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
