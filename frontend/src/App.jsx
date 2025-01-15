import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import Cart from './components/Cart';

const App = () => (
  <AuthProvider>
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
  </AuthProvider>
);

export default App;
