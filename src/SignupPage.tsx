import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';
import { useAuth } from './contexts/AuthContext';
import Toast from './Tost';

const SignupPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const [message, setMessage] = React.useState('');
  // const [type, setType] = React.useState('');

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (password !== e.target.value) {
      setConfirmPasswordMsg('Passwords do not match');
    } else {
      setConfirmPasswordMsg('');
    }
  }

  const handleSignup = async () => {
    try {
      const response = await register(username, email, password);
      if (response.error) {
        setMessage(response.error);
        // setType('error');
      } else {
        setMessage(response.message);
        // setType('success');
      }
    } catch (error) {
      console.log(error);
    }
    setShowToast(true);
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <h2 className="signup-heading">Create an Account</h2>

      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" id="username" name="username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" onChange={handleConfirmPassword} />
          {confirmPasswordMsg !== '' && <p className="confirm-password-msg">{confirmPasswordMsg}</p>}
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
      {showToast && (
        <Toast
          message={message}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default SignupPage;
