import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/fins' />
        <Route path='/decks' />
        <Route path='/leashes' />
        <Route path='/product' />
        <Route path='/cart' />
        <Route path='/login' />
      </Routes>
    </div>
  );
}

export default App;
