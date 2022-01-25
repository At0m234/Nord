import './ContactUs.css';
import location from '../../images/contactUsLocation.svg';
import phone from '../../images/phone.svg';
import email from '../../images/contactUsEmail.svg';

function ContactUs (props) {
	return (
		<section className='contact-us'>
			<div className='contact-us__container'>

				<div className='contact-us__info'>

					<h2 className='contact-us__title'>Get In Touch With Us</h2>
					<h3 className='contact-us__subtitle'>Message us Now:</h3>
					<h4 className='contact-us__text'>We welcome queries from all our stakeholders and would like to hear from you</h4>

					<a className='contact-us__block' href='https://www.google.com/maps/place/NORD+CONSTRUCTION,+8361+18th+Ave+NW,+Seattle,+WA+98117/@47.690475,-122.3803374,13z/data=!4m2!3m1!1s0x5490172aabd00825:0x93e8ef5fe6827356?hl=en-us' target='/blank'>
						<img className='contact-us__img' src={location} alt='location' />
						<p className='contact-us__paragraph' >8361 18th Ave NW, Seattle, WA 98117 </p> 
					</a>

					<a className='contact-us__block' href='tel:+12063766295'>
						<img className='contact-us__img' src={phone} alt='phone'/>
						<p className='contact-us__paragraph' >+1 (206) 376-6295</p>
					</a>

					<a className='contact-us__block' href='mailto:Info@nord.construction'>
						<img className='contact-us__img' src={email} alt='email' />
						<p className='contact-us__paragraph' >Info@nord.construction</p>
					</a>

				</div>

				{/* <form className='contact-us__form'>
					<input className='contact-us__form-name' type='text' placeholder='Name' required/>
					<input className='contact-us__form-phone' type='number' placeholder='Phone'/>
					<input className='contact-us__form-email' type='email' placeholder='Email Address' required/>
					<textarea className='contact-us__form-message' type='text' placeholder='Message' required/>
					<button className='contact-us__form-submit' type='submit' disabled>SUBMIT</button>
				</form> */}

			</div>
		</section>  
	)
}

export default ContactUs;