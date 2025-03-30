import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { MdSearch, MdMenu, MdClose } from 'react-icons/md';
import NavDropdown, { FeatureContent } from './NavbarDropdown';

const Navbar = ({ navItems = [], logo, logoText }) => {
	const [scrolled, setScrolled] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [hoveredItem, setHoveredItem] = useState(null);
	const searchInputRef = useRef(null);
	const hoverTimeoutRef = useRef(null);

	// Track scroll position to toggle background/text color
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Focus search input when search opens
	useEffect(() => {
		if (searchOpen && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [searchOpen]);

	// Close mobile menu when resizing to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && mobileMenuOpen) {
				setMobileMenuOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [mobileMenuOpen]);

	// Set body overflow when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileMenuOpen]);

	// Clean up any hover timeouts on unmount
	useEffect(() => {
		return () => {
			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current);
			}
		};
	}, []);

	const textColorClass = scrolled ? 'text-[#0f3557]' : 'text-white';

	// Process nav items to use with our two-column dropdown
	const processedNavItems = navItems.map((item) => {
		if (item.dropdownItems) {
			// Convert to the format our new NavDropdown expects
			return {
				...item,
				leftItems: item.dropdownItems,
				// Optional: set default right content if not provided
				rightContent: item.rightContent || (
					<FeatureContent
						title={`About ${item.label}`}
						description={`Learn more about our ${item.label.toLowerCase()} offerings and services.`}
						linkText='Learn More'
						linkUrl={item.href || '#'}
					/>
				),
			};
		}
		return item;
	});

	// Handle mouse enter for dropdown items
	const handleMouseEnter = (index) => {
		// Clear any existing timeout
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		// Set the hovered item immediately
		setHoveredItem(index);
	};

	// Handle mouse leave for dropdown items with a small delay
	const handleMouseLeave = () => {
		// Add a small delay before closing to improve UX
		hoverTimeoutRef.current = setTimeout(() => {
			setHoveredItem(null);
		}, 150);
	};

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white text-[#0f3557] shadow-md'
					: 'bg-transparent text-white'
			}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Desktop navbar */}
				<div className='flex items-center justify-between h-16'>
					{/* Left: Logo */}
					<div className='flex-shrink-0'>
						<Link to='/'>
							{logo ? (
								<img
									src={logo}
									alt='Logo'
									className='h-8 w-auto'
								/>
							) : (
								<Typography
									variant='h6'
									className={`font-bold text-xl ${textColorClass}`}>
									{logoText || 'Tamsey Finance Inc'}
								</Typography>
							)}
						</Link>
					</div>

					{/* Center: Nav Links - Hidden on mobile */}
					<nav className='hidden md:flex items-center space-x-1'>
						{processedNavItems.map((item, index) =>
							item.leftItems ? (
								<div
									key={index}
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}>
									<NavDropdown
										title={item.label}
										leftItems={item.leftItems}
										rightContent={item.rightContent}
										className={`${textColorClass} hover:opacity-80`}
										dropdownClassName='mt-2'
										leftItemClassName='text-gray-700 hover:text-blue-600'
										isOpen={hoveredItem === index}
										setIsOpen={(isOpen) => {
											if (isOpen) setHoveredItem(index);
											else setHoveredItem(null);
										}}
									/>
								</div>
							) : (
								<Link
									key={index}
									to={item.href}
									className={`px-3 py-2 rounded-md text-sm font-medium ${textColorClass} hover:opacity-80 transition-all`}>
									{item.label}
								</Link>
							)
						)}
					</nav>

					{/* Right side: Language + Search (desktop only) */}
					<div className='hidden md:flex items-center space-x-4'>
						{/* Language label */}
						<span className={`text-sm ${textColorClass}`}>Language</span>

						{/* Search Icon / Search Bar */}
						<div className='relative transition-all duration-300'>
							{searchOpen ? (
								<div className='flex items-center border border-black rounded-md bg-white px-2 py-1'>
									<MdSearch
										className='text-orange-500 border border-black rounded p-1 mr-2'
										size={20}
									/>
									<input
										ref={searchInputRef}
										type='text'
										placeholder='Search'
										className='placeholder-gray-400 text-[#0f3557] text-sm outline-none w-32 sm:w-48'
									/>
									<button
										onClick={() => setSearchOpen(false)}
										className='ml-2 focus:outline-none'>
										<MdClose className='h-4 w-4 text-orange-500' />
									</button>
								</div>
							) : (
								<button
									onClick={() => setSearchOpen(true)}
									className='transition-all duration-300 focus:outline-none'>
									<MdSearch
										className={textColorClass}
										size={22}
									/>
								</button>
							)}
						</div>
					</div>

					{/* Mobile menu button (visible on small screens) */}
					<button
						className='md:hidden focus:outline-none'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						<MdMenu
							className={textColorClass}
							size={24}
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay (slides down from top) */}
			<div
				className={`fixed top-0 left-0 w-full bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
					mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
				}`}>
				{/* Close Button */}
				<div className='flex items-center justify-between p-4 border-b'>
					<Typography
						variant='h6'
						className='font-bold text-[#0f3557]'>
						Menu
					</Typography>
					<button
						className='focus:outline-none'
						onClick={() => setMobileMenuOpen(false)}>
						<MdClose
							className='text-[#0f3557]'
							size={24}
						/>
					</button>
				</div>

				{/* Search Bar (mobile) */}
				<div className='p-4 border-b'>
					{searchOpen ? (
						<div className='flex items-center border border-black rounded-md bg-white px-2 py-1'>
							<MdSearch
								className='text-orange-500 border border-black rounded p-1 mr-2'
								size={20}
							/>
							<input
								ref={searchInputRef}
								type='text'
								placeholder='Search'
								className='placeholder-gray-400 text-[#0f3557] text-sm outline-none w-full'
							/>
							<button
								onClick={() => setSearchOpen(false)}
								className='ml-2 focus:outline-none'>
								<MdClose className='h-4 w-4 text-orange-500' />
							</button>
						</div>
					) : (
						<button
							onClick={() => setSearchOpen(true)}
							className='transition-all duration-300 focus:outline-none flex items-center gap-2 text-[#0f3557]'>
							<MdSearch size={22} />
							<span>Search</span>
						</button>
					)}
				</div>

				{/* Nav Items */}
				<div
					className='p-4 overflow-y-auto'
					style={{ maxHeight: 'calc(100vh - 200px)' }}>
					{processedNavItems.map((item, index) => (
						<div
							key={index}
							className='py-2 border-b'>
							{item.leftItems ? (
								<MobileAccordion
									title={item.label}
									items={item.leftItems}
									rightContent={item.rightContent}
									onClose={() => setMobileMenuOpen(false)}
								/>
							) : (
								<Link
									to={item.href}
									className='block text-[#0f3557] hover:bg-gray-100 px-2 py-2 rounded transition-colors'
									onClick={() => setMobileMenuOpen(false)}>
									{item.label}
								</Link>
							)}
						</div>
					))}

					{/* Language Option */}
					<div className='mt-4'>
						<button className='w-full text-left text-[#0f3557] hover:bg-gray-100 px-2 py-2 rounded'>
							Language
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

// Mobile Accordion for dropdown items
function MobileAccordion({ title, items, rightContent, onClose }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				className='flex justify-between items-center w-full text-[#0f3557] hover:bg-gray-100 px-2 py-2 rounded transition-colors'
				onClick={() => setIsOpen(!isOpen)}>
				<span>{title}</span>
				<svg
					className={`h-4 w-4 transition-transform duration-200 ${
						isOpen ? 'transform rotate-180' : ''
					}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'>
					<path
						fillRule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>

			{isOpen && (
				<div className='ml-4 mt-1 border-l-2 border-gray-200 pl-2'>
					{/* Main items */}
					{items.map((item, idx) => (
						<Link
							key={idx}
							to={item.href}
							className='block text-[#0f3557] hover:bg-gray-100 px-2 py-2 rounded text-sm transition-colors'
							onClick={() => {
								if (item.onClick) {
									item.onClick();
								}
								onClose();
							}}>
							{item.label}
						</Link>
					))}

					{/* Optional: Display a simplified version of the right content on mobile */}
					{rightContent && (
						<div className='mt-3 p-2 bg-gray-50 rounded-md'>
							{React.isValidElement(rightContent) &&
								React.cloneElement(rightContent, {
									className: 'text-sm',
								})}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Navbar;
