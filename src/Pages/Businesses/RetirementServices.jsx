import { useState } from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';
import DefaultButton from '../../Components/Buttons/defaultButton';
import CountUp from 'react-countup';
import { PiHandshake } from 'react-icons/pi';
import { FaUsersRays } from 'react-icons/fa6';

const SectionHeader = ({
	title,
	textColor = '',
	fontSize = 'text-3xl md:text-4xl',
}) => (
	<div className='text-left mb-10'>
		<h1 className={`${fontSize} ${textColor} playscript`}>{title}</h1>
		<div className='w-16 h-1 bg-[#ff8200] mt-4'></div>
	</div>
);

// Reusable StatItem using CountUp for animated numbers
const StatItem = ({ prefix = '', value, suffix = '', label }) => (
	<div className='flex flex-col items-center justify-center px-3 py-4 text-center'>
		<div className='playscript text-lg md:text-xl leading-normal mb-1'>
			{prefix}
			<CountUp
				end={value}
				duration={2.5}
				separator=','
			/>
			{suffix}
		</div>
		<div className='text-sm md:text-base mt-1'>{label}</div>
	</div>
);

// Reusable DropdownMenu for navigation items with dropdown content
const DropdownMenu = ({ icon, text, children }) => {
	const [open, setOpen] = useState(false);
	return (
		<span
			className='relative flex items-center gap-1 cursor-pointer'
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}>
			{icon}
			<p className='text-sm md:text-base'>{text}</p>
			{open && (
				<div className='absolute top-full left-0 bg-white shadow-md w-56 z-10'>
					<div className='p-3'>{children}</div>
				</div>
			)}
		</span>
	);
};

// Reusable component for insight sections using background images with overlay text
const InsightSection = ({ imageSrc, title, description }) => (
	<div
		className='relative h-64 md:h-96 bg-cover bg-center shadow-sm w-full'
		style={{ backgroundImage: `url(${imageSrc})` }}>
		<div className='absolute inset-0 bg-opacity-50 flex flex-col justify-center p-4 md:p-6 gap-4'>
			<h2 className='text-2xl md:text-3xl playscript text-white leading-[50px]'>
				{title}
			</h2>
			<div className='w-16 h-1 bg-[#ff8200]'></div>
			<p className='text-sm md:text-base mt-4 text-white leading-6'>
				{description}
			</p>
			<div>
				<DefaultButton
					text='Learn More'
					arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
					link='#'
					textColor='#FFFFFF'
					borderColor='#FFFFFF'
					hoverOverlayColor='rgba(255, 255, 255, 0.2)'
				/>
			</div>
		</div>
	</div>
);

// Reusable HighlightCard for news articles
const HighlightCard = ({
	source,
	title,
	icon,
	bgColor = 'bg-[#0f3557]',
	iconBgColor = 'bg-[#0f3557]',
}) => (
	<div className='h-full flex flex-col'>
		{icon && (
			<div className={`${iconBgColor} p-8 flex items-center justify-center`}>
				<div className='text-blue-300 w-24 h-24'>{icon}</div>
			</div>
		)}
		<div className={`${bgColor} text-white p-8 h-full flex flex-col`}>
			{source && (
				<span className='text-sm uppercase mb-4 font-semibold text-blue-300'>
					{source}
				</span>
			)}
			<h3 className='text-xl md:text-2xl font-medium mb-4'>{title}</h3>
		</div>
	</div>
);

// Data for insight sections
const insightSections = [
	{
		imageSrc: '/Assets/Images/insurance-industry-podcast-2023.avif',
		title: 'Leaning into the Real Estate Rebound',
		description:
			'Explore our latest insights across global real estate markets, with outlooks from our business leaders.',
	},
	{
		imageSrc: '/Assets/Images/CanaryWharfEstate.avif',
		title: 'Investing in the Infrastructure Supercycle',
		description:
			'Explore our latest insights on the macro forces driving infrastructure development.',
	},
];

// Data for highlights section
const highlightCards = [
	{
		source: 'THE TIMES',
		title: 'Brookfield eyes UK pensions risk deals',
		icon: (
			<svg
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M20 20 L80 20 L80 80 L20 80 Z'
					stroke='currentColor'
					strokeWidth='3'
					fill='none'
				/>
				<path
					d='M35 35 L65 35 M35 45 L65 45 M35 55 L65 55 M35 65 L65 65'
					stroke='currentColor'
					strokeWidth='3'
				/>
			</svg>
		),
		bgColor: 'bg-white',
		iconBgColor: 'bg-[#0f3557]',
	},
	{
		source: 'BLOOMBERG',
		title: 'Brookfield Explores Using Insurance Arm to Adopt Berkshire Model',
		icon: (
			<svg
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M20 20 L80 20 L80 80 L20 80 Z'
					stroke='currentColor'
					strokeWidth='3'
					fill='none'
				/>
				<path
					d='M30 30 L70 30 M30 40 L70 40 M30 50 L70 50 M30 60 L70 60 M30 70 L70 70'
					stroke='currentColor'
					strokeWidth='3'
				/>
			</svg>
		),
	},
	{
		source: 'VIDEO',
		title: 'Brookfield Wealth Solutions: Closing the Retirement Savings Gap',
		icon: (
			<svg
				viewBox='0 0 100 100'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<rect
					x='15'
					y='20'
					width='70'
					height='55'
					rx='5'
					stroke='currentColor'
					strokeWidth='3'
					fill='none'
				/>
				<path
					d='M45 40 L60 50 L45 60 Z'
					fill='currentColor'
				/>
			</svg>
		),
	},
];

