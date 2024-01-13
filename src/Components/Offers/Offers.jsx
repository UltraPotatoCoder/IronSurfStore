import exclusive_image from '../../assets/img/exclusive_image.png';
import './Offers.css';

function Offers() {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY BEST SELLING PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt='exclusive image' />
      </div>
    </div>
  );
}

export default Offers;
