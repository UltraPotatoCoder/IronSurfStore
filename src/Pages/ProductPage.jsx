import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import star_icon from '../assets/img/star_icon.png';
import star_dull_icon from '../assets/img/star_dull_icon.png';
import './CSS/ProductPage.css';

const API_URL_ONE = 'https://iron-surf-store.adaptable.app/products';

function ProductPage({ addToCart, handleIncrementQuantity }) {
  const { itemId } = useParams();

  const [oneItem, setOneItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for the modal
  const [modalImage, setModalImage] = useState(''); // State to store the image URL

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

  const handleAddToCart = async () => {
    try {
      const cartResponse = await axios.get(
        'https://iron-surf-store.adaptable.app/cart'
      );
      const itemInCart = cartResponse.data.find(
        item => item.productId === oneItem.id
      );

      if (itemInCart) {
        handleIncrementQuantity();
      } else {
        try {
          const addToCartUrl = 'https://iron-surf-store.adaptable.app/cart';

          const productId = oneItem.id;
          const productImage = oneItem.image;
          const productTitle = oneItem.name;
          const productPrice = oneItem.new_price;

          await axios.post(addToCartUrl, {
            productId,
            productImage,
            productTitle,
            new_price: productPrice,
            quantity: 1,
          });
          addToCart();
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      }
    } catch (error) {
      console.error('Error checking/adding product to cart:', error);
    }
  };

  const toggleModal = image => {
    setModalImage(image); // Set the image to be displayed in the modal
    setIsModalOpen(!isModalOpen); // Toggle the modal state
  };

  return (
    <div className='product-page-container'>
      {oneItem && (
        <div className='productdisplay'>
          <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
              <img
                src={oneItem.image_detail_1}
                alt=''
                onClick={() => toggleModal(oneItem.image_detail_1)} // Open modal with image_detail_1
              />
              <img
                src={oneItem.image_detail_2}
                alt=''
                onClick={() => toggleModal(oneItem.image_detail_2)} // Open modal with image_detail_2
              />
            </div>
            <div className='productdisplay-img'>
              <img
                className='productdisplay-main-img'
                src={oneItem.image}
                alt='oneItem image'
                onClick={() => toggleModal(oneItem.image)} // Open modal with main image
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
              <h3>Features</h3>
              {oneItem.description}
            </div>
            <button
              onClick={() => {
                handleAddToCart();
                window.scrollTo(0, 0);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <img
              src={modalImage}
              alt='Modal Image'
              className='modal-image'
              onClick={() => setIsModalOpen(false)} // Close the modal when clicking the image
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
