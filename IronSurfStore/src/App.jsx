import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CheckoutPage from './Pages/CheckoutPage';
import LoginPage from './Pages/LoginPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProductListingsPage from './Pages/ProductListingsPage';
import ShoppinCartPage from './Pages/ShoppinCartPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart/checkout' element={<CheckoutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<ShoppinCartPage />} />
        <Route path='/product-details' element={<ProductDetailsPage />} />
        <Route path='/products' element={<ProductListingsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
