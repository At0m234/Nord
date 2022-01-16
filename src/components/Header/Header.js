import './Header.css';
import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';

function Header (props) {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo}   alt='NORDConstructions' />
        <div className='header__info'>
          <div className='info__container'>
            <img className='header__image' src={phone} alt='Phone' />
            <div className='header__text'>+1(206)376-6295</div>
          </div>
          <div className='info__container'>
            <img className='header__image' src={email} alt='Email' />        
            <div className='header__text'>Info@nord.construction</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;