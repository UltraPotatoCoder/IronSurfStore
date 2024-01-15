import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import star_icon from '../assets/img/star_icon.png';
import star_dull_icon from '../assets/img/star_dull_icon.png';
import './CSS/ProductPage.css';

const API_URL_ONE = 'https://iron-surf-store.adaptable.app/products';

function ProductPage() {
  const { itemId } = useParams();

  const [oneItem, setOneItem] = useState(null);

  useEffect(() => {
    const getOneItem = async () => {
      try {
        const response = await axios.get(`${API_URL_ONE}/${itemId}`);
        console.log(response);
        setOneItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOneItem();
  }, [itemId]);

  return (
    <div className='product-page-container'>
      {oneItem && (
        <div className='productdisplay'>
          <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
              <img src={oneItem.image} />
              <img src={oneItem.image} alt='' />
            </div>
            <div className='productdisplay-img'>
              <img
                className='productdisplay-main-img'
                src={oneItem.image}
                alt='oneItem image'
              />
            </div>
          </div>
          <div className='productdisplay-right'>
            <h1>{oneItem.name}</h1>
            <div className='productdisplay-right-star'>
              <img src={star_icon} alt='star_icon' />
              <img src={star_icon} alt='star_icon' />
              <img src={star_icon} alt='star_icon' />
              <img src={star_icon} alt='star_icon' />
              <img src={star_dull_icon} alt='tar_dull_icon' />
              <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
              <div className='productdisplay-right-price-old'>
                €{oneItem.old_price}
              </div>
              <div className='productdisplay-right-price-new'>
                €{oneItem.new_price}
              </div>
            </div>
            <div className='productdisplay-right-description'>
              <h3>Feautures</h3>
              {oneItem.description}
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
