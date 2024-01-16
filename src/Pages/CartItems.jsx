import './CSS/CartItems.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import remove_icon from '../assets/img/cart_cross_icon.png';
const API_URL_ONE = 'https://iron-surf-store.adaptable.app';

function CartItems() {
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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach(item => {
      totalAmount +=
        (Number(item.new_price) || 0) * (Number(item.quantity) || 0);
    });
    return totalAmount.toFixed(2);
  };

  const handleRemoveItem = async itemId => {
    try {
      await axios.delete(`${API_URL_ONE}/cart/${itemId}`);
      setCartItems(prevCartItems =>
        prevCartItems.filter(item => item.id !== itemId)
      );
    } catch (error) {
      console.error('Error removing item:', error);
    }
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
        <div key={item.id}>
          <div className='cartitems-format cartitems-format-main'>
            <img
              src={item.productImage}
              alt=''
              className='carticon-product-icon'
            />
            <p>{item.productTitle}</p>
            <p>€{Number(item.new_price).toFixed(2)}</p>
            <button className='cartitems-quantity'>
              {Number(item.quantity)}
            </button>
            <p>
              €{(Number(item.new_price) * Number(item.quantity)).toFixed(2)}
            </p>
            <img
              className='cartitems-remove-icon'
              src={remove_icon}
              onClick={() => handleRemoveItem(item.id)}
              alt=''
            />
          </div>
          <hr />
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

export default CartItems;
