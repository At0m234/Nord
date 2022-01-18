import './Reviews.css';

function Reviews (props) {
	return (
		<section className='reviews'>
			<div className='reviews__container'>

				<div className='reviews__heading'>
					<h2 className='reviews__title'>What Our Clients Says</h2>
					<h3 className='reviews__subtitle'>People Matter And We Live It</h3>
				</div>

				<div className='reviews__block'>

					<div className='reviews__reviewer'>
						<div className='reviewer__img'></div>
						<div className='reviewer__container'>
							<h4 className='reviewer__name'>Chris Jordan</h4>
							<blockquote className='reviewer__text'>'I have worked with a number of general contractors from across the country. But I can tell you  that nonecompare to the NORD Construction.'</blockquote>
						</div>
					</div>

					<div className='reviews__reviewer'>
						<div className='reviewer__img'></div>
						<div className='reviewer__container' >
							<h4 className='reviewer__name'>Mithcle Marsh</h4>
							<blockquote className='reviewer__text'>'NORD has been our exclusive contractor since 1992 because of their integrity, commitment to quality and performance'</blockquote>
						</div>
					</div>

					<div className='reviews__reviewer'>
						<div className='reviewer__img'></div>
						<div className='reviewer__container'>
							<h4 className='reviewer__name'>Rob Asher</h4>
							<blockquote className='reviewer__text'>'The people at Weitz are amazing. Our collaborative culture builds friendships among our team members.'</blockquote>
						</div>
					</div>
				</div>

			</div>
		</section>    
	)
}

export default Reviews;