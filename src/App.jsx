import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import Footer from './Components/Footer/Footer';
import CartItems from './Pages/CartItems';
import FinsPage from './Pages/FinsPage';
import DecksPage from './Pages/DecksPage';
import LeashesPage from './Pages/LeashesPage';
import Weather from './Pages/Weather';
import Register from './Components/Register/Register';
import AllProducts from './Pages/AllProducts';
import Logout from './Components/Logout';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const removeAllItemsCross = quantity => {
    setCartCount(cartCount - quantity);
  };

  return (
    <div className='App'>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/fins' element={<FinsPage />} />
        <Route path='/decks' element={<DecksPage />} />
        <Route path='/leashes' element={<LeashesPage />} />
        <Route path='/weather' element={<Weather />} />

        <Route
          path='/products/:itemId'
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route
          path='/cart'
          element={
            <CartItems
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              removeAllItemsCross={removeAllItemsCross}
            />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route
          path='/checkout'
          element={
            <CheckoutPage cartCount={cartCount} setCartCount={setCartCount} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
