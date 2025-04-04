import { useState } from 'react';
import { LuLightbulb } from 'react-icons/lu';
import { FaRegChartBar } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';

const handleSmoothScroll = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

const QuickNav = () => {
	const [active, setActive] = useState('Overview');
	const [hovered, setHovered] = useState(null);

	const navItems = ['Overview', 'Sectors', 'Portfolio Highlights'];
	const rightNavItems = [
		{ name: 'Insights', icon: LuLightbulb },
		{ name: 'Invest', icon: FaRegChartBar },
		{ name: 'Leadership', icon: LuLightbulb },
	];

	return (
		<>
			<div className='bg-[#f8f8f8] sticky top-0 z-50 shadow-sm transition-all duration-300'>
				<div className='container mx-auto'>
					<div className='flex justify-between'>
						{/* Left navigation items */}
						<div className='flex'>
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
										className={`px-6 py-5 font-medium text-gray-700 relative`}>
										{item}
										{(isActive || isHovered) && (
											<div className='absolute bottom-0 left-0 w-full h-[2px] bg-[#0f3557]'></div>
										)}
									</button>
								);
							})}
						</div>

						{/* Right navigation items */}
						<div className='flex'>
							{rightNavItems.map((item) => {
								const Icon = item.icon;
								const isHovered = hovered === item.name;

								return (
									<button
										key={item.name}
										className={`flex items-center px-8 py-5 transition-colors duration-300 ${
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
										<span className='font-medium'>{item.name}</span>

										{/* {item.name === 'Insights' && isHovered && (
										<IoMdArrowForward className='ml-2 text-[#0f3557]' />
									)} */}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* View All Insights section - visible only when Insights is selected/hovered */}
			{hovered === 'Insights' && (
				<div className='bg-[#c6d8ef] py-4 px-8 flex items-center ml-auto max-w-2xl'>
					<div className='text-blue-600 font-medium flex items-center'>
						View All Insights
						<IoMdArrowForward className='ml-2' />
					</div>
				</div>
			)}
		</>
	);
};

export default QuickNav;
