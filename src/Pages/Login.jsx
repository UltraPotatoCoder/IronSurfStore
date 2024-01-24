import './CSS/Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const initialUser = { username: '', password: '' };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser(currentUser => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const API_URL_LOGIN = `https://iron-surf-store.adaptable.app/login`;
    try {
      if (user.username && user.password) {
        const response = await axios.post(API_URL_LOGIN, user);
        console.log('Login response:', response);
        if (response.status === 200) {
          alert('Logged in successfully!');
          setUser(initialUser);
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
            name='username'
            value={user.username}
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
