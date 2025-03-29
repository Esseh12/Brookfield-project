import PagesLayout from '../../Components/Layout/PagesLayout';
import React from 'react';
import DefaultButton from '../../Components/Buttons/defaultButton';

/** Mini component for displaying stats like "2,500+" and "Employees" */
function StatItem({ number, label }) {
	return (
		<div className='flex flex-col gap-2 text-center'>
			<h1 className='playscript text-4xl md:text-[42px] leading-tight text-[#0f3557]'>
				{number}
			</h1>
			<p className='font-semibold text-[#4d4d4d] text-lg md:text-xl leading-6'>
				{label}
			</p>
		</div>
	);
}

/** Mini component for each Ecosystem item */
function EcosystemItem({ title, description }) {
	return (
		<div className='flex flex-col gap-2 md:gap-3'>
			<h1 className='text-lg md:text-2xl text-[#0f3557]'>{title}</h1>
			<p className='text-sm md:text-base text-[#55565a] leading-6'>
				{description}
			</p>
		</div>
	);
}

/**
 * Mini component for the bottom cards
 * (like "VIDEO: Invested" and "HISTORY: A Century in the Making")
 */
function FeatureCard({
	label,
	heading,
	description,
	buttonText,
	imageSrc,
	buttonLink,
	isGrayscale = false,
}) {
	return (
		<div
			className={`relative bg-center bg-cover bg-no-repeat h-[50vh] md:h-[60vh] flex items-end p-4 sm:p-6 ${
				isGrayscale ? 'filter grayscale' : ''
			}`}
			style={{ backgroundImage: `url(${imageSrc})` }}>
			{/* Dark overlay to help text stand out */}
			<div className='absolute inset-0 bg-gradient-to-b from-black/70 to-transparent'></div>

			{/* Text and Button */}
			<div className='relative z-10 text-white max-w-sm flex flex-col gap-5'>
				<p className='text-xs sm:text-sm uppercase font-semibold tracking-wide mb-1'>
					{label}
				</p>
				<h2 className='text-xl sm:text-2xl md:text-4xl mb-2'>{heading}</h2>
				<p className='text-sm sm:text-base md:text-lg mb-4'>{description}</p>
				<div>
					<DefaultButton
						text={buttonText}
						arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
						link={buttonLink}
						textColor='#FFFFFF'
						borderColor='#FFFFFF'
						hoverOverlayColor='rgba(255, 255, 255, 0.2)'
					/>
				</div>
			</div>
		</div>
	);
}

/** Mini component for a single highlight card */
function HighlightCard({ title, subtitle, date, backgroundColor = '#0f3557' }) {
	return (
		<div
			className='p-4 w-full flex flex-col justify-center text-white'
			style={{ backgroundColor }}>
			<h4 className='text-sm font-semibold uppercase mb-1'>{title}</h4>
			<p className='text-sm mb-2'>{subtitle}</p>
			<p className='text-xs font-medium'>{date}</p>
		</div>
	);
}

