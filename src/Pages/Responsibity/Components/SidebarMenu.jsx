import React, { useState, useEffect } from 'react';

const SidebarMenu = ({ backgroundColor = 'blue' }) => {
	const [activeSection, setActiveSection] = useState('introduction');

	const sections = [
		{ id: 'introduction', label: 'Introduction' },
		{ id: 'emissions', label: 'Emissions' },
		{ id: 'case-studies', label: 'Case Studies' },
		{ id: 'approach', label: 'Operational Change' },
		{ id: 'decarbonization', label: 'Decarbonization Investments' },
		{ id: 'closing', label: '2023 Report' },
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			const currentSection = sections.find((section, index) => {
				const element = document.getElementById(section.id);
				if (!element) return false;

				const nextElement = sections[index + 1]
					? document.getElementById(sections[index + 1].id)
					: null;
				const elementTop = element.offsetTop - 100;
				const elementBottom = nextElement
					? nextElement.offsetTop - 100
					: document.body.scrollHeight;

				return scrollPosition >= elementTop && scrollPosition < elementBottom;
			});

			if (currentSection) {
				setActiveSection(currentSection.id);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80,
				behavior: 'smooth',
			});
			setActiveSection(id);
		}
	};

	// Determine text color based on background
	const baseTextColor =
		backgroundColor === 'white' ? 'text-blue-600' : 'text-white';
	const inactiveTextColor =
		backgroundColor === 'white' ? 'text-blue-400' : 'text-gray-300';
	const hoverTextColor =
		backgroundColor === 'white' ? 'hover:text-blue-800' : 'hover:text-white';
	const dotColorActive =
		backgroundColor === 'white' ? 'bg-blue-600' : 'bg-white';

	return (
		<nav className='hidden fixed left-18 top-28 lg:flex items-start z-50 max-h-[80vh] overflow-auto'>
			<div className='h-full flex flex-col justify-center'>
				<ul className='flex flex-col bg-transparent items-start'>
					{sections.map((section) => (
						<li
							key={section.id}
							className='mb-2 flex items-center leading-[19px] cursor-pointer font-semibold'>
							<div
								className={`w-[4px] h-[4px] rounded-full mr-4 transition-all duration-300 ${
									activeSection === section.id
										? `${dotColorActive} scale-125`
										: 'bg-gray-500'
								}`}
							/>
							<button
								onClick={() => scrollToSection(section.id)}
								className={`text-sm transition-colors duration-300 ${
									activeSection === section.id
										? `${baseTextColor} font-medium`
										: `${inactiveTextColor} ${hoverTextColor}`
								}`}>
								{section.label}
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default SidebarMenu;
