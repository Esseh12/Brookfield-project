import React from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';
import DefaultButton from '../../Components/Buttons/defaultButton';
import CountUp from 'react-countup';

const StatItem = ({ prefix = '', value, suffix = '', label }) => {
	return (
		<div className='flex flex-col items-center justify-center px-4 py-6 text-center'>
			<div className='playscript text-xl md:text-2xl leading-normal mb-1'>
				{prefix}
				<CountUp
					end={value}
					duration={2.5}
					separator=','
				/>
				{suffix}
			</div>
			<div className='text-base md:text-lg leading-[20px] mt-2'>{label}</div>
		</div>
	);
};

const InsightCard = ({
	image,
	category,
	icon,
	date,
	title,
	categoryColor = 'bg-[#0f3557]',
}) => {
	return (
		<div className='flex flex-col border border-gray-200 rounded-sm shadow-sm overflow-hidden h-full'>
			<div className='h-48 overflow-hidden'>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
				/>
			</div>
			<div className='p-4 flex flex-col flex-grow'>
				<div className='flex items-center justify-between mb-3'>
					<span
						className={`text-xs text-white px-3 py-1 rounded-sm ${categoryColor}`}>
						{category}
					</span>
					<img
						src={icon}
						alt=''
						className='h-5'
					/>
				</div>
				<p className='text-sm text-gray-500 mb-2'>{date}</p>
				<h3 className='playscript text-lg font-medium leading-tight mb-4'>
					{title}
				</h3>
			</div>
		</div>
	);
};

