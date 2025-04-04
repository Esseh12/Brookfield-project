import React, { useState } from 'react';

const CaseStudyCard = ({ study, onHover }) => {
	return (
		<div
			className='case-study-card p-6 md:p-8 transition-colors duration-300 hover:bg-[#0f3557]'
			onMouseEnter={() => onHover(study.bgImage)}
			onMouseLeave={() => onHover(null)}>
			<div className='mb-6'>
				<img
					src={study.icon}
					alt={study.title}
					className='w-8 h-8 object-contain'
				/>
			</div>

			<h3 className='font-semibold mb-2 leading-[22px]'>{study.title}</h3>

			<p className='mb-6 text-sm'>{study.description}</p>

			<div className='flex gap-2 items-center group relative'>
				{/* Text link */}
				<a
					href={study.url}
					className='absolute -left-3 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-left px-2 text-[#94CEF3] font-medium'
					target='_blank'
					rel='noopener noreferrer'>
					Read Case Study
				</a>

				{/* Arrow icon that slides right on hover */}
				<svg
					className='w-4 h-4 text-[#94CEF3] group-hover:text-primary-blue transition-all duration-300 transform group-hover:translate-x-32'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={4}
						d='M14 5l7 7m0 0l-7 7m7-7H3'
					/>
				</svg>
			</div>
		</div>
	);
};

const CaseStudies = () => {
	// Holds the current background image for the section
	const [activeBackground, setActiveBackground] = useState(null);

	const caseStudies = [
		{
			id: 'case-1',
			title: 'Fostering Partnership to Drive Decarbonization',
			description:
				'We invested in a developer of technologically advanced carbon capture and sequestration, which we believe can play a meaningful role in decarbonizing carbon-intensive sectors.',
			url: 'https://www.brookfield.com/news-insights/insights/sustainability-case-study-fostering-partnership-drive-decarbonization',
			icon: 'https://ext.same-assets.com/1363139131/3948946612.svg',
			bgImage:
				'/Assets/Images/fostering_partnership_decarbonization_entropy-overlay_0_1.avif',
		},
		{
			id: 'case-2',
			title: 'Using Circular Design To Lower Emissions',
			description:
				'As climate change reshapes the modular services and infrastructure industry, we continue to support our portfolio companies endeavoring to be leaders in the circular economy.',
			url: 'https://www.brookfield.com/news-insights/insights/sustainability-case-study-using-circular-design-lower-product-lifecycle',
			icon: 'https://ext.same-assets.com/1363139131/365443476.svg',
			bgImage: '/Assets/Images/using_circular_design_-_overlay_0_0.avif',
		},
		{
			id: 'case-3',
			title: 'Reduction of Utility Emissions',
			description:
				'Investing in businesses that support customer objectives and contribute to local climate action plans.',
			url: 'https://www.brookfield.com/news-insights/insights/sustainability-case-study-enabling-reduction-utility-emissions',
			icon: 'https://ext.same-assets.com/1363139131/2435756175.svg',
			bgImage: '/Assets/Images/avoidingthebrowndiscount-overlayv2_1.avif',
		},
		{
			id: 'case-4',
			title: 'Avoiding the Brown Discount',
			description:
				'Many corporate tenants have made their own net zero commitments, necessitating addressing office occupancy emissions. Brookfield can take an outsized role in delivering solutions.',
			url: 'https://www.brookfield.com/news-insights/insights/sustainability-case-study-avoiding-brown-discount-or-depreciation-high',
			icon: 'https://ext.same-assets.com/1363139131/3752388103.svg',
			bgImage: '/Assets/Images/avoiding_the_brown_discount_-_overlay_0_1.avif',
		},
	];

	return (
		<section
			id='case-studies'
			className='py-16 md:py-24 bg-[#05080a] bg-opacity-10 text-white transition-all duration-500 bg-gradient-to-b from-[#05080a] to-[#05080a]'
			style={{
				backgroundImage: activeBackground ? `url(${activeBackground})` : 'none',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<div className='flex flex-col gap-6 justify-center items-center max-w-4xl mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6 text-primary-blue'>
						Case Studies
					</h2>
					<p className='text-xl text-gray-dark max-w-3xl mx-auto'>
						We are focused on decarbonization potential across our value chain,
						thereby preserving and creating value for our businesses.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
					{caseStudies.map((study) => (
						<CaseStudyCard
							key={study.id}
							study={study}
							onHover={setActiveBackground}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudies;
