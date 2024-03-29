import './Navbar.css';
import logo from '/src/assets/img/logo.png';
import menu_icon from '../assets/img/menu_2.png';
import cart_icon from '../assets/img/cart_icon.png';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cloud_img from '../assets/img/cloudy.png';
import user_icon from '../assets/img/user_icon (1).png';

function Navbar({ cartCount }) {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();
  const [showHr, setShowHr] = useState(false);

  const handleLinkClick = () => {
    setShowHr(false);
  };

  const dropdown_toggle = e => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <img
        className='img-icon'
        onClick={() => {
          dropdown_toggle();
        }}
        src={menu_icon}
        alt=''
      />
      <Link
        style={{
          textDecoration: 'none',
        }}
        to='/'
      >
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <ul ref={menuRef} className='nav-menu'>
        <li
          onClick={() => {
            setMenu('allproducts');
            dropdown_toggle();
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/allproducts'
          >
            All Products
          </Link>{' '}
          {menu === 'allproducts' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('fins');
            dropdown_toggle();
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
            dropdown_toggle();
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
            dropdown_toggle();
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
        <li
          onClick={() => {
            setMenu('weather');
          }}
        >
          {menu === 'weather' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='/weather'>
          <img
            style={{
              width: '45px',
              display: 'flex',
              alignItems: 'center',
            }}
            src={cloud_img}
            alt=''
          />
        </Link>{' '}
        <Link to='/register'>
          <img style={{ width: '35px' }} src={user_icon} alt='' />
        </Link>
        <Link to='/cart'>
          <img style={{ width: '40px' }} src={cart_icon} alt='cart_icon' />
        </Link>
        {cartCount > 0 && <div className='nav-cart-count'>{cartCount}</div>}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
