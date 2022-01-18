import './Projects.css';
import projectsFirstImage from '../../images/projectsFirstImage.jpg';
import projectsSecondImage from '../../images/projectsSecondImage.jpg';
import projectsThirdImage from '../../images/projectsThirdImage.jpg';
// import projectsArrow from '../../images/projectsArrow.svg';

function Projects (props) {
	return (
		<section className='projects'>
			<div className='projects__container'>

				<h2 className='projects__title'>Our Latest Projects</h2> 

				<div className="projects__slider-container">
					<div className="projects__slider">

						<div className='projects__cell'>
							<img className='projects__img' src={projectsFirstImage} alt='Eagle House Dilapidations'/>
							<h3 className='projects__subtitle'>Eagle House Dilapidations</h3>
						</div> 

						<div className='projects__cell'>
							<img className='projects__img' src={projectsSecondImage} alt='Hotel Accommodation Refurbishments'/>
							<h3 className='projects__subtitle'>Hotel Accommodation Refurbishments</h3>
						</div>

						<div className='projects__cell'>
							<img className='projects__img' src={projectsThirdImage} alt='Hotel Bathroom Refurbishments'/>
							<h3 className='projects__subtitle'>Hotel Bathroom Refurbishments</h3>
						</div>

						<div className='projects__cell'>
							<img className='projects__img' src={projectsFirstImage} alt='Eagle House Dilapidations'/>
							<h3 className='projects__subtitle'>Eagle House Dilapidations</h3>
						</div> 

						<div className='projects__cell'>
							<img className='projects__img' src={projectsSecondImage} alt='Hotel Accommodation Refurbishments'/>
							<h3 className='projects__subtitle'>Hotel Accommodation Refurbishments</h3>
						</div>

						<div className='projects__cell'>
							<img className='projects__img' src={projectsThirdImage} alt='Hotel Bathroom Refurbishments'/>
							<h3 className='projects__subtitle'>Hotel Bathroom Refurbishments</h3>
						</div>

					</div>
					
					
					<button className='projects__arrow projects__arrow_prev'></button>
					<button className='projects__arrow projects__arrow_next'></button>
				</div>

			</div>
		</section>   
	)
}

export default Projects;