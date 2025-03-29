import React, { useState } from 'react';

// Example region data
const regions = [
	{
		id: 'northAmerica',
		label: 'North America',
		hoverSrc:
			'https://www.brookfield.com/themes/custom/bf/assets/images/map.hover.1.png',
	},
	{
		id: 'southAmerica',
		label: 'South America',
		hoverSrc:
			'https://www.brookfield.com/themes/custom/bf/assets/images/map.hover.2.png',
	},
	{
		id: 'europeMiddleEast',
		label: 'Europe & Middle East',
		hoverSrc:
			'https://www.brookfield.com/themes/custom/bf/assets/images/map.hover.3.png',
	},
	{
		id: 'asiaPacific',
		label: 'Asia Pacific',
		hoverSrc:
			'https://www.brookfield.com/themes/custom/bf/assets/images/map.hover.4.png',
	},
];

export default function MapWithHighlights() {
	const [hoveredRegion, setHoveredRegion] = useState(null);

	// Base map (non-highlighted)
	const baseSrc =
		'https://www.brookfield.com/themes/custom/bf/assets/images/map.png';

	// Find the highlight image for the currently hovered region
	const highlightImage =
		regions.find((r) => r.id === hoveredRegion)?.hoverSrc || '';

	return (
		<div className='max-w-7xl mx-auto p-4'>
			{/* Region Labels (Tabs/Buttons) */}
			<div className='flex justify-between items-center mb-10'>
				<div className='border-b border-[#0f3557] w-1/2'>
					<h2 className='text-xl font-base text-[#0f3557] mb-2 hover:text-[#ff8200] leading-[22px]'>
						Worldwide
					</h2>
				</div>
				<div className='flex flex-wrap gap-4 mb-6'>
					{regions.map((region) => (
						<div
							key={region.id}
							onMouseEnter={() => setHoveredRegion(region.id)}
							onMouseLeave={() => setHoveredRegion(null)}
							className='px-3 text-[#0f3557]  py-1 font-semibold text-base leading-[22px] hover:text-[#ff8200] active:text-[#3E7298] transition-colors'>
							{region.label}
						</div>
					))}
				</div>
			</div>

			{/* Map Container */}
			<div className='relative '>
				{/* Base map image */}
				<img
					src={baseSrc}
					alt='Base Map'
					className='block w-full max-w-full'
				/>

				{/* Highlighted map image layered on top */}
				<img
					src={highlightImage || baseSrc}
					alt='Highlighted Map'
					className={`absolute top-0 left-0 w-full h-full 
                      transition-opacity duration-300 
                      ${hoveredRegion ? 'opacity-100' : 'opacity-0'}`}
				/>
			</div>
		</div>
	);
}
