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
								<p className='services__paragraph'>This involves updating or altering the appearance to provide it with a new look.It doesn't change the layout of your space but can include repainting the walls, renewing the cabinets, counters, and floor,or changing the overall design, such as moving from a cottage-style to modern.</p>
							</div>
						</li>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Bathroom Remodeling</h3>
								<p className='services__paragraph'>Bathroom remodeling consists more than simply replacing various fixtures in the bathroom. This usually involves a different design layout, relocation of existing fixtures or adding major new	features such as a whirlpool, sauna, steam room, walk in shower, windows other than replacements or skylights.</p>
							</div>
						</li>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Home Remodeling</h3>
								<p className='services__paragraph'>Remodeling is the process of changing the functionality and the design of an area. It may involve tearing out a wall to expand a bathroom and a kitchen layout so the cabinets, fridge, sink, and range are in different locations. Constructing an addition to your home would also be considered a remodel.</p>
							</div>
						</li>

					</ul>

					<ul className='services__list'>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>HandyMan Services</h3>
								<p className='services__paragraph'>This involves updating or altering the appearance to provide it with	a new look. It doesn't change the	layout of your space but can include repainting the walls, renewing the cabinets, counters, and floor,or changing the overall design, such as moving from a cottage-style to modern.</p>
							</div>
						</li> 

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Attic Finishing</h3>
								<p className='services__paragraph'>Bathroom remodeling consists more than simply replacing various fixtures in the bathroom. This usually involves a different design layout, relocation of existing fixtures or adding major new features such as a whirlpool, sauna, steam room, walk in shower, windows other than replacements or skylights.</p>
							</div>
						</li>

						<li className='services-item'>
							<div className='services__container'>
								<h3 className='services__subtitle'>Basement Finishing</h3>
								<p className='services__paragraph'>Remodeling is the process of changing the functionality and the design of an area. It may involve tearing out a wall to expand a bathroom and a kitchen layout so the cabinets, fridge, sink, and range are in different locations. Constructing an addition to your home would also be considered a remodel.</p>
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