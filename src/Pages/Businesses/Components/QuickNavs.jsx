import { useState } from 'react';
import { LuLightbulb } from 'react-icons/lu';
import { FaRegChartBar } from 'react-icons/fa';
import { IoMdArrowForward, IoMdMenu, IoMdClose } from 'react-icons/io';

const handleSmoothScroll = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

const QuickNav = () => {
	const [active, setActive] = useState('Overview');
	const [hovered, setHovered] = useState(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = ['Overview', 'Sectors', 'Portfolio Highlights'];
	const rightNavItems = [
		{ name: 'Insights', icon: LuLightbulb },
		{ name: 'Invest', icon: FaRegChartBar },
		{ name: 'Leadership', icon: LuLightbulb },
	];

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	return (
		<>
			<div className='bg-[#f8f8f8] sticky top-0 z-50 shadow-sm transition-all duration-300'>
				<div className='container mx-auto px-2 sm:px-4'>
					<div className='flex justify-between items-center'>
						{/* Left navigation items */}
						<div className='flex space-x-4'>
							{navItems.map((item) => {
								const target = item.toLowerCase().replace(/ /g, '');
								const isActive = active === item;
								const isHovered = hovered === item;
								return (
									<button
										key={item}
										onClick={() => {
											setActive(item);
											handleSmoothScroll(target);
										}}
										onMouseEnter={() => setHovered(item)}
										onMouseLeave={() => setHovered(null)}
										className='md:px-3 py-3 text-[12px] md:text-sm font-medium text-gray-700 relative'>
										{item}
										{(isActive || isHovered) && (
											<div className='absolute bottom-0 left-0 w-full h-[2px] bg-[#0f3557]'></div>
										)}
									</button>
								);
							})}
						</div>

						{/* Desktop Right navigation items */}
						<div className='hidden sm:flex space-x-4'>
							{rightNavItems.map((item) => {
								const Icon = item.icon;
								const isHovered = hovered === item.name;
								return (
									<button
										key={item.name}
										className={`flex items-center md:px-4 py-3 transition-colors duration-300 ${
											isHovered
												? 'bg-[#c6d8ef] text-[#0f3557]'
												: 'bg-blue-50 text-gray-700'
										}`}
										onMouseEnter={() => setHovered(item.name)}
										onMouseLeave={() => setHovered(null)}>
										<Icon
											className={`w-5 h-5 mr-2 ${
												isHovered ? 'text-[#0f3557]' : ''
											}`}
										/>
										<span className='font-medium text-sm'>{item.name}</span>
										{/* Uncomment to add arrow animation on Insights */}
										{/* {item.name === 'Insights' && isHovered && (
                      <IoMdArrowForward className="ml-2 text-[#0f3557]" />
                    )} */}
									</button>
								);
							})}
						</div>

						{/* Mobile Hamburger Menu */}
						<div className='sm:hidden'>
							<button
								onClick={toggleMobileMenu}
								className='p-3 focus:outline-none transition-colors duration-300'>
								{mobileMenuOpen ? (
									<IoMdClose size={24} />
								) : (
									<IoMdMenu size={24} />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				{mobileMenuOpen && (
					<div className='sm:hidden bg-[#f8f8f8] shadow-md transition-all duration-300'>
						<div className='flex flex-col'>
							{rightNavItems.map((item) => {
								const Icon = item.icon;
								return (
									<button
										key={item.name}
										className='flex items-center px-4 py-3 border-t border-gray-200 transition-colors duration-300 hover:bg-[#c6d8ef] hover:text-[#0f3557]'
										onClick={() => {
											// Optional: close the menu on selection
											setMobileMenuOpen(false);
										}}>
										<Icon className='w-5 h-5 mr-2' />
										<span className='font-medium text-sm'>{item.name}</span>
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>

			{/* View All Insights section - visible only when Insights is hovered on desktop */}
			{hovered === 'Insights' && (
				<div className='hidden sm:block bg-[#c6d8ef] py-3 px-4 md:flex items-center ml-auto max-w-2xl transition-all duration-300'>
					<div className='text-blue-600 font-medium flex items-center text-sm'>
						View All Insights
						<IoMdArrowForward className='ml-2' />
					</div>
				</div>
			)}
		</>
	);
};

export default QuickNav;
