import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { MdSearch } from 'react-icons/md';

const Navbar = ({ children }) => {
	const [scrolled, setScrolled] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	// Track scroll position to toggle background/text color
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-50 transition-colors duration-300 ${
				scrolled
					? 'bg-white text-[#0f3557] shadow-md'
					: 'bg-transparent text-white'
			}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Navbar height */}
				<div className='flex items-center justify-between h-16'>
					{/* Left: Logo */}
					<div className='flex-shrink-0'>
						<Link to='/'>
							<Typography
								variant='h6'
								className={`font-bold text-xl ${
									scrolled ? 'text-primary' : 'text-light'
								}`}>
								Tamsey Finance Inc
							</Typography>
						</Link>
					</div>

					{/* Center: Nav Links passed as children */}
					<nav className='flex items-center space-x-4'>{children}</nav>

					{/* Right side: Language + Search */}
					<div className='flex items-center space-x-4'>
						{/* Language label */}
						<span className='hidden sm:block text-sm'>Language</span>

						{/* Search Icon / Search Bar */}
						<div className='relative transition-all duration-300'>
							{searchOpen ? (
								<div className='flex items-center border border-black rounded-md bg-white px-2 py-1'>
									{/* Orange search icon on the left */}
									<MdSearch
										className='text-orange border border-black rounded p-1 mr-2'
										size={20}
									/>

									<input
										type='text'
										placeholder='Search'
										className='placeholder-gray-400 text-primary text-sm outline-none w-32 sm:w-48'
									/>

									{/* X icon on the right */}
									<button
										onClick={() => setSearchOpen(false)}
										className='ml-2 focus:outline-none'>
										<svg
											className='h-4 w-4 text-orange'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</button>
								</div>
							) : (
								<button
									onClick={() => setSearchOpen(true)}
									className='transition-all duration-300 focus:outline-none'>
									{/* Default search icon (left of the navbar when closed) */}
									<MdSearch
										className={`${scrolled ? 'text-primary' : 'text-light'}`}
										size={22}
									/>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
