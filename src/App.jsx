import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fins' element={<FinsPage />} />
        <Route path='/decks' element={<DecksPage />} />
        <Route path='/leashes' element={<LeashesPage />} />
        <Route path='/products/:itemId' element={<ProductPage />} />
        <Route path='/cart' element={<CartItems />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
