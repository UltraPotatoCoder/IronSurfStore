import './CSS/CartItems.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import remove_icon from '../assets/img/cart_cross_icon.png';
const API_URL_ONE = 'https://iron-surf-store.adaptable.app';

function CartItems({ addToCart, removeFromCart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get(`${API_URL_ONE}/cart`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getCartItems();
  }, []);

  const handleIncrementQuantity = async itemId => {
    try {
      const item = cartItems.find(it => it.id === itemId);
      if (item) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };

        await axios.put(`${API_URL_ONE}/cart/${itemId}`, updatedItem);
        setCartItems(currentItems =>
          currentItems.map(it => (it.id === itemId ? updatedItem : it))
        );
      }
      addToCart();
    } catch (error) {
      console.error('Error incrementing item quantity:', error);
    }
  };

  const handleDecrementQuantity = async itemId => {
    try {
      const item = cartItems.find(it => it.id === itemId);
      if (item && item.quantity > 1) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };

        await axios.put(`${API_URL_ONE}/cart/${itemId}`, updatedItem);
        setCartItems(currentItems =>
          currentItems.map(it => (it.id === itemId ? updatedItem : it))
        );
        removeFromCart();
      }
    } catch (error) {
      console.error('Error decrementing item quantity:', error);
    }
  };

  const handleRemoveItem = async itemId => {
    try {
      await axios.delete(`${API_URL_ONE}/cart/${itemId}`);
      setCartItems(prevCartItems =>
        prevCartItems.filter(item => item.id !== itemId)
      );
      removeFromCart();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach(item => {
      totalAmount +=
        (Number(item.new_price) || 0) * (Number(item.quantity) || 0);
    });
    return totalAmount.toFixed(2);
  };

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cartItems.map(item => (
        <div key={item.id} className='cartitems-format cartitems-format-main'>
          <img
            src={item.productImage}
            alt=''
            className='carticon-product-icon'
          />
          <p>{item.productTitle}</p>
          <p>€{Number(item.new_price).toFixed(2)}</p>
          <div className='buttonBox'>
            <button
              className='decrement-button'
              onClick={() => handleDecrementQuantity(item.id)}
            >
              -
            </button>
            <span className='cartitems-quantity'>{item.quantity}</span>
            <button
              className='increment-button'
              onClick={() => handleIncrementQuantity(item.id)}
            >
              +
            </button>
          </div>
          <p>€{(Number(item.new_price) * Number(item.quantity)).toFixed(2)}</p>
          <img
            className='cartitems-remove-icon'
            src={remove_icon}
            onClick={() => {
              handleRemoveItem(item.id);
              removeFromCart();
            }}
            alt=''
          />
        </div>
      ))}

      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>€{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>€{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItems;
