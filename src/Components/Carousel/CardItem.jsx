// CardItem.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { FaPlay } from 'react-icons/fa';

const CardItem = ({ imageUrl, country, headline, description }) => {
	return (
		<Card className='shadow-lg rounded-lg overflow-hidden'>
			{/* Media / Image area */}
			<div className='relative w-full h-0 pb-[56.25%]'>
				{/* 16:9 aspect ratio using Tailwind (pb-[56.25%] = 9/16 * 100%) */}
				<CardMedia
					component='img'
					image={imageUrl}
					alt={headline}
					className='absolute top-0 left-0 w-full h-full object-cover'
				/>

				{/* Optional "Play" button overlay; remove if not needed */}
				<button className='absolute bottom-3 right-3 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition'>
					<FaPlay size={14} />
				</button>
			</div>

			{/* Text content */}
			<CardContent>
				<Typography
					variant='subtitle2'
					className='text-gray-500 uppercase tracking-wide'>
					{country}
				</Typography>

				<Typography
					variant='h6'
					className='font-semibold my-2'>
					{headline}
				</Typography>

				<Typography
					variant='body2'
					className='text-gray-700'>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardItem;
