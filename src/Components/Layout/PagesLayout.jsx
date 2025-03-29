import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PagesLayout = ({ heroImage, heroHeading, heroSubheading, children }) => {
	// Scroll to top when the component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Define navItems to be passed to Navbar
	const navItems = [
		{
			label: 'About Us',
			href: '#',
			dropdownItems: [
				{ label: 'Who We Are', href: '/about-us/who-we-are' },
				{ label: 'Global Presence', href: '/about-us/global-presence' },
				{ label: 'Leadership', href: '/about-us/leadership' },
			],
		},
		{ label: 'Responsibility', href: '/responsibility' },
		{ label: 'Businesses', href: '/businesses' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'News & Insights', href: '/news' },
		{ label: 'Investors', href: '/investors' },
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
					style={{ brightness: '0.9' }}
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
