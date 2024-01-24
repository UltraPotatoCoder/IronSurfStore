import '../../Pages/CSS/Login.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialUser = { email: '', password: '', username: '' };

const Register = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const API_URL_REGISTER = `https://iron-surf-store.adaptable.app/users`;
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
            placeholder='Enter name'
          />
        </div>
        <div className='loginsignup-fields'>
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={handleUserChange}
            placeholder='Enter email'
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
        <h6 style={{ fontSize: '16px', paddingTop: '25px' }}>
          Returning customer? <Link to='/login'>Login here</Link>
        </h6>
      </div>
    </div>
  );
};

export default Register;
