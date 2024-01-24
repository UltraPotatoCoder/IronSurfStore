import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialUser = { email: '', password: '', username: '' };

const Register = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const API_URL_REGISTER = `https://iron-surf-store.adaptable.app/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(API_URL_REGISTER, user);
        if (!!res) {
          alert('Registered successfully!');
          setUser(initialUser);
          navigate('/login');
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser(currentUser => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h2>Sign up:</h2>
        <div className='loginsignup-fields'>
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleUserChange}
            placeholder='Enter your full name'
          />
        </div>
        <div className='loginsignup-fields'>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={handleUserChange}
            placeholder='Enter your email'
          />
        </div>
        <div className='loginsignup-fields'>
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleUserChange}
            placeholder='Enter password'
          />
        </div>
        <button onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
};

export default Register;
