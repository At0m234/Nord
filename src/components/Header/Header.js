import './Header.css';
import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';

function Header (props) {
  return (
    <header className='header'>
      <div className='header__container'>
        <a href='#' onClick={() => {window.location.reload()}}>
          <img className='header__logo' src={logo} alt='NORDConstructions' />
        </a>
        <div className='header__info'>
          <div className='info__container'>
            <img className='header__image' src={phone} alt='Phone' />
            <a className='header__text' href='tel:+12063766295'>+1(206)376-6295</a>
          </div>
          <div className='info__container'>
            <img className='header__image' src={email} alt='Email' />        
            <a className='header__text' href='mailto:Info@nord.construction'>Info@nord.construction</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;