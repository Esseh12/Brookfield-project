import React from 'react';

const ClosingSection = () => {
	return (
		<section
			id=''
			className='relative py-16 md:py-24 bg-[#0f3557] text-white'>
			<div className='container mx-auto px-4 md:px-8 max-w-3xl'>
				{/* Main Content Area */}
				<div className='flex flex-col md:flex-row'>
					{/* Right Content */}
					<div className=''>
						{/* Hero Text */}
						<div className='mb-12'>
							<h2 className='playscript text-[36px] leading-[48px] font-medium '>
								For a more detailed overview of Brookfield's sustainability
								strategy and approach, please visit our{' '}
								<a
									href='#'
									className='text-[#85BB6E] '>
									2023 Sustainability Report
								</a>
								.
							</h2>
						</div>

						{/* Download Button */}
						<div className='mb-12'>
							<a
								href='#'
								className='inline-flex items-center bg-white px-6 py-3  hover:bg-gray-100 transition-colors text-[#0f3557] font-semibold text-[13px] leading-[18px]'>
								Download the BAM Report
								<svg
									className='w-5 h-5 ml-2'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
								</svg>
							</a>
						</div>

						{/* Additional Info */}
						<div>
							<p className='font-medium leading-[24px]'>
								For more information on Brookfield Corporation's sustainability
								progress, please{' '}
								<a
									href='#'
									className='text-white underline hover:text-gray-300'>
									click here
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClosingSection;
