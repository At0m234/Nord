import './Offers.css';
import offersFirstImage from '../../images/offers-first.png';
import offersSecondImage from '../../images/offers-second.png';
import offersThirdImage from '../../images/offers-third.png';

function Offers (props) {
	return (
		<section className='offers'>

			<div className='offers__container'>
				<h2 className='offers__title'>Our Offers</h2>
				<div className='offers__text'>After the complete readiness of the design project,you will receive a full  estimate for the repair and construction work, and you will know for sure:</div>

				<div className='offers__list'>

					<div className='offers__item'>                
						<img className='offers__img' src={offersFirstImage} alt='Quality Materials'/>
						<p className='offers__paragraph'>Quality and Cost of Materials</p>
					</div>

					<div className='offers__item'>
						<img className='offers__img' src={offersSecondImage} alt='Cost of Work'/>
						<p className='offers__paragraph'>Volume and Cost of Work</p>
					</div>

					<div className='offers__item'>
						<img className='offers__img' src={offersThirdImage} alt='Work Schedule'/>
						<p className='offers__paragraph'>Work Schedule that takes into account all the details of the technologies process.</p>
					</div>

				</div>
			</div>

		</section>    
	)
}

export default Offers;