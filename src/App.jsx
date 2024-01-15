import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fins' />
        <Route path='/decks' />
        <Route path='/leashes' />
        <Route path='/products/:itemId' element={<ProductPage />} />
        <Route path='/cart' />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
