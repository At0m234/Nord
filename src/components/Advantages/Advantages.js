import './Advantages.css';

function Advantages (props) {
	return (
		<section className='advantages'>

			<div className='advantages__container'>
				<h2 className='advantages__title'>Why Choose US</h2>

				<ol className='advantages__list'>

					<li className='list__item'>
						<div className='list__container'>
							<h3 className='list__subtitle'>We Do It All</h3>
							<p className='list__paragraph'>We offer a wide range of speciality services that other companies simply do not.From a small remodal to a customer built home, we are the specialists for the job.</p>
						</div>
					</li>

					<li className='list__item'>     
						<div className='list__container'>
							<h3 className='list__subtitle'>Honest & Reliable</h3>
							<p className='list__paragraph'>In the process of working with clients, we provide all the necessary information. Our work is transparent.</p>
						</div>
					</li>

					<li className='list__item'>
						<div className='list__container'>
							<h3 className='list__subtitle'>Top-Notch Customer Service</h3>
							<p className='list__paragraph'>We are ready to provide our clients with the best service.</p>
						</div>
					</li>

				</ol>
			</div>

		</section>
	)
}

export default Advantages;