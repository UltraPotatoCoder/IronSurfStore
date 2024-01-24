import exclusive_image from '../../assets/img/exclusive_image.png';
import video_icon from '../../assets/img/icon_camera.png';
import { Link } from 'react-router-dom';
import './Offers.css';

function Offers() {
  const youtubeVideoUrl =
    'https://www.youtube.com/watch?v=ecHp___bEdo&ab_channel=Inspired';
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Inspiring</h1>
        <h1>& Motivational</h1>
        <p>Kelly Slater 11x World Champion!</p>
        <Link
          style={{ textDecoration: 'none' }}
          to={youtubeVideoUrl}
          target='_blank'
        >
          <button>
            Check <img src={video_icon} alt='' />
          </button>
        </Link>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt='exclusive image' />
      </div>
    </div>
  );
}

export default Offers;
