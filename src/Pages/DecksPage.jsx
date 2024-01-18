import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decks_banner from '../assets/img/banner_decks.png';

const API_URL = 'https://iron-surf-store.adaptable.app/products';

function DecksPage() {
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
  const youtubeVideoUrlDeck =
    'https://www.youtube.com/watch?v=4El4JvZEH8k&ab_channel=VeiaSupplies';

  return (
    <div className='shop-category'>
      <div className='banner-container'>
        <img
          className='shopcategory-banner'
          alt='banner_decks'
          src={decks_banner}
        />
        <div className='banner-text'>DECKS</div>
      </div>
      <div className='shopcategory-products'>
        {items &&
          items.length > 0 &&
          items
            .filter(item => item.category === 'decks')
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
        to={youtubeVideoUrlDeck}
        className='shopcategory-loadmore'
        target='_blank'
        rel='noopener noreferrer'
      >
        Check Video
      </Link>
    </div>
  );
}

export default DecksPage;
