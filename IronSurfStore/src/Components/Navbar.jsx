import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    console.log('search:', searchTerm);
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-logo'>
        <img className='logo' src='/src/assets/img/logo white.png' alt='Logo' />
      </Link>

      <form onSubmit={handleSearchSubmit} className='search-form'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
        <button type='submit' className='search-button'>
          <img src='/src/assets/img/search-icon.png' alt='search-icon' />
        </button>
      </form>
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
