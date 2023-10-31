import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <h2 className="signup-heading">Create an Account</h2>

      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default SignupPage;
