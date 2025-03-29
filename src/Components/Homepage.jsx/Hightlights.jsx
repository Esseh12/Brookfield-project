import React from 'react';
import { Link } from 'react-router-dom';

/** Reusable card for Shareholder Letter (two-box layout) */
function ShareholderLetterCard() {
	return (
		<div className='flex flex-col md:flex-row border border-gray-200 bg-white'>
			{/* Left sub-box: Image (Navy background) */}
			<div className='bg-[#0f3557] text-white p-4 flex items-center justify-center gap-3 w-full md:w-2/3'>
				<img
					src='https://www.brookfield.com/sites/default/files/styles/content_card_large/public/images/2025-03/33352-shareholder-letter-v1.jpg?h=e06b8d8c&itok=LDLvYqza'
					alt='Shareholder Letter'
					className='object-cover w-full h-full'
				/>
			</div>
			{/* Right sub-box: Text content */}
			<div className='group flex flex-col justify-start items-start bg-white text-[#0f3557] p-4 w-full md:w-1/3 md:ml-3'>
				<p className='text-xs font-bold leading-5'>LETTER</p>
				<Link
					to='https://bn.brookfield.com/reports-filings/letters-shareholders/march-2025-update-letter-to-shareholders'
					className='mt-4 text-lg font-semibold leading-7 transition-colors duration-300 group-hover:underline group-hover:text-[#417094]'>
					March 2025
				</Link>
				<Link
					to='https://bn.brookfield.com/reports-filings/letters-shareholders/march-2025-update-letter-to-shareholders'
					className='text-lg font-semibold leading-7 transition-colors duration-300 group-hover:underline group-hover:text-[#417094]'>
					Update
				</Link>
			</div>
		</div>
	);
}

/** Reusable media card component for Interview/Podcast items */
function MediaCard({ imageSrc, alt, type, link, title, icon }) {
	return (
		<div className='flex-1 border border-gray-200 bg-white flex flex-col'>
			{/* Image */}
			<img
				src={imageSrc}
				alt={alt}
				className='object-cover w-full'
			/>
			{/* Text box */}
			<div className='p-4 sm:p-6 flex flex-col gap-2 group'>
				<p className='font-bold text-[#417094] text-xs sm:text-sm'>{type}</p>
				<Link
					to={link}
					className='font-semibold text-sm sm:text-base md:text-lg text-[#0f3557] leading-snug flex items-center gap-2 transition-colors duration-300 group-hover:text-[#417094] group-hover:underline'>
					{title}
					{icon && <span className='text-2xl sm:text-3xl'>{icon}</span>}
				</Link>
			</div>
		</div>
	);
}

const Highlights = () => {
	return (
		<section className='bg-[#f8f8f8] min-h-screen p-4 sm:p-6 md:p-16 flex flex-col md:flex-row gap-12'>
			{/* Left Column: HIGHLIGHTS */}
			<div className='flex-1'>
				<h2 className='text-base sm:text-lg md:text-xl leading-[27px] text-[#0f3557] font-bold mb-4'>
					HIGHLIGHTS
				</h2>
				<div className='grid grid-cols-1 gap-4'>
					{/* Card 1: Shareholder Letter */}
					<ShareholderLetterCard />
					{/* Card 2: Two Media Cards for Interview & Podcast */}
					<div className='flex flex-col md:flex-row gap-5'>
						<MediaCard
							imageSrc='/Assets/Images/bruce-bloomberg-tv-feb-2025.avif'
							alt='Bruce on Bloomberg TV'
							type='INTERVIEW'
							link='https://www.youtube.com/watch?v=n0NmcJxCPIs&feature=youtu.be'
							title='Brookfield CEO Bruce Flatt on The Pulse with Francine Lacqua'
						/>
						<MediaCard
							imageSrc='/Assets/Images/motley-fool-2_0.avif'
							alt='Motley Fool Podcast'
							type='PODCAST'
							link='https://www.fool.com/investing/2024/10/01/metas-new-specs/'
							title="Brookfield's Nick Goodman on Motley Fool Money Podcast"
						/>
					</div>
					<Link
						to='/news-insights/newsroom'
						className='mt-5 block text-base sm:text-lg font-semibold leading-6 text-[#0f3557] transition-colors duration-300 hover:underline hover:text-[#417094]'>
						See More
					</Link>
				</div>
			</div>
			{/* Right Column: FEATURED NEWS */}
			<div className='flex-1'>
				<h2 className='text-base sm:text-lg md:text-xl leading-[27px] text-[#0f3557] font-bold mb-8'>
					FEATURED NEWS
				</h2>
				<ul className='space-y-4'>
					<li className='border-t-2 border-[#0f3557] py-6 flex flex-col gap-3'>
						<Link
							to='/news/march-2025-update'
							className='text-[#0f3557] transition-colors duration-300 hover:text-[#417094] hover:underline text-base'>
							March 2025 Update
						</Link>
						<p className='text-gray-500 text-xs'>March 25, 2025</p>
					</li>
					<li className='border-t-2 border-[#0f3557] py-6 flex flex-col gap-3'>
						<p className='text-xs uppercase text-gray-500 font-semibold'>
							Bloomberg
						</p>
						<Link
							to='/news/private-equity-chief'
							className='text-[#0f3557] transition-colors duration-300 hover:text-[#417094] hover:underline text-sm'>
							Brookfield's Private Equity Chief Enjoys Busiest Start of a Year
						</Link>
						<p className='text-gray-500 text-xs'>March 20, 2025</p>
					</li>
					<li className='border-t-2 border-[#0f3557] py-6 flex flex-col gap-3'>
						<p className='text-xs uppercase text-gray-500 font-semibold'>
							Bloomberg
						</p>
						<Link
							to='/news/insurance-arm'
							className='text-[#0f3557] transition-colors duration-300 hover:text-[#417094] hover:underline text-sm'>
							Brookfield Explores Using Insurance Arm to Adopt Berkshire Model
						</Link>
						<p className='text-gray-500 text-xs'>March 15, 2025</p>
					</li>
					<li className='border-t-2 border-[#0f3557] py-6 flex flex-col gap-3'>
						<p className='text-xs uppercase text-gray-500 font-semibold'>
							THE TIMES
						</p>
						<Link
							to='/news/uk-pensions-risk-deals'
							className='text-[#0f3557] transition-colors duration-300 hover:text-[#417094] hover:underline text-sm'>
							Brookfield eyes UK pensions risk deals
						</Link>
						<p className='text-gray-500 text-xs'>March 4, 2025</p>
					</li>
					<li className='border-t-2 border-[#0f3557] py-6 flex flex-col gap-3'>
						<p className='text-xs uppercase text-gray-500 font-semibold'>
							Institutional Investor
						</p>
						<Link
							to='/news/successor-choice'
							className='text-[#0f3557] transition-colors duration-300 hover:text-[#417094] hover:underline text-sm'>
							Bruce Flatt’s Choice of Successor Isn’t Changing Course or Slowing
							Down
						</Link>
						<p className='text-gray-500 text-xs'>February 24, 2025</p>
					</li>
					<Link
						to='/news-insights/newsroom/featured-news'
						className='block mt-5 text-base sm:text-lg font-semibold leading-6 text-[#0f3557] transition-colors duration-300 hover:underline hover:text-[#417094]'>
						See All News
					</Link>
				</ul>
			</div>
		</section>
	);
};

export default Highlights;
