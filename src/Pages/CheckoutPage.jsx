import './CSS/CheckoutPage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL_ONE = 'https://iron-surf-store.adaptable.app';

function checkoutItems({ cartCount, setCartCount, cartItems, setCartItems }) {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const navigate = useNavigate();

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
          <div className='thank-you-message'>
            <p>Thank you for buying at Iron Surf Store!</p>
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
                <input type='text' name='cardNumber' required />
              </label>
              <label>
                Expiration Date:
                <input type='text' name='expirationDate' required />
              </label>
              <label>
                CVV:
                <input type='text' name='cvv' required />
              </label>
              <div className='checkout-total'>
                <h2>Order Summary</h2>
                <div>
                  <p>Fee: Free</p>
                  <p>Total: €{getTotalCartAmount()}</p>
                </div>
              </div>
              <button type='submit'>Pay Now</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default checkoutItems;
