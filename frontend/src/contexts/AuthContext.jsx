import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
const AuthContext = createContext();

// Provide the AuthContext to components
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  // Check if the user is logged in when the app loads
  useEffect(() => {
    if (authToken) {
      // Optionally, verify the token by calling an API to fetch the user info
      axios
        .get('http://localhost:5000/verify-token', {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => setUser(response.data))
        .catch((error) => {
          console.error('Token verification failed:', error);
          setAuthToken(null);
          localStorage.removeItem('token');
        });
    }
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
