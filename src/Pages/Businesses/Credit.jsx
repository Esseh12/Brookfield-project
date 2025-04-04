import PagesLayout from '../../Components/Layout/PagesLayout';
import QuickNav from './Components/QuickNavs';
import OverviewSection from './Components/Overview';
import ReusableAccordion from '../../Components/Accordion/Accordion';
import { GiPlayButton } from 'react-icons/gi';

const Credit = () => {
	// Text strings for the left and right sections
	const leftText =
		'As one of the world’s largest and most experienced credit managers globally, we deliver flexible, specialized capital solutions to borrowers and seek to achieve attractive risk-adjusted returns for our investors. Our credit strategies include our longstanding Brookfield direct lending funds and our marquee partnerships with leading credit managers.';
	const rightText =
		'Our global reach and access to high quality opportunities originated through the Brookfield ecosystem enables us to meet the evolving needs of credit borrowers and investors globally.';

	// Array of stat objects
	const stats = [
		{ prefix: '$', value: 317, suffix: 'B', label: 'Assets Under Management' },
		{ value: 647, label: 'INVESTMENT PROFESSIONALS' },
		{ value: 30, label: 'YEARS IN BUSINESS' },
	];

	// Reusable header component
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

	const principles = [
		{
			title: 'Real Estate Credit',
			details: [
				'Utilizing deep market insights to provide finance capital to hundreds of counterparties globally',
			],
		},
		{
			title: 'Asset Based Credit',
			details: [
				'Unique asset-based and specialty finance assets, seeking to offer diversification and premium spreads',
			],
		},
		{
			title: 'Infrastructure & Renewable Credit',
			details: [
				'Leveraging operational expertise, providing lending solutions across data, transport, utilities, and midstream sectors',
			],
		},
		{
			title: 'Corporate Credit',
			details: [
				'Bespoke financings tailored for growth, stabilization, liquidity access, and solving complex financial needs',
			],
		},
		{
			title: 'Liquid Credit',
			details: [
				'Investing across a variety of public debt strategies to taking advantage of market opportunities across the credit spectrum',
			],
		},
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/05-our_approach_hero_desktop.avif'
			heroHeading='Credit'>
			<section>
				<QuickNav />
				<OverviewSection
					leftText={leftText}
					rightText={rightText}
					stats={stats}
				/>
				<div className='container mx-auto px-4 md:px-6 py-16'>
					<SectionHeader title='Our Strategies' />
					{/* Accordion list with reduced width */}
					<div className='space-y-4 max-w-3xl mr-auto'>
						{principles.map((principle, index) => (
							<ReusableAccordion
								key={index}
								subTitle={principle.subTitle}
								title={principle.title}
								accordionClassName=''
								summaryClassName='hover:bg-blue-100'
								detailsClassName='bg-white'>
								<div className='pl-8'>
									{principle.details.map((detail, idx) => (
										<p
											key={idx}
											className='text-[#55565A] mt-2 whitespace-pre-line'>
											{detail}
										</p>
									))}
								</div>
							</ReusableAccordion>
						))}
					</div>
				</div>

				<div className='bg-[#0f3557]'>
					<div className='container mx-auto px-4 md:px-6 py-16 flex flex-col md:flex-row gap-4'>
						<div className='flex-1'>
							<SectionHeader
								title='Our Strategies'
								textColor='text-[#ffffff]'
							/>
							<p className='text-white leading-[27px] text-[20px]'>
								We focus on parts of the credit market where we can offer
								differentiated solutions to investors, powered by our decades of
								experience, deep market insights, strong relationships, and
								world-class investment teams.
							</p>
						</div>

						<div className='flex-1 relative'>
							<img
								className='bg-no-repeat bg-cover w-full h-full'
								src='/Assets/Images/nailah_credit_video.avif'
								alt='nailah credit video'
							/>

							{/* Play button */}
							<button className='absolute inset-0 flex items-center justify-center'>
								<div className='bg-[#ff8200] w-16 h-16 rounded-full flex items-center justify-center shadow-lg'>
									<GiPlayButton className='text-white h-6 w-6' />
								</div>
							</button>
						</div>
					</div>
				</div>

				<div className='container mx-auto px-4 md:px-6 py-16 flex flex-col gap-4'>
					<SectionHeader title='Our Partners' />
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						<img
							src='/Assets/Images/Oaktree-Logo-586x336px.avif'
							alt='Oak Tree Logo'
							className='object-contain'
						/>
						<img
							src='/Assets/Images/Castlelake_Logo.avif'
							alt='Castle Lake Logo'
							className='object-contain'
						/>
						<img
							src='/Assets/Images/lcm-smaller.avif'
							alt='Lcm Partners'
							className='object-contain'
						/>
						<img
							src='/Assets/Images/Primary-Wave-Logo_586x336px.avif'
							alt='Primary Wave'
							className='object-contain'
						/>
						<img
							src='/Assets/Images/17capital.avif'
							alt='17 Capital'
							className='object-contain'
						/>
					</div>
				</div>

				<div className='bg-[#f2f5f8]'>
					<div className='container mx-auto px-4 md:px-6 py-16 flex flex-col gap-8'>
						<h2 className='font-bold text-[20px] leading-[27px]'>
							RECENT NEWS
						</h2>
						{/* Responsive grid: 1 column on small, 2 on medium, 3 on large */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Example of a responsive news item */}
							{[1, 2, 3].map((item) => (
								<div
									key={item}
									className='bg-white flex flex-col md:flex-row'>
									<div className='bg-[#0f3557] py-6 flex items-end pl-4 pr-6 md:w-1/2'>
										<img
											className='w-[75%] mx-auto'
											src='/Assets/Images/no-img-icon-1-light.svg'
											alt='Book svg'
										/>
									</div>
									<div className='px-10 py-6 md:w-1/2'>
										<p className='font-semibold text-[#417094] text-[12px] leading-[14px]'>
											The Wall Street Journal
										</p>
										<h2 className='font-semibold leading-[27px] text-[20px] hover:text-[#417094] hover:underline'>
											Brookfield Credit Chief Bullish on Future Growth of
											Asset-Based Lending
										</h2>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default Credit;