// Reusable NavBar component
const NavBar = () => (
	<div className='bg-[#f8f8f8] h-14 pl-3 md:pl-28'>
		<div className='flex justify-between items-center h-full'>
			<div className='border-b-2 border-blue-600'>
				<p className='py-3 font-medium text-sm md:text-base'>Overview</p>
			</div>
			<div className='flex gap-4 md:gap-20 bg-[#e8eff6] h-full px-3'>
				<DropdownMenu
					icon={<PiHandshake className='text-lg' />}
					text='Invest'>
					<p className='text-gray-600 text-xs mb-1'>
						Publicly Listed Vehicles:
					</p>
					<p className='font-medium text-blue-800 text-sm'>
						Brookfield Wealth Solutions
					</p>
				</DropdownMenu>
				<span className='flex items-center gap-1 cursor-pointer'>
					<FaUsersRays className='text-lg' />
					<p className='text-sm md:text-base'>Leadership</p>
				</span>
			</div>
		</div>
	</div>
);

const RetirementServices = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/insurance-header-edit-1.avif'
			heroHeading='Retirement Services'>
			{/* Navigation */}
			<section>
				<NavBar />
			</section>

			{/* Main Content Section */}
			<section className='px-3 md:px-28 py-6 md:py-16'>
				<div className='max-w-3xl mb-14'>
					<h2 className='text-2xl md:text-3xl playscript leading-[36px] mb-2'>
						We help individuals gain financial certainty and secure reliable
						income with a broad range of retirement products.
					</h2>
					<p className='text-2xl md:text-3xl playscript leading-[36px] mb-6'>
						As an experienced owner/operator with a value-based approach to
						investing, our goals align with the long-term promises insurers make
						to policyholders.
					</p>
				</div>

				{/* Stat Section */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
					<div className='border-t border-[#55565a] pt-4'>
						<p className='text-[#3a7bce] font-semibold text-base mb-1'>
							INSURANCE ASSETS
						</p>
						<h3 className='text-3xl md:text-4xl text-[#0f3557] font-light leading-[60px]'>
							$
							<CountUp
								end={118}
								duration={2.5}
								separator=','
							/>
							B
						</h3>
					</div>
					<div className='border-t border-[#55565a] pt-4'>
						<p className='text-[#3a7bce] font-semibold text-base mb-1'>
							OPERATING PROFESSIONALS
						</p>
						<h3 className='text-3xl md:text-4xl text-[#0f3557] font-light leading-[60px]'>
							<CountUp
								end={4000}
								duration={2.5}
								separator=','
							/>
						</h3>
					</div>
					<div className='border-t border-[#55565a] pt-4'>
						<p className='text-[#3a7bce] font-semibold text-base mb-1'>
							INSURANCE COMPANIES GLOBALLY
						</p>
						<h3 className='text-3xl md:text-4xl text-[#0f3557] font-light leading-[60px]'>
							A- rating or better
						</h3>
					</div>
				</div>

				{/* Insight Sections */}
				<div className='w-full mt-16'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{insightSections.map((section, idx) => (
							<div
								key={idx}
								className='relative'>
								<InsightSection
									imageSrc={section.imageSrc}
									title={section.title}
									description={section.description}
								/>
							</div>
						))}
					</div>
				</div>

				{/* partners */}
				<div className='mt-16'>
					<div>
						<SectionHeader title='Our Insurance Companies' />
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl'>
						<div>
							<img
								src='/Assets/Images/AE_Logo_09.22.17_3C_294-fullname-portrait-01.png'
								alt='Argo Insurance'
								className='w-75'
							/>
						</div>
						<div>
							<img
								src='/Assets/Images/AN-Logo_Stacked_586x336px_0.png'
								alt='american national'
								className='w-75'
							/>
						</div>
						<div>
							<img
								src='/Assets/Images/Argo-Group-Logo_RGB-586x336px_0.avif'
								alt='argo groups'
								className='w-75'
							/>
						</div>
					</div>
				</div>

				{/* Highlights Section */}
				<div className='w-full mt-16 mb-16'>
					<h2 className='text-2xl md:text-3xl mb-10 text-[#0f3557] font-medium'>
						HIGHLIGHTS
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{highlightCards.map((card, idx) => (
							<div
								key={idx}
								className='h-full'>
								<HighlightCard
									source={card.source}
									title={card.title}
									icon={card.icon}
									bgColor={card.bgColor || 'bg-[#0f3557]'}
									iconBgColor={card.iconBgColor || 'bg-[#0f3557]'}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default RetirementServices;
