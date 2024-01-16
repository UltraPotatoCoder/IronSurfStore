import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fins_banner from '../assets/img/banner_fins.png';
import './CSS/FinsPage.css';

const API_URL = 'https://iron-surf-store.adaptable.app/products';

function FinsPage() {
  const [items, setItems] = useState([]);

  const getItem = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response);
      // Assuming the data is an array and directly available under response.data
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className='shop-category'>
      <div className='banner-container'>
        <img
          className='shopcategory-banner'
          alt='banner_fins'
          src={fins_banner}
        />
        <div className='banner-text'>FINS</div>
      </div>
      <div className='shopcategory-products'>
        {items &&
          items.length > 0 &&
          items
            .filter(item => item.category === 'fins')
            .map(item => (
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
                  <div className='product-prices'>
                    <div className='product-price-old'>€{item.old_price}</div>
                    <div className='product-price-new'>€{item.new_price}</div>
                  </div>
                </Link>
              </div>
            ))}
      </div>
      <div className='shopcategory-loadmore'>Explore More</div>
    </div>
  );
}

export default FinsPage;
