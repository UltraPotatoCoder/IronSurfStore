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

  const youtubeVideoUrl =
    'https://www.youtube.com/watch?v=Z-nb1qxOjHU&ab_channel=FCSSurf';

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
      <Link
        to={youtubeVideoUrl}
        className='shopcategory-loadmore'
        target='_blank'
        rel='noopener noreferrer'
      >
        Check Video
      </Link>
    </div>
  );
}

export default FinsPage;
