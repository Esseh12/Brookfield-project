import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FeatureContent } from '../NavbarDropdown';

const PagesLayout = ({
	heroImage,
	heroHeading,
	heroSubheading,
	heroChildren, // <-- NEW optional prop
	children,
}) => {
	// Scroll to top when the component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Define navItems for Navbar
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
					href: '/responsibility/tamseys-net-zero-commitment',
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
		{
			label: 'Careers',
			href: '#',
			dropdownItems: [
				{ label: 'Student Programs', href: '/careers/student-programs' },
				{
					label: 'Open Oppurtunities',
					href: '/careers/opportunities',
				},
				{
					label: 'Our Net Zero Commitment',
					href: '/responsibility/tamseys-net-zero-commitment',
				},
			],
		},
		{
			label: 'News & Insights',
			href: '',
			dropdownItems: [
				{ label: 'Insights', href: '/news-insights/insights' },
				{
					label: 'Podcast',
					href: '/news-insights/podcasts/brookfield-perspectives',
				},
				{ label: 'Thought Leadership', href: '/news/thought-leadership' },
			],
			rightContent: (
				<FeatureContent
					image='/Assets/Images/bn-annual-report-2024--tout.avif'
					title='BN 2024 Annual Report'
					linkText='View More'
					linkUrl='#'
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
			<section className='relative w-full h-[50vh] overflow-hidden bg-[#0d2d4a]'>
				{heroImage && (
					<img
						src={heroImage}
						alt={heroHeading || 'Page Hero'}
						loading='lazy'
						className='object-cover w-full h-full inset-0 bg-gradient-to-b from-black/100 to-black/70'
						style={{ filter: 'brightness(0.7)' }}
					/>
				)}

				{/* Overlay content */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='text-center px-4 sm:px-6'>
						{heroHeading && (
							<h1 className='playscript text-white text-2xl sm:text-3xl md:text-[54px] leading-[72px]'>
								{heroHeading}
							</h1>
						)}

						{heroSubheading && (
							<p className='mt-2 text-white text-sm max-w-4xl mx-auto'>
								{heroSubheading}
							</p>
						)}

						{/* NEW optional children in hero */}
						{heroChildren && <div className='mt-4'>{heroChildren}</div>}
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
