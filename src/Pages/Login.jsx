import './CSS/Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_URL_LOGIN = 'https://iron-surf-store.adaptable.app/users';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userExists, setUserExists] = useState(true);

  const checkUserInApi = async (email, password) => {
    try {
      const response = await axios.post(API_URL_LOGIN, {
        email,
        password,
      });

      return response.status === 200;
    } catch (error) {
      console.log('Error checking user in API', error);
      return false;
    }
  };

  const handleLogin = async e => {
    e.preventDefault();

    const userExists = await checkUserInApi(email, password);

    if (userExists) {
      console.log('User logged in successfully');
      setLoggedIn(true);
    } else {
      console.log('Invalid credentials');
      setUserExists(false);
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign in</h1>

        <div className='loginsignup-fields'>
          <form onSubmit={handleLogin}>
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
              type='password'
              placeholder='Password'
            />
            <button type='submit'>Login</button>{' '}
          </form>
        </div>

        <div>
          {loggedIn ? (
            <p>
              Already logged in! Go to <Link to='/'>Home</Link>.
            </p>
          ) : (
            <p>
              {userExists
                ? "Don't have an account? Go to "
                : 'User not found! Redirecting to '}
              <Link to={userExists ? '/' : '/register'}>
                {userExists ? 'Home' : 'Register'}
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
