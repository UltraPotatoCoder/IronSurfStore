import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      {oneItem && (
        <div>
          <img src={oneItem.image} alt={oneItem.name} className='oneItem' />
          <h3>{oneItem.name}</h3>
          <h3>{oneItem.description}</h3>
          <h3>{oneItem.new_price}</h3>
          <h3>{oneItem.old_price}</h3>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
