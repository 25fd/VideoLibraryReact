import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/home');
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <br/>
        <button type="submit">Login</button>

      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
