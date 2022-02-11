import './AboutUs.css';

function AboutUs (props) {
	return (
		<section className='about-us'>
			<div className='about-us__content'>
				<h2 className='about-us__title'>Who We Are</h2>
				<div className='about-us__container'>
					<h3 className='about-us__subtitle'>Full-Service Office and Home Remodeling</h3>
					<p className='about-us__text'>Nord Construction is a full-service construction company that provides design, building, and general contractor services in the Seattle area.</p>
					<p className='about-us__text'>Founded in 1998, Nord Construction maintains its top-tier ranking in the News-Record magazine’s Top 400 Contractors. Working with Nord means working with quality craftsmen and expert contractors.</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUs;