import React, { useState, useEffect } from 'react';

const SidebarMenu = () => {
	const [activeSection, setActiveSection] = useState('introduction');

	const sections = [
		{ id: 'introduction', label: 'Introduction' },
		{ id: 'emissions', label: 'Emissions' },
		{ id: 'case-studies', label: 'Case Studies' },
		{ id: 'operational-change', label: 'Operational Change' },
		{ id: 'decarbonization', label: 'Decarbonization Investments' },
		{ id: 'report', label: '2023 Report' },
	];

	// Handle scrolling and update active section
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			// Find the current section based on scroll position
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
		handleScroll(); // Initialize on mount

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections]);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80, // Offset for header if needed
				behavior: 'smooth',
			});
			setActiveSection(id);
		}
	};

	return (
		<nav className='hidden fixed left-14 top-0 h-full lg:flex items-center z-50'>
			<div className='h-full flex flex-col justify-center'>
				<ul className='flex flex-col bg-transparent text-white items-start'>
					{sections.map((section) => (
						<li
							key={section.id}
							className='mb-2 flex items-center leading-[19px] cursor-pointer font-semibold'>
							<div
								className={`w-[4px] h-[4px] rounded-full mr-4 transition-all duration-300 ${
									activeSection === section.id
										? 'bg-white scale-125'
										: 'bg-gray-500'
								}`}
							/>
							<button
								onClick={() => scrollToSection(section.id)}
								className={`text-sm hover:text-white transition-colors duration-300 ${
									activeSection === section.id
										? 'text-white font-medium'
										: 'text-gray-300'
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
