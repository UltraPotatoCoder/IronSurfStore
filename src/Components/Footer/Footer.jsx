import './Footer.css';
import footer_logo from '../../assets/img/logo_big.png';
import instagram_icon from '../../assets/img/instagram_icon.png';
import facebook_icon from '../../assets/img/facebook_icon.png';
import whatsapp_icon from '../../assets/img/whatsapp_icon.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='' />
        <p>IRON SURF STORE</p>
      </div>

      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram_icon} alt='' />
          </a>
        </div>
        <div className='footer-icons-container'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook_icon} alt='' />
          </a>
        </div>
        <div className='footer-icons-container'>
          <a
            href='https://www.whatsapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={whatsapp_icon} alt='' />
          </a>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
