import './CSS/Cart.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import remove_icon from '../assets/img/cart_cross_icon.png';
const API_URL_ONE = 'https://iron-surf-store.adaptable.app';

function CartItems() {
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get(`${API_URL_ONE}/cart`);
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCartItems();
  }, []);

  const handleRemoveItem = async itemId => {
    try {
      await axios.delete(`${API_URL_ONE}/cart/${itemId}`);

      setCartItems(prevCartItems =>
        prevCartItems.filter(item => item.id !== itemId)
      );
    } catch (error) {
      console.log(error);
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
      <div>
        {cartItems &&
          cartItems.map(item => (
            <div key={item.id} className='cartitem'>
              <div className='cartitems-format cartitems-format-name'>
                <img
                  src={item.productImage}
                  alt='product image'
                  className='carticon-product-icon'
                />
                <p>{item.productTitle}</p>
                <p>€{item.new_price}</p>
                <button className='cartitems-quantity'>{item.quantity}</button>
                <p>€{item.new_price * item.quantity}</p>
                <img
                  onClick={() => handleRemoveItem(item.id)}
                  src={remove_icon}
                  alt='remove icon'
                  className='cartitems-remove-icon'
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default CartItems;
