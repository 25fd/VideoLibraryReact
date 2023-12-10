import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useToast } from './contexts/ToastContext';
import './LoginPage.css'; 

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setShowToast, setMessage, setType } = useToast();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if ('error' in response) {
        console.log(response.error);
        setMessage(response.error);
        setType('error');
      } else {
        setMessage('login successful');
        setType('success');
        navigate('/VideoLibraryReact/home');
      }
      setShowToast(true);
    } catch (error) {
       console.log(error);
    }
  };

  return (
    <div className="login-page">
      <h2 className="login-heading">Welcome to ByteByte Geeks Video Library</h2>

      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
