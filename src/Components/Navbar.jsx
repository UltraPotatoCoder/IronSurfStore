import './Navbar.css';
import logo from '/src/assets/img/logo.png';
import cart_icon from '../assets/img/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState('home');
  return (
    <div className='navbar'>
      <Link
        style={{
          textDecoration: 'none',
          color: 'black',
          fontSize: '25px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '550',
        }}
        to='/'
      >
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
          <p>IRON SURF STORE</p>
        </div>
      </Link>
      <ul className='nav-menu'>
        <li
          onClick={() => {
            setMenu('home');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            Home
          </Link>{' '}
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('fins');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/fins'>
            Fins
          </Link>{' '}
          {menu === 'fins' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('decks');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/decks'>
            Decks
          </Link>{' '}
          {menu === 'decks' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('leashes');
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/leashes'
          >
            Leashes
          </Link>{' '}
          {menu === 'leashes' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link>
          <img src={cart_icon} alt='cart_icon' />
        </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
