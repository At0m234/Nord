import './Services.css';

function Services (props) {
	return (
		<section className='services'>
			<div className='services__content'>
				<h2 className='services__title'>Our Services</h2>
				<div className='services__list-container'>
					<ul className='services__list'>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Kitchen Remodeling</h3>
								<p className='services__paragraph'>Get the kitchen of your dreams. From pure modern white to rustic wood and terracotta, we source, design, and install all elements to make your new kitchen perfect.</p>
							</div>
						</li>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Bathroom Remodeling</h3>
								<p className='services__paragraph'>Breathe a sigh of relaxation in your new bathroom, completely remodeled from tile to fixture. Each selected piece is installed with precision, creating an air of balance with style.</p>
							</div>
						</li>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Home Remodeling</h3>
								<p className='services__paragraph'>Open your space, create new rooms, and change the entire aesthetic of your home with full-service home remodeling where every inch of your home is considered.</p>
							</div>
						</li>

					</ul>

					<ul className='services__list'>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>HandyMan Services</h3>
								<p className='services__paragraph'>Maintain your home with skilled professionals who carry years of experience in household care. Plumbing, electric, and more are handled with ease through Nord.</p>
							</div>
						</li> 

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Attic Finishing</h3>
								<p className='services__paragraph'>Create an entirely new room in your home by finishing the attic. Complete with electric, insulation, heating, and plumbing, this will be the perfect bonus or guest room..</p>
							</div>
						</li>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Basement Finishing</h3>
								<p className='services__paragraph'>Unlock the full potential of your home with basement finishing. This functional area can maintain its storage purpose while being more of a family-friendly lounge.</p>
							</div>
						</li> 

					</ul>
				</div>
				<div className='services__stripe'></div>
			</div>
		</section>
	)
}

export default Services;