import React from 'react';
import DefaultButton from '../Buttons/defaultButton';
const BottomHero = () => {
	return (
		<section
			className='relative bg-center bg-cover bg-no-repeat text-white flex items-center 
                 h-[60vh]  p-4 sm:p-6 md:p-8'
			style={{
				backgroundImage: "url('/Assets/Images/careers-homepage-mobile-3.avif')",
			}}>
			{/* The container is half-width on medium+ screens, full width on smaller screens */}
			<div className='max-w-7xl w-full md:w-1/2 ml-0 md:ml-28 flex flex-col gap-2'>
				{/* Heading */}
				<h2 className='text-sm  font-bold mb-2 leading-tight'>Careers</h2>
				{/* Sub-heading */}
				<h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 playscript leading-tight'>
					Tamsley and You
				</h3>
				{/* Description */}
				<p className='mb-6 text-xs sm:text-sm md:text-base leading-normal'>
					Working at Brookfield means becoming part of a collaborative,
					results-oriented team.
				</p>
				{/* Button */}
				<div>
					<DefaultButton
						text='Learn More'
						arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
						link='/careers'
						textColor='#FFFFFF'
						borderColor='#FFFFFF'
						hoverOverlayColor='rgba(255, 255, 255, 0.2)'
					/>
				</div>
			</div>
		</section>
	);
};

export default BottomHero;
