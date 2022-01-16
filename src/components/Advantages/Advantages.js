import './Advantages.css';

function Advantages (props) {
	return (
		<section className='advantages'>

			<div className='advantages__container'>
				<h2 className='advantages__title'>Why Choose US</h2>

				<ol className='advantages__list'>

					<li className='advantages__advantage'>
						<div className='b_t_inner'>
							<h3 className='advantages__subtitle'>We Do It All</h3>
							<p className='advantages__text'>We offer a wide range of speciality services that other companies simply do not.From a small remodal to a customer built home, we are the specialists for the job.</p>
						</div>
					</li>

					<li className='advantages__advantage'>     
						<div className='b_t_inner'>
							<h3 className='advantages__subtitle'>Honest & Reliable</h3>
							<p className='advantages__text'>In the process of working with clients, we provide all the necessary information. Our work is transparent.</p>
						</div>
					</li>

					<li className='advantages__advantage'>
						<div className='b_t_inner'>
							<h3 className='advantages__subtitle'>Top-Notch Customer Service</h3>
							<p className='advantages__text'>We are ready to provide our clients with the best service.</p>
						</div>
					</li>

				</ol>
			</div>

		</section>
	)
}

export default Advantages;