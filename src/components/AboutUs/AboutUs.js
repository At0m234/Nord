import './AboutUs.css';

function AboutUs (props) {
	return (
		<section className='about-us'>
			<div className='about-us__content'>
				<div className='about-us__container'>
					<h2 className='about-us__title'>Who We Are</h2>
				</div>
				<div className='about-us__container'>
					<h3 className='about-us__subtitle'>Residential And Commercial, Builders And Contractors </h3>
					<p className='about-us__text'>The Nord Construction is a full-service construction company, general contractor, design-builder and construction manager with office locations throughout the United States.</p>
					<p className='about-us__text'>Founded in 1998, Nord is the commercial general contractor founded west of the Mississippi River and ranks in the top tier in the News-Record magazine’s list of Top 400 Contractors.</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUs;