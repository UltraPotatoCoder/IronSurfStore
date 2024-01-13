import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Popular.css';

const API_URL = 'https://iron-surf-store.adaptable.app/products';

function Popular() {
  const [items, setItems] = useState([]);

  const getItem = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className='popular'>
      <h1>THE MOST POPULAR ACCESSORIES</h1>
      <hr />
      <div className='popular-item'>
        {items &&
          items.slice(0, 4).map(item => {
            return (
              <div key={item.id}>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/products/${item.id}`}
                >
                  <img
                    className='itemImages'
                    src={item.image}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            );
          })}
      </div>
      {/*       <div className='popular-item'>
        {items &&
          items
            .filter(it => [1, 4, 6, 8, 9].includes(it.id))
            .map(item => {
              return (
                <div key={item.id}>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/products/${item.id}`}
                  >
                    <img
                      className='itemImages'
                      src={item.image}
                      alt={item.name}
                    />
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              );
            })}
      </div> */}
    </div>
  );
}
export default Popular;