/** Mini component for a highlight card */
function BaseHighlightCard({ title, subTitle, date, backgroundColor }) {
	return (
		<div
			className='p-4 w-full flex flex-col justify-center text-white'
			style={{ backgroundColor }}>
			<h4 className='text-sm font-semibold uppercase mb-1'>{title}</h4>
			<p className='text-sm mb-2'>{subTitle}</p>
			<p className='text-xs font-medium'>{date}</p>
		</div>
	);
}
const WhoWeAre = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/aboutus-whoweare-hero-desktop-3.avif'
			heroHeading='Who We Are'>
			{/* First Section: Stats + Intro Text */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 flex flex-col gap-20'>
				{/* Stats Row */}
				<div className='bg-white flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 md:gap-0 mb-16'>
					<StatItem
						number='2,500+'
						label='Employees'
					/>
					<StatItem
						number='~250,000'
						label='Operating Employees'
					/>
					<StatItem
						number='30+'
						label='countries across five continents'
					/>
					<StatItem
						number='2,000+'
						label='investments globally'
					/>
				</div>

				{/* Intro Paragraphs */}
				<div className='bg-white'>
					<p className='playscript text-[#0f3557] text-xl md:text-2xl leading-8 md:leading-9 mb-4'>
						Brookfield is a leading global investment firm with over $1 trillion
						of assets under management. We invest on behalf of institutions and
						individuals around the world with the goal of helping them to create
						long-term, sustainable wealth.
					</p>
					<p className='playscript text-[#0f3557] text-xl md:text-2xl leading-8 md:leading-9'>
						Our origin as owner/operators of high-quality businesses allows us
						to leverage our unique operational expertise to grow the businesses
						we own on behalf of our clients. We put our own capital to work
						alongside our partners’ in nearly every transaction, ensuring strong
						alignment of interests.
					</p>
				</div>
			</div>

			{/* Second Section: Ecosystem */}
			<div className='relative bg-[#f2f5f8] px-4 sm:px-12 lg:px-12 py-8 md:py-24'>
				<div className='max-w-7xl mx-auto'>
					{/* Header */}
					<div className='mb-8'>
						<h1 className='playscript text-3xl md:text-4xl leading-12 text-[#0f3557]'>
							Leveraging the Brookfield Ecosystem
						</h1>
						<span className='block w-16 h-1 bg-[#ff8200] mt-4'></span>
					</div>

					{/* Main paragraph */}
					<div className='mb-10'>
						<h3 className='playscript text-sm md:text-2xl text-[#0f3557] leading-9'>
							One of the keys to our success is the Brookfield Ecosystem. Our
							network of more than 2,500 investment professionals and 250,000
							operating employees in our businesses around the world provide us
							valuable information and insights into where the world is going
							and how it’s changing. This helps inform our investment decisions
							and add value to the businesses we own.
						</h3>
					</div>

					{/* Ecosystem items */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<EcosystemItem
							title='Gathering Operational Intelligence'
							description='Our operations in strategic locations around the world provide
              us with data and insights into trends and changes in the market.'
						/>
						<EcosystemItem
							title='Turning Insights into Action'
							description='We leverage this intelligence to source, execute, manage and
              realize investments for the benefit of our clients and partners.'
						/>
						<EcosystemItem
							title='Connecting with Confidence'
							description='The Brookfield Ecosystem drives competitive advantages in sourcing,
              executing, managing, and realizing investments.'
						/>
					</div>
				</div>
			</div>

			{/* Third Section: Two Feature Cards */}
			<div className='bg-white py-8 md:py-16 px-4 sm:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<FeatureCard
						label='VIDEO'
						heading='Invested'
						description='Our disciplined investment approach creates value and delivers strong risk-adjusted returns for our investors across market cycles.'
						buttonText='Watch Video'
						buttonLink='#'
						imageSrc='/Assets/Images/brookfield-media-careers-office-table-community.avif'
						isGrayscale={false}
					/>
					<FeatureCard
						label='HISTORY'
						heading='Brookfield: A Century in the Making'
						description="Our firm's heritage not only informs who we are today, but also guides us into the future."
						buttonText='Learn More'
						buttonLink='#'
						imageSrc='/Assets/Images/history-1899-side-side-dark-mobile.avif'
						isGrayscale={true}
					/>
				</div>
			</div>

			{/* Fourth Section: Highlights (like your screenshot) */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16'>
				<h2 className='text-[#0f3557] text-xl sm:text-2xl md:text-3xl font-bold mb-6'>
					HIGHLIGHTS
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
					{/* Example highlight cards */}
					<BaseHighlightCard
						title='Shareholder Letter'
						subTitle='Brookfield Corporation'
						date='March 2025 Update'
						backgroundColor='#003366' // or any color
					/>
					<BaseHighlightCard
						title='Shareholder Letter'
						subTitle='Brookfield Asset Management'
						date='Q4 2024 Letter to Shareholders'
						backgroundColor='#003366'
					/>
					<BaseHighlightCard
						title='Motley Fool Money'
						subTitle='Podcast'
						date="Brookfield's Nick Goodman on Motley Fool Money Podcast"
						backgroundColor='#177AA4'
					/>
					<BaseHighlightCard
						title='Special Episode'
						subTitle='Understanding the Insurance Industry'
						date='Sachin Shah, Joy Banner & Michael'
						backgroundColor='#177AA4'
					/>
				</div>
			</div>
		</PagesLayout>
	);
};

export default WhoWeAre;
