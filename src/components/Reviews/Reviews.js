import './Reviews.css';

function Reviews (props) {
	return (
		<section className='reviews'>
			<div className='reviews__container'>

				<div className='reviews__heading'>
					<h2 className='reviews__title'>What Our Clients Say</h2>
					<h3 className='reviews__subtitle'>Discover our clients’ experiences after working with Nord Construction.</h3>
				</div>

				<div className='reviews__block'>

					<div className='reviews__reviewer'>
						<div className='reviewer__img'></div>
						<div className='reviewer__container'>
							<h4 className='reviewer__name'>Dan P.</h4>
							<blockquote className='reviewer__text'>'Incredible service, could not ask for a better job.  Dale was great to work with!'</blockquote>
						</div>
					</div>

					<div className='reviews__reviewer'>
						<div className='reviewer__img'></div>
						<div className='reviewer__container' >
							<h4 className='reviewer__name'>Ramie M.</h4>
							<blockquote className='reviewer__text'>'Outstanding!!!!  Had a new roof put on 2 1/2 years ago by the son of a friend,  May have been a little cheaper, but I really hired him to help him out.'</blockquote>
						</div>
					</div>

					<div className='reviews__reviewer'>
						<div className='reviewer__img'></div>
						<div className='reviewer__container'>
							<h4 className='reviewer__name'>Fred T.</h4>
							<blockquote className='reviewer__text'>'Dale and his fellow employees at their company, BRD Roofing, are very courteous, professional, and knowledgeable in their work.'</blockquote>
						</div>
					</div>
				</div>

			</div>
		</section>    
	)
}

export default Reviews;