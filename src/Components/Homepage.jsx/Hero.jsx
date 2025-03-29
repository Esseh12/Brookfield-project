import React from 'react';
import { Typography } from '@mui/material';
import DefaultButton from '../../Components/Buttons/defaultButton';

const HomepageHero = () => {
	return (
		<section
			className='relative bg-center bg-cover bg-no-repeat flex items-center'
			style={{
				backgroundImage:
					"url('/Assets/Images/mobile_homepage_image-1484x750.avif')",
				height: '100vh',
			}}>
			{/* Optional dark overlay if needed */}
			{/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}

			<div
				className='relative flex flex-col gap-2 z-10 max-w-5xl 
                   px-4 sm:px-6 lg:px-8 pt-10 mb-4 
                   ml-4 md:ml-12 lg:ml-36'>
				{/* Tagline */}
				<p className='text-white font-bold text-[12px] md:text-[14px] leading-[12px] md:leading-[14px]'>
					A LEADING GLOBAL INVESTMENT FIRM
				</p>

				{/* Main heading */}
				<Typography
					variant='h3'
					className='text-white font-normal mb-4 leading-tight playscript 
                     text-3xl md:text-4xl lg:text-5xl'>
					Creating long-term, sustainable wealth
				</Typography>

				{/* Subtext */}
				<p
					className='text-white my-4 font-base leading-relaxed 
                      text-sm md:text-base'>
					We invest in high-quality businesses that form the backbone of the
					global economy, investing <br /> alongside our clients in nearly
					everything we do.
				</p>

				{/* Button */}
				<div>
					<DefaultButton
						text='Brookfield Overview'
						arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
						link='#'
						textColor='#FFFFFF'
						borderColor='#FFFFFF'
						hoverOverlayColor='rgba(255, 255, 255, 0.2)'
					/>
				</div>
			</div>
		</section>
	);
};

export default HomepageHero;
