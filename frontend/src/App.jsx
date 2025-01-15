import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import Cart from './components/Cart';
import OrderPage from './components/OrderPage';

const App = () => (
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
