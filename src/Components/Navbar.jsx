import './Navbar.css';
import logo from '/src/assets/img/logo.png';
import nav_dropdown from '../assets/img/dropdown_icon.png';
import cart_icon from '../assets/img/cart_icon.png';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ cartCount }) {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const dropdown_toggle = e => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

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
      <img
        className='img-icon'
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=''
      />
      <ul ref={menuRef} className='nav-menu'>
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
        <Link to='/cart'>
          <img src={cart_icon} alt='cart_icon' />
        </Link>
        <div className='nav-cart-count'>{cartCount}</div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
