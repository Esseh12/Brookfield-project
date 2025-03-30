import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FeatureContent } from '../NavbarDropdown';

const PagesLayout = ({ heroImage, heroHeading, heroSubheading, children }) => {
	// Scroll to top when the component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Define navItems to be passed to Navbar with proper rightContent for dropdowns
	const navItems = [
		{
			label: 'About Us',
			href: '#',
			dropdownItems: [
				{ label: 'Who We Are', href: '/about-us/who-we-are' },
				{ label: 'Global Presence', href: '/about-us/global-presence' },
				{ label: 'Leadership', href: '/about-us/leadership' },
			],
			rightContent: (
				<FeatureContent
					image='/Assets/Images/brookfield-logo-nav-icon.avif'
					title='About Tamsey Finance Inc'
					description='Learn about our heritage, values, and global impact in the financial industry.'
					linkText='Our History'
					linkUrl='/about-us/history'
				/>
			),
		},
		{
			label: 'Responsibility',
			href: '#',
			dropdownItems: [
				{ label: 'Overview', href: '/responsibility' },
				{
					label: 'Sustainability Report',
					href: '/responsibility/2023-sustainability-report',
				},
				{
					label: 'Our Net Zero Commitment',
					href: '/responsibility/brookfields-net-zero-commitment',
				},
				{
					label: 'Our Workplace',
					href: '/responsibility/our-workplace',
				},
				{
					label: 'Sustainabilty Resources',
					href: '/responsibility/sustainability-resources',
				},
			],
			rightContent: (
				<FeatureContent
					image='/Assets/Images/Report-Cover-Photo.avif'
					title='2023 Sustainability Report'
					description='Learn about our heritage, values, and global impact in the financial industry.'
					linkText='View Now'
					linkUrl='/about-us/history'
				/>
			),
		},
		{
			label: 'Businesses',
			href: '/businesses',
			dropdownItems: [
				{ label: 'Investment Banking', href: '/businesses/investment-banking' },
				{ label: 'Asset Management', href: '/businesses/asset-management' },
				{ label: 'Wealth Management', href: '/businesses/wealth-management' },
			],
			rightContent: (
				<FeatureContent
					title='Our Business Divisions'
					description='Discover our comprehensive suite of financial services and solutions.'
					linkText='Explore All Services'
					linkUrl='/businesses/all'
				/>
			),
		},
		{ label: 'Careers', href: '/careers' },
		{
			label: 'News & Insights',
			href: '/news',
			dropdownItems: [
				{ label: 'Press Releases', href: '/news/press-releases' },
				{ label: 'Research', href: '/news/research' },
				{ label: 'Thought Leadership', href: '/news/thought-leadership' },
			],
			rightContent: (
				<FeatureContent
					title='Latest Insights'
					description='Stay up to date with our latest financial insights and market analysis.'
					linkText='View All Insights'
					linkUrl='/news/all'
				/>
			),
		},
		{
			label: 'Investors',
			href: '/investors',
			dropdownItems: [
				{ label: 'Financial Results', href: '/investors/financial-results' },
				{ label: 'Annual Reports', href: '/investors/annual-reports' },
				{ label: 'Investor Events', href: '/investors/events' },
			],
			rightContent: (
				<FeatureContent
					title='Investor Relations'
					description='Access our financial information, earnings reports, and shareholder resources.'
					linkText='Investor Resources'
					linkUrl='/investors/resources'
				/>
			),
		},
		{ label: 'LP Login', href: '/login' },
	];

	return (
		<>
			<Navbar
				navItems={navItems}
				logoText='Tamsey Finance Inc'
			/>

			{/* Hero Section */}
			<section className='relative w-full h-[50vh] overflow-hidden bg-[#f5f5f5]'>
				<img
					src={heroImage}
					alt={heroHeading || 'Page Hero'}
					loading='lazy'
					className='object-cover w-full h-full inset-0 bg-gradient-to-b from-black/100 to-black/70'
					style={{ filter: 'brightness(0.7)' }}
				/>
				<div className='absolute inset-0 bg-opacity-30 flex items-center justify-center'>
					<div className='text-center px-4 sm:px-6'>
						<h1 className='playscript text-white text-2xl sm:text-3xl md:text-[54px] leading-[72px]'>
							{heroHeading}
						</h1>
						{heroSubheading && (
							<p className='mt-2 text-white text-sm sm:text-base md:text-lg'>
								{heroSubheading}
							</p>
						)}
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section>{children}</section>

			<Footer />
		</>
	);
};

export default PagesLayout;
