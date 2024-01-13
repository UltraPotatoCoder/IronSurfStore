import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Item.css';

const API_URL = 'https://iron-surf-store.adaptable.app/products';

function Item() {
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
    <div className='items'>
      {items &&
        items.map(item => {
          return (
            <div key={item.id} className='item'>
              <Link to={`/products/${item.id}`}>
                <img className='itemImages' src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Item;
