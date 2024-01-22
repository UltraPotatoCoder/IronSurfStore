import { useState } from 'react';
import axios from 'axios';
import '../../Pages/CSS/Login.css';
const API_URL_USER = 'https://iron-surf-store.adaptable.app/users';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL_USER, {
        name,
        email,
        password,
      });
      console.log('user registered successfully', response.data);
    } catch (error) {
      console.log('Error registering user', error);
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign up</h1>

        <div className='loginsignup-fields'>
          <form onSubmit={handleSubmit}>
            <input
              name=''
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              placeholder='Name'
            />
            <input
              name=''
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='text'
              placeholder='Email'
            />
            <input
              name=''
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='text'
              placeholder='Password'
            />
            <button type='submit'>Register</button>{' '}
          </form>
        </div>

        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree with the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
