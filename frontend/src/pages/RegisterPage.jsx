import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { register } = useAuth();  // Use AuthContext for registration
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await register(username, password);  // Register using AuthContext
      navigate('/login');  // Redirect to login after registration
    } catch (err) {
      setError('Error registering user');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border"
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
      <div className="mt-4">
        <p>Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
