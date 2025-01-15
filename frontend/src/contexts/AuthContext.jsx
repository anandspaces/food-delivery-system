import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    // Check if there is a saved JWT in localStorage
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setAuth({ token: savedToken });
      // Optionally, fetch the user data with the token if needed
    }
  }, []);

  const login = async (username, password) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/login', { username, password });
      const { token } = data;
      setAuth({ token });
      localStorage.setItem('authToken', token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('authToken');
  };

  const register = async (username, password) => {
    try {
      await axios.post('http://localhost:5000/api/users/register', { username, password });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
