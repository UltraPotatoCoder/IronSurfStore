import './CSS/Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const initialUser = { email: '', password: '' };
const API_URL_LOGIN = 'https://iron-surf-store.adaptable.app/users';

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      if (user.email && user.password) {
        const response = await axios.get(
          `${API_URL_LOGIN}?email=${user.email}&password=${user.password}`
        );

        if (response.data.length > 0) {
          alert('Logged in successfully!');
          setUser({ email: '', password: '' });
          navigate('/');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h2>Login:</h2>
        <div className='loginsignup-fields'>
          <input
            type='text'
            name='email'
            value={user.email}
            onChange={handleChange}
            placeholder='Enter your username'
          />
        </div>
        <div className='loginsignup-fields'>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
            placeholder='Enter password'
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <h6>
          Click <Link to='/register'>Here</Link> to sign up
        </h6>
      </div>
    </div>
  );
};

export default Login;