const PublicSecurities = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/homepage-banner.jpg'
			heroHeading='Tamsey Public Securities'>
			<section>
				<div className='max-w-5xl mx-auto px-4 py-16 md:py-24'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-12 md:mb-16'>
						<div>
							<p className='leading-[30px] text-base md:text-lg'>
								With approximately $48 billion in assets under management,
								Tamsey's Public Securities Group has invested on behalf of
								clients worldwide since 1989. We leverage broader Tamsey's real
								asset expertise, with a primary focus on public markets and
								solutions that utilize the strengths of our entire Firm.
							</p>
						</div>
						<div>
							<div className='flex flex-col mb-6'>
								<h2 className='playscript text-xl md:text-2xl leading-normal mb-2'>
									Who We Are
								</h2>
								<div className='w-16 h-1 bg-[#ff8200]'></div>
							</div>
							<p className='text-base md:text-lg mb-6 md:mb-8 text-[#4d4d4d]'>
								Our mission is to generate industry-leading returns over the
								long term while providing unsurpassed and dedicated client
								service.
							</p>
							<DefaultButton
								text='Learn More'
								arrowUrl='https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/themes/investis_project/images/icons/arrowright-blue.svg'
								link='#'
								textColor='#0f3557'
								borderColor='#0f3557'
								hoverOverlayColor='rgba(255, 255, 255, 0.2)'
							/>
						</div>
					</div>

					<div className='py-8 mb-12 md:mb-16 flex flex-wrap justify-center text-center'>
						<StatItem
							prefix='$ '
							value={48}
							suffix=' billion'
							label='in AUM'
						/>
						<div className='border-x-[#ff8200] border-x px-4'>
							<StatItem
								prefix='~ '
								value={110}
								label='employees'
							/>
						</div>
						<StatItem
							value={1989}
							label='inception'
						/>
					</div>
				</div>

				{/* image 1 */}
				<div className='flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 mb-12 md:mb-0 bg-[#0f3557]'>
					{/* Image Section */}
					<div className='w-full md:w-1/2 h-64 md:h-auto'>
						<img
							src='/Assets/Images/strategies-image.jpg'
							alt='Strategies'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Section */}
					<div className='w-full md:w-1/2 text-white flex flex-col justify-center p-6 md:p-8 lg:p-12'>
						<div className='flex flex-col mb-6'>
							<h2 className='playscript text-2xl md:text-3xl leading-normal mb-2'>
								Strategies
							</h2>
							<div className='w-16 h-1 bg-[#ff8200]'></div>
						</div>
						<p className='text-base md:text-lg mb-6 md:mb-8'>
							We employ our high-conviction, value-oriented investment approach
							across real estate, infrastructure, energy infrastructure, real
							asset debt, and multi-asset solutions, offering a variety of
							flexible and scalable investment strategies.
						</p>
						<div>
							<DefaultButton
								text='Learn More'
								arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
								link='#'
								textColor='#FFFFFF'
								borderColor='#ffffff'
								backgroundColor='#0f3557'
								hoverOverlayColor='rgba(255, 255, 255, 0.2)'
							/>
						</div>
					</div>
				</div>

				{/* image 2 */}
				<div className='flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 mb-12 md:mb-16'>
					{/* Text Section */}
					<div className='w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 lg:p-12'>
						<div className='flex flex-col mb-6'>
							<h2 className='playscript text-2xl md:text-3xl leading-normal mb-2'>
								Responsible Investing
							</h2>
							<div className='w-16 h-1 bg-[#ff8200]'></div>
						</div>
						<p className='text-base md:text-lg mb-6 md:mb-8'>
							At Tamsey's Public Securities Group, our highest commitment is to
							our fiduciary duty to create long-term value for our investors,
							ensuring we are working in their best interests and managing our
							business responsibly. Our sustainability approach is aligned with
							that commitment.
						</p>
						<div>
							<DefaultButton
								text='Learn More'
								arrowUrl='https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/themes/investis_project/images/icons/arrowright-blue.svg'
								link='#'
								textColor='#0f3557'
								borderColor='#0f3557'
								hoverOverlayColor='rgba(255, 255, 255, 0.2)'
							/>
						</div>
					</div>

					{/* Image Section */}
					<div className='w-full md:w-1/2 h-64 md:h-auto'>
						<img
							src='/Assets/Images/responsible-investing.jpg'
							alt='Responsible Investing'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* Insights Section (from the image) */}
				<div className='max-w-5xl mx-auto px-4 py-12 md:py-16'>
					<div className='flex flex-col mb-8'>
						<h2 className='playscript text-2xl md:text-3xl leading-normal mb-2'>
							Insights
						</h2>
						<div className='w-16 h-1 bg-[#ff8200]'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
						<InsightCard
							image='/Assets/Images/adobe-stock-41544289-379x216.jpg'
							category='REAL ASSET DEBT'
							icon='https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/themes/investis_project/images/icons/white-paper-icon.svg'
							date='Mar 12, 2025'
							title='Navigating Sector Default Risk in the High-Yield Market: Lessons from Past Sector Default Cycles'
						/>

						<InsightCard
							image='/Assets/Images/shutterstock-1.jpg'
							category='REAL ASSETS'
							icon='https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/themes/investis_project/images/icons/chart-icon.svg'
							date='Mar 04, 2025'
							title='Accessing Liquidity Across the Life Cycle of a Private Fund'
						/>

						<InsightCard
							image='/Assets/Images/Energy-Infrastructure-379x216px-No-7-1.jpg'
							category='ENERGY INFRASTRUCTURE'
							icon='https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/themes/investis_project/images/icons/article-icon.svg'
							date='Feb 11, 2025'
							title='Capturing the Midstream Opportunity'
							categoryColor='bg-[#ff8200]'
						/>
					</div>

					<div className='flex justify-center mt-12'>
						<DefaultButton
							text='See All Insights'
							arrowUrl='https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/themes/investis_project/images/icons/arrowright-blue.svg'
							link='#'
							textColor='#0f3557'
							borderColor='#0f3557'
							hoverOverlayColor='rgba(255, 255, 255, 0.2)'
						/>
					</div>
				</div>

				{/* Contact Section (from the image) */}
				<div className='w-full bg-[#0f3557] bg-opacity-90 bg-blend-multiply relative'>
					<div className='absolute inset-0 z-0'>
						<img
							src='/Assets/Images/contact.jpg'
							alt='Contact Background'
							className='w-full h-full object-cover opacity-60'
						/>
					</div>

					<div className='relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 text-white'>
						<div className='flex flex-col mb-8'>
							<h2 className='playscript text-2xl md:text-3xl leading-normal mb-2'>
								Contact
							</h2>
							<div className='w-16 h-1 bg-[#ff8200]'></div>
						</div>

						<div className='mb-8'>
							<p className='text-base md:text-lg'>
								Please reach out for more information about our Public
								Securities business, strategies and solutions.
							</p>
						</div>

						<div className='flex justify-start'>
							<DefaultButton
								text='Contact'
								arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
								link='#'
								textColor='#FFFFFF'
								borderColor='#ffffff'
								backgroundColor='transparent'
								hoverOverlayColor='rgba(255, 255, 255, 0.2)'
							/>
						</div>
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default PublicSecurities;
