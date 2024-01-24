import exclusive_image from '../../assets/img/exclusive_image.png';
import video_icon from '../../assets/img/icon_camera.png';
import './Offers.css';

function Offers() {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Inspiring</h1>
        <h1>& Motivational</h1>

        <button>
          Check <img src={video_icon} alt='' />
        </button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt='exclusive image' />
      </div>
    </div>
  );
}

export default Offers;
