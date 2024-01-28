import './CSS/CheckoutPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hand_icon from '../assets/img/hand_icon.png';
import loading_gif from '../assets/img/redirect-gif.gif';
import credit_card from '../assets/img/credit-cards.png';
import cvv_card from '../assets/img/cvv image.png';
const API_URL_ONE = 'https://iron-surf-store.adaptable.app';

function checkoutItems({ cartCount, setCartCount, cartItems, setCartItems }) {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const navigate = useNavigate();

  const ThankYouStyles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'font-size': '50px',
    'text-align': 'center',
    'padding-right': '320px',
    'padding-top': '150px',
    'padding-bottom': '200px',
  };

  const HanglooseStyles = {
    width: '100px',
    'padding-top': '70px',
  };

  const LoadingStyles = {
    width: '40px',
    'padding-top': '200px',
  };

  const RedirectingText = {
    'font-size': '15px',
    'padding-top': '10px',
  };

  const handleSubmit = e => {
    e.preventDefault();
    setThankYouMessage(true);
    setCartCount((cartCount = 0));
    setCartItems([]);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get(`${API_URL_ONE}/cart`);
        setCheckoutItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getCartItems();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    checkoutItems.forEach(item => {
      totalAmount +=
        (Number(item.new_price) || 0) * (Number(item.quantity) || 0);
    });
    return totalAmount.toFixed(2);
  };

  return (
    <div className='everything-box'>
      {!thankYouMessage && (
        <div className='cartitems'>
          <hr />

          {checkoutItems.map(item => (
            <div
              key={item.id}
              className='cartitems-format cartitems-format-main'
            >
              <img
                src={item.productImage}
                alt=''
                className='carticon-product-icon'
              />
              <p>{item.productTitle}</p>
              <p>€{Number(item.new_price).toFixed(2)}</p>
              <div className='buttonBox'>
                <span className='cartitems-quantity'>{item.quantity}</span>
              </div>
              <p>
                €{(Number(item.new_price) * Number(item.quantity)).toFixed(2)}
              </p>
            </div>
          ))}

          <hr className='form-hr' />
        </div>
      )}
      <div className='box-summary'>
        {thankYouMessage ? (
          <div className='thank-you-message' style={ThankYouStyles}>
            <p>Thank you for buying at Iron Surf Store!</p>
            <img style={HanglooseStyles} src={hand_icon} alt='hand_icon' />
            <img style={LoadingStyles} src={loading_gif} alt='loading_gif' />
            <p style={RedirectingText}>Redirecting Home...</p>
          </div>
        ) : (
          <div className='form-box'>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type='text' name='name' required />
              </label>
              <label>
                Email:
                <input type='email' name='email' required />
              </label>
              <label>
                Card Number:
                <img className='credit-card' src={credit_card} alt='' />
                <input type='text' name='cardNumber' required />
              </label>
              <label>
                Expiration Date:
                <input type='text' name='expirationDate' required />
              </label>
              <label>
                CVV: <img className='cvv-card' src={cvv_card} alt='' />
                <input type='text' name='cvv' required />
              </label>
              <div className='checkout-total'>
                <h2>Order Summary</h2>
                <div>
                  <p>Fee: Free</p>
                  <p>Total: €{getTotalCartAmount()}</p>
                </div>
              </div>
              <button type='submit' className='button-checkout'>
                Pay Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default checkoutItems;
