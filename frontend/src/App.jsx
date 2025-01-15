import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';  // Import AuthContext
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';  // Import RegisterPage
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import Cart from './pages/Cart';

const App = () => (
  <AuthProvider>  {/* Wrap App with AuthProvider */}
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />  {/* Add Register page route */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </CartProvider>
  </AuthProvider>
);

export default App;
