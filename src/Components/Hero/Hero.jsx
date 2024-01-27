import './Hero.css';
import hand_icon from '../../assets/img/hand_icon.png';
import arrow_icon from '../../assets/img/arrow.png';
import hero_image from '../../assets/img/kelly-slater-nova.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>Surf Shop</p>
            <img src={hand_icon} alt='hand_icon' />
          </div>
          <p>for a lifetime of discovery.</p>
        </div>
        <Link style={{ textDecoration: 'none' }} to={'/allproducts'}>
          <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt='arrow_icon' />
          </div>
        </Link>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='hero_image' />
      </div>
    </div>
  );
}

export default Hero;
