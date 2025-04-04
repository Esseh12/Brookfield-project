// FeatureCards.jsx
import React from 'react';
import DefaultButton from '../../../Components/Buttons/defaultButton';

// Reusable FeatureCard component
export const FeatureCard = ({ image, title, description, buttonText }) => (
	<div className='relative overflow-hidden h-[400px]'>
		<div className='absolute inset-0'>
			<img
				src={image}
				alt={title}
				className='w-full h-full object-cover'
			/>
			<div className='absolute inset-0 bg-black/40 bg-opacity-60'></div>
		</div>
		<div className='relative p-8 flex flex-col h-full justify-center'>
			<div className='mb-4 text-white p-4'>
				<h2 className='playscript text-2xl md:text-3xl leading-normal mb-2'>
					{title}
				</h2>
				<div className='w-16 h-1 bg-[#ff8200]'></div>
			</div>
			<p className='text-white mb-2 max-w-md px-4'>{description}</p>
			<div className='flex justify-start px-4'>
				<DefaultButton
					text={buttonText}
					arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
					link='#'
					textColor='#FFFFFF'
					borderColor='#FFFFFF'
					backgroundColor=''
					hoverOverlayColor='rgba(15,53,87,0.8)'
					className='transition transform hover:scale-105'
				/>
			</div>
		</div>
	</div>
);

// Reusable FeatureCards container component
const FeatureCards = ({ cardsData }) => {
	return (
		<section className='pt-16 bg-primary-50'>
			<div className='relative'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-0'>
					{cardsData.map((card, idx) => (
						<FeatureCard
							key={idx}
							{...card}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureCards;
