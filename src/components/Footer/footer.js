import './Footer.css';
import logo from '../../images/logo.svg';
import google from '../../images/footerGoogle.svg';
import yelp from '../../images/footerYelp.svg';
// import twitter from '../../images/footerTwitter.svg';
import instagram from '../../images/footerInstagram.svg';
import facebook from '../../images/footerFacebook.svg';

function Footer (props) {
	return (
		<footer className="footer">
			<div className="footer__container">
				<a href='#' onClick={() => {window.location.reload()}}>
					<img className='footer__logo' src={logo} alt='NORDConstructions'></img>
				</a>
				<nav className='footer__nav'>

					<a className="footer__link" href="https://www.google.com/maps/place/NORD+CONSTRUCTION,+8361+18th+Ave+NW,+Seattle,+WA+98117/@47.690475,-122.3803374,13z/data=!4m2!3m1!1s0x5490172aabd00825:0x93e8ef5fe6827356?hl=en-us" target='/blank'>
						<img src={google} alt="google" className="footer__img"/>
					</a>

					<a className="footer__link" href="https://www.yelp.com/biz/nord-construction-seattle" target='/blank'>
						<img src={yelp} alt="yelp" className="footer__img"/>
					</a>

					{/* <a className="footer__link" href="https://twitter.com/NordsConstruct1" target='/blank'>
						<img src={twitter} alt="twitter" className="footer__img"/>
					</a> */}

					<a className="footer__link" href="https://www.instagram.com/nord.construction/?utm_medium=copy_link" target='/blank'>
						<img src={instagram} alt="instagram" className="footer__img"/>
					</a>

					<a className="footer__link" href="https://m.facebook.com/Nord-Construction-104836122073727/?__nodl&refsrc=deprecated&ref=external%3Anord.construction&_rdr" target='/blank'>
						<img src={facebook} alt="facebook" className="footer__img"/>
					</a>

				</nav>
			</div>
		</footer> 
	)
}

export default Footer;