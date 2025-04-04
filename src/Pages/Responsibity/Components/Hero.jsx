import { IoIosArrowDown } from 'react-icons/io';

const Hero = () => {
	return (
		<section
			id='introduction'
			className='relative h-screen bg-primary-blue text-white overflow-hidden flex items-center justify-center'>
			{/* Background image */}
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{
					backgroundImage:
						'url("/Assets/Images/a5e13c50a333b7e971b6b153f83936be_0_0.avif")',
				}}
			/>

			{/* Dark overlay */}
			<div className='absolute inset-0 bg-black opacity-50' />

			<div className='brookfield-container relative z-10 flex items-center h-full'>
				<div className=' px-4 md:px-0'>
					<div>
						<h1 className='playscript text-3xl md:text-[40px] mb-6 leading-tight'>
							Our ambition is to achieve{' '}
							<span className='text-[#94CEF3] mx-2'>
								net zero emissions <br /> by 2050
							</span>
							across the assets we manage.
						</h1>
					</div>

					<div className='flex flex-col  mt-8'>
						<p className='text-[20px] leading-[28px]'>
							Let's talk about the big picture on emissions.
						</p>
						<div className='mt-4'>
							<IoIosArrowDown className='animate-bounce text-4xl text-[#55565A]' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
