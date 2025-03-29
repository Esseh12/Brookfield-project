import React from 'react';

const HomeVideo = () => {
	return (
		<section className='bg-[#0f3557] py-8 flex flex-col p-4 sm:p-8 sm:pb-0'>
			{/* Heading Section */}
			<div className='px-4 sm:px-12 flex flex-col justify-start'>
				<h1 className='text-white playscript text-3xl sm:text-4xl leading-tight'>
					Invested
				</h1>
				<span className='border-b-4 border-[#ff8200] w-12 sm:w-16 mt-4'></span>
			</div>

			{/* Centered Video */}
			<div className='flex items-center justify-center pb-0 mt-10'>
				{/* Responsive video container using aspect ratio trick */}
				<div
					className='relative w-full max-w-3xl'
					style={{ paddingTop: '56.25%' }}>
					<iframe
						title='Invested Video'
						className='absolute top-0 left-0 w-full h-[75%]'
						src='https://www.youtube.com/embed/sVLuadUf8Lc'
						frameBorder='0'
						allow='autoplay; encrypted-media'
						allowFullScreen
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeVideo;
