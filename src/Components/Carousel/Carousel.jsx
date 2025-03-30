// CarouselCard.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CardItem from './CardItem';

const carouselData = [
	{
		id: 1,
		imageUrl: 'https://via.placeholder.com/350x200',
		country: 'Brazil',
		headline: 'Providing Critical Water and Sanitation Services',
		description:
			'Around half of the Brazilian population doesn’t have sewage collection...',
	},
	{
		id: 2,
		imageUrl: 'https://via.placeholder.com/350x200',
		country: 'United States',
		headline: 'A First-of-its-kind Community Solar Initiative',
		description:
			'Three rooftops have become the first commercial community solar purpose...',
	},
	{
		id: 3,
		imageUrl: 'https://via.placeholder.com/350x200',
		country: 'United Kingdom',
		headline: 'Quality Short-Break Holiday Destinations',
		description:
			'Center Parcs offers high-quality accommodation, leisure facilities...',
	},
	// ... add more as needed
];

// Configure how many slides to show for desktop, tablet, mobile
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		partialVisibilityGutter: 30,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		partialVisibilityGutter: 30,
	},
};

const CarouselCard = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-16'>
			<Carousel
				responsive={responsive}
				infinite={false}
				swipeable
				draggable
				arrows
				autoPlaySpeed={3000}
				keyBoardControl
				containerClass='carousel-container'
				itemClass='px-2' // spacing between items
				slidesToSlide={1}>
				{carouselData.map((item) => (
					<CardItem
						key={item.id}
						imageUrl={item.imageUrl}
						country={item.country}
						headline={item.headline}
						description={item.description}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default CarouselCard;
