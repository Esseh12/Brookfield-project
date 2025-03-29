import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const NavDropdown = ({
	title,
	items,
	className = '',
	dropdownClassName = '',
	itemClassName = '',
	triangleClassName = '',
	// isScrolled = false,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div
			className='relative'
			ref={dropdownRef}>
			{/* Dropdown trigger */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center ${className}`}
				aria-expanded={isOpen}>
				{title}
				<svg
					className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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

			{/* Dropdown menu */}
			{isOpen && (
				<div
					className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${dropdownClassName}`}>
					{/* Triangle pointer */}
					<div
						className={`absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 ${triangleClassName}`}
					/>

					<div className='py-1 rounded-md bg-white relative z-10'>
						{items.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${itemClassName}`}
								onClick={(e) => {
									if (item.onClick) {
										e.preventDefault();
										item.onClick();
									}
									setIsOpen(false);
								}}>
								{item.label}
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

NavDropdown.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string,
			onClick: PropTypes.func,
		})
	).isRequired,
	className: PropTypes.string,
	dropdownClassName: PropTypes.string,
	itemClassName: PropTypes.string,
	triangleClassName: PropTypes.string,
	isScrolled: PropTypes.bool,
};

export default NavDropdown;
