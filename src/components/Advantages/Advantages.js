import './Advantages.css';

function Advantages (props) {
	return (
		<section className='advantages'>

			<div className='advantages__container'>
				<h2 className='advantages__title'>Why Choose US</h2>

				<ol className='advantages__list'>

					<li className='list__item'>
						<div className='list__container'>
							<h3 className='list__subtitle'>We Handle Everything</h3>
							<p className='list__paragraph'>Nord covers your home remodeling needs from top to bottom. All you have to say is what you want and we’ll make it happen.</p>
						</div>
					</li>

					<li className='list__item'>     
						<div className='list__container'>
							<h3 className='list__subtitle'>Honest, Reliable Contractor</h3>
							<p className='list__paragraph'>We are your trusted source for all things related to design and construction when it comes to home remodeling. Trust Nord for quality, price, and reliability.</p>
						</div>
					</li>

					<li className='list__item'>
						<div className='list__container'>
							<h3 className='list__subtitle'>Best-in-Class Customer Service</h3>
							<p className='list__paragraph'>Quality service comes with quality care. We offer best-in-class customer service throughout the entirely of your remodeling project.</p>
						</div>
					</li>

				</ol>
			</div>

		</section>
	)
}

export default Advantages;