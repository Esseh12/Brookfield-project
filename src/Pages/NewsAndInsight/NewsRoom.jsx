import React, { useState, useRef, useEffect, useCallback } from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// List of countries (can be updated as needed)
const countries = [
	'United States',
	'Europe',
	'Asia Pacific',
	'India & Middle East',
	'Brazil',
	'Canada',
];

// Mini component to render the list of countries
const CountryList = ({ className = '' }) => (
	<div className={className}>
		{countries.map((country, idx) => (
			<p
				key={idx}
				className='text-xs sm:text-sm leading-5 py-1'>
				{country}
			</p>
		))}
	</div>
);

// MobileMenu component with smooth animation and outside-click detection
const MobileMenu = ({ isOpen, onClose }) => {
	const menuRef = useRef(null);

	// Close menu when clicking outside
	const handleClickOutside = useCallback(
		(e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);

	return (
		<div
			ref={menuRef}
			className={`absolute z-10 top-full left-0 right-0 bg-white text-[#0f3557] text-sm shadow-lg transition-transform duration-300 ease-in-out overflow-hidden ${
				isOpen
					? 'translate-y-0 opacity-100'
					: '-translate-y-5 opacity-0 pointer-events-none'
			}`}>
			<div className='p-4'>
				<CountryList />
			</div>
		</div>
	);
};

// News Item component for the media highlights
const NewsItem = ({ image, category, title, date, link }) => (
	<div className='mb-8 md:mb-12'>
		<div className='flex flex-col md:flex-row gap-6'>
			<div className='w-full md:w-1/3 lg:w-1/4'>
				<img
					src={image}
					alt={title}
					className='w-full object-cover'
				/>
			</div>
			<div className='w-full md:w-2/3 lg:w-3/4'>
				{category && (
					<p className='text-[12px] text-[#417094] leading-4 uppercase font-medium mb-2'>
						{category}
					</p>
				)}
				<h3 className='text-base text-[#0f3557] font-semibold mb-2 leading-[27px] hover:text-[#417094] hover:underline'>
					<a href={link}>{title}</a>
				</h3>
				<p className='text-[10px] text-[#55565A] mb-3 leading-4'>{date}</p>
				<a
					href={link}
					className='inline-flex text-sm leading-5 font-semibold items-center text-[#3a77c3] hover:underline'>
					Read More <FiArrowRight className='ml-2' />
				</a>
			</div>
		</div>
	</div>
);

// Quick Links component
const QuickLinks = ({ links }) => (
	<div className='mb-8'>
		<h2 className='playscript text-2xl text-[#0f3557] font-medium mb-6 leading-8'>
			Quick Links
		</h2>
		<div className='flex flex-col space-y-3'>
			{links.map((link, idx) => (
				<a
					key={idx}
					href={link.url}
					className='text-[#3A78c3] text-sm hover:underline'>
					{link.title}
				</a>
			))}
		</div>
	</div>
);

// In The News Article component
const NewsArticle = ({ category, title, date, isFeatured = false }) => (
	<div className={`pb-6 mb-6 ${!isFeatured ? 'border-b border-gray-200' : ''}`}>
		<div className='flex flex-col'>
			<p className='text-[12px] text-[#417094] leading-4 uppercase font-medium mb-1'>
				{category}
			</p>
			<h3 className='text-base text-[#0f3557] font-semibold mb-2 leading-[1.4] hover:text-[#417094] hover:underline'>
				<a href='#'>{title}</a>
			</h3>
			<p className='text-[10px] text-[#55565A] leading-4'>{date}</p>
		</div>
	</div>
);

// Featured News Article with image
const FeaturedNewsArticle = ({ image, label, title, date }) => (
	<div className='flex flex-col md:flex-row mb-10'>
		<div className='w-full md:w-2/5 lg:w-1/3'>
			<img
				src={image}
				alt={title}
				className='w-full object-cover h-full'
			/>
		</div>
		<div className='w-full md:w-3/5 lg:w-2/3 bg-[#f5f7fa] p-4 md:p-6 flex flex-col justify-center'>
			<p className='text-[14px] font-semibold text-[#0f3557] uppercase mb-2'>
				{label}
			</p>
			<h3 className='text-xl text-[#0f3557] font-semibold mb-2 hover:text-[#417094] hover:underline'>
				<a href='#'>{title}</a>
			</h3>
			<p className='text-[12px] text-[#55565A]'>{date}</p>
		</div>
	</div>
);

const NewsRoom = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	// Sample news items data
	const newsItems = [
		{
			image: '/Assets/Images/the knowledge project 2.avif',
			category: 'THE KNOWLEDGE PROJECT',
			title:
				'Bruce Flatt on The Knowledge Project: The Trillion-Dollar Blueprint',
			date: 'April 1, 2025',
			link: '#',
		},
		{
			image: '/Assets/Images/33352-shareholder-letter-v1.avif',
			category: '',
			title: 'March 2025 Update',
			date: 'March 20, 2025',
			link: '#',
		},
		{
			image: '/Assets/Images/33352-shareholder-letter-v1.avif',
			category: 'BLOOMBERG',
			title: "Tamsey's Private Equity Chief Enjoys Busiest Start of a Year",
			date: 'March 17, 2025',
			link: '#',
		},
	];

	// Sample quick links
	const quickLinks = [
		{
			title: '2023 BAM Sustainability Report',
			url: '#',
		},
		{
			title: '2024 BN Annual Report',
			url: '#',
		},
	];

	// Sample In The News data
	const inTheNewsArticles = [
		{
			category: 'THE KNOWLEDGE PROJECT',
			title:
				'Bruce Flatt on The Knowledge Project: The Trillion-Dollar Blueprint',
			date: 'April 1, 2025',
		},
		{
			category: 'BLOOMBERG',
			title:
				"Tamsey's Sikander Rashid Talks AI on 'Bloomberg: The Opening Trade.'",
			date: 'March 27, 2025',
		},
		{
			category: 'VIDEO',
			title: 'Tamsey Wealth Solutions: Closing the Retirement Savings Gap',
			date: 'March 5, 2025',
		},
	];

	// Sample Press Releases
	const pressReleases = [
		{
			date: 'April 1, 2025',
			title:
				'Tamsey Renewable Announces Dividend Rates On Its Series 1 and Series 2 Preference Shares',
		},
		{
			date: 'April 1, 2025',
			title:
				'Tamsey Asset Management and Angel Oak to Enter into Strategic Partnership',
		},
		{
			date: 'March 24, 2025',
			title: 'Tamsey Corporation Completes Annual Filings',
		},
		{
			date: 'March 22, 2025',
			title: 'Tamsey Infrastructure Completes Annual Filings',
		},
		{
			date: 'March 21, 2025',
			title:
				'Tamsey Infrastructure Announces Sale of NGPL Amidst Strong Capital Recycling Momentum',
		},
		{
			date: 'March 24, 2025',
			title:
				'Tamsey Corporation Announces Results of Conversion of its Series 38 Preferred Shares',
		},
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/newsroom3-hero.avif'
			heroHeading='Newsroom'>
			{/* Header Section with Countries / Mobile Menu */}
			<section>
				<div className='relative bg-[#0f3557] text-white p-4 px-6 sm:px-12 md:px-24 flex justify-between items-center'>
					<h1 className='playscript font-medium text-lg sm:text-[20px] leading-[26px]'>
						Media Inquiries
					</h1>

					{/* Desktop view: show list of countries */}
					<div className='hidden lg:flex gap-6'>
						<CountryList className='flex gap-6' />
					</div>

					{/* Mobile view: show hamburger menu */}
					<div className='lg:hidden'>
						<button
							onClick={toggleMenu}
							aria-label='Toggle country menu'>
							{menuOpen ? (
								<FaTimes
									size={20}
									className='text-[#ababab]'
								/>
							) : (
								<FaBars size={20} />
							)}
						</button>
					</div>

					{/* Mobile menu dropdown */}
					<MobileMenu
						isOpen={menuOpen}
						onClose={closeMenu}
					/>
				</div>
			</section>

			{/* Media Highlights Section */}
			<section className='py-12 sm:py-16 px-6 sm:px-12 md:px-24'>
				<div className='flex flex-col lg:flex-row lg:gap-12'>
					<div className='w-full lg:w-2/3'>
						<h2 className='playscript text-2xl sm:text-3xl leading-10 text-[#0f3557] mb-8 md:mb-10'>
							Media Highlights
						</h2>
						{/* News Items */}
						<div>
							{newsItems.map((item, idx) => (
								<NewsItem
									key={idx}
									image={item.image}
									category={item.category}
									title={item.title}
									date={item.date}
									link={item.link}
								/>
							))}
						</div>
					</div>
					{/* Quick Links Sidebar */}
					<div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
						<QuickLinks links={quickLinks} />
					</div>
				</div>
			</section>

			{/* In The News Section */}
			<section className='py-12 sm:py-16 px-6 sm:px-12 md:px-24'>
				<div className='flex flex-col'>
					<div className='flex justify-between items-center mb-8'>
						<h2 className='playscript text-2xl sm:text-3xl leading-10 text-[#0f3557]'>
							In the News
						</h2>
						<a
							href='#'
							className='text-[#3A78c3] hover:underline text-sm font-medium'>
							See All News
						</a>
					</div>
					<div className='flex flex-col lg:flex-row lg:gap-12'>
						<div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
							{/* Featured Article */}
							<FeaturedNewsArticle
								image='/Assets/Images/33352-shareholder-letter-v1.avif'
								label='LETTER'
								title='March 2025 Update'
								date='March 20, 2025'
							/>
						</div>
						<div className='w-full lg:w-1/2'>
							{/* News Articles List */}
							{inTheNewsArticles.map((article, idx) => (
								<NewsArticle
									key={idx}
									category={article.category}
									title={article.title}
									date={article.date}
									isFeatured={idx === inTheNewsArticles.length - 1}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Press Releases Section */}
			<section className='py-12 sm:py-16 px-6 sm:px-12 md:px-24'>
				<div className='flex flex-col'>
					<div className='flex justify-between items-center mb-8'>
						<h2 className='playscript text-2xl sm:text-3xl leading-10 text-[#0f3557]'>
							Press Releases
						</h2>
						<a
							href='#'
							className='text-[#3A78c3] hover:underline text-sm font-medium'>
							See All Press Releases
						</a>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
						{pressReleases.map((release, idx) => (
							<div
								key={idx}
								className='border-b border-gray-200 pb-6'>
								<p className='text-[10px] text-[#55565A] mb-2 leading-4'>
									{release.date}
								</p>
								<h3 className='text-base text-[#0f3557] font-semibold leading-6 hover:text-[#417094] hover:underline'>
									<a href='#'>{release.title}</a>
								</h3>
							</div>
						))}
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default NewsRoom;
