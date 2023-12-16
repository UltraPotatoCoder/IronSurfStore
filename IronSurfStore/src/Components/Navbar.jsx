import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='nav-logo'>
        <img className='logo' src='/src/assets/img/logo white.png' alt='Logo' />
      </Link>
      <Link to='/products' className='nav-links'>
        Products
      </Link>
      <Link to='/about' className='nav-links'>
        About
      </Link>
      <Link to='/contact' className='nav-links'>
        Contact
      </Link>
      <Link to='/cart' className='nav-links'>
        <img src='/src/assets/img/cart-icon.png' alt='cart-icon' />
      </Link>
    </nav>
  );
}

export default Navbar;
