import './Navbar.css';
import logo from '/src/assets/img/logo.png';
import cart_icon from '../assets/img/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState('shop');
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>IRON SURF STORE</p>
      </div>
      <ul className='nav-menu'>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>Fins</Link>
        </li>
        <li>
          <Link>Decks</Link>
        </li>
        <li>
          <Link>Leashes</Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link>
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
