import './Offers.css';
import offersFirstImage from '../../images/offers-first.png';
import offersSecondImage from '../../images/offers-second.png';
import offersThirdImage from '../../images/offers-third.png';

function Offers (props) {
	return (
		<section className='offers'>

			<div className='offers__container'>
				<h2 className='offers__title'>Our Offers</h2>
				<h3 className='offers__text'>After completing the design and plan for your office or home remodel, we provide you with a detailed estimate to give you a full picture of the cost and timeframe for completion.</h3>

				<div className='offers__list'>

					<div className='offers__item'>                
						<img className='offers__img' src={offersFirstImage} alt='Quality Materials'/>
						<p className='offers__paragraph'>Cost of Materials</p>
					</div>

					<div className='offers__item'>
						<img className='offers__img' src={offersSecondImage} alt='Cost of Work'/>
						<p className='offers__paragraph'>Volume and Labor</p>
					</div>

					<div className='offers__item'>
						<img className='offers__img' src={offersThirdImage} alt='Work Schedule'/>
						<p className='offers__paragraph'>Schedule for Completion</p>
					</div>

				</div>
			</div>

		</section>    
	)
}

export default Offers;