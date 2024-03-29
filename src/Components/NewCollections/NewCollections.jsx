import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NewCollections.css';

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
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {items &&
          items.slice(8, 16).map(item => {
            return (
              <div key={item.id}>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/products/${item.id}`}
                >
                  <img
                    className='itemImages'
                    src={item.image}
                    alt='item-image'
                  />
                </Link>
                <p>{item.name}</p>
                <div className='item-prices'>
                  <div className='item-price-new'>€{item.new_price}</div>
                  <div className='item-price-old'>€{item.old_price}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Popular;
