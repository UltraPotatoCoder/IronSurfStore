import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import banner_allproducts from '../assets/img/banner_allproducts.png';
import video_icon from '../assets/img/icon_camera.png';
import './CSS/FinsPage.css';

const API_URL = 'https://iron-surf-store.adaptable.app/products';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function AllProducts() {
  const [items, setItems] = useState([]);

  const getItem = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response);

      setItems(shuffleArray(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const youtubeVideoUrl =
    'https://www.youtube.com/watch?v=2smg9J8N6GE&t=7s&ab_channel=StokedForTravel';

  return (
    <div className='shop-category'>
      <div className='banner-container'>
        <img
          className='shopcategory-banner'
          alt='banner_fins'
          src={banner_allproducts}
        />
        <div className='banner-text'>PRODUCTS</div>
      </div>
      <div className='shopcategory-products'>
        {items.map(item => (
          <div key={item.id}>
            <Link
              onClick={() => {
                handleAddToCart();
                window.scrollTo(0, 0);
              }}
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/products/${item.id}`}
            >
              <img className='itemImages' src={item.image} alt={item.name} />
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
        Explore <img src={video_icon} alt='' />
      </Link>
    </div>
  );
}

export default AllProducts;
