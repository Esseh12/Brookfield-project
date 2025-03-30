import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavDropdown = ({
	title,
	leftItems = [],
	rightContent = null,
	className = '',
	dropdownClassName = '',
	leftItemClassName = '',
	rightContentClassName = '',
	triangleClassName = '',
	isOpen: controlledIsOpen,
	setIsOpen: setControlledIsOpen,
}) => {
	// Use internal state if not controlled externally
	const [internalIsOpen, setInternalIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const timeoutRef = useRef(null);
	const navigate = useNavigate();

	// Determine if component is controlled or uncontrolled
	const isControlled =
		controlledIsOpen !== undefined && setControlledIsOpen !== undefined;
	const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
	const setIsOpen = isControlled ? setControlledIsOpen : setInternalIsOpen;

	// Handle hover events
	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		// Add a small delay before closing to improve user experience
		timeoutRef.current = setTimeout(() => {
			setIsOpen(false);
		}, 150);
	};

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
	}, [setIsOpen]);

	// Clean up timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	// Handle navigation
	const handleNavigation = (item, e) => {
		if (item.onClick) {
			e.preventDefault();
			item.onClick();
		} else if (item.href) {
			// For normal links, navigate programmatically
			e.preventDefault();
			setIsOpen(false);
			// Use setTimeout to ensure state change happens before navigation
			setTimeout(() => {
				navigate(item.href);
			}, 10);
		}

		// Close the dropdown regardless
		setIsOpen(false);
	};

	return (
		<div
			className='relative'
			ref={dropdownRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{/* Dropdown trigger */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`px-4 py-6 text-sm font-medium focus:outline-none flex items-center ${className}`}
				aria-expanded={isOpen}>
				{title}
			</button>

			{/* Brookfield-style dropdown menu */}
			{isOpen && (
				<div
					className={`absolute left-0 mt-0 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${dropdownClassName}`}
					style={{ minWidth: '520px' }}>
					{/* Triangle pointer */}
					<div
						className={`absolute -top-2 left-10 w-4 h-4 bg-white transform rotate-45 ${triangleClassName}`}
					/>

					<div className='flex rounded-md bg-white relative z-10'>
						{/* Left column - Navigation items */}
						<div className='py-6 w-56 bg-white'>
							{leftItems.map((item, index) => (
								<Link
									key={index}
									to={item.href || '#'}
									className={`block px-8 py-3 text-sm text-gray-700 hover:text-blue-600 ${leftItemClassName}`}
									onClick={(e) => handleNavigation(item, e)}>
									{item.label}
								</Link>
							))}
						</div>

						{/* Right column - Feature content */}
						{rightContent && (
							<div
								className={`py-6 px-8 flex-1 bg-gray-50 ${rightContentClassName}`}>
								{rightContent}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

// Component for the right side feature content, styled like Brookfield
export const FeatureContent = ({
	image,
	title,
	description,
	linkText,
	linkUrl,
}) => {
	const navigate = useNavigate();

	const handleLinkClick = (e) => {
		e.preventDefault();
		navigate(linkUrl);
	};

	return (
		<div className='flex flex-col h-full'>
			{image && (
				<div className='mb-6'>
					{typeof image === 'string' ? (
						<img
							src={image}
							alt={title}
							className='max-w-full h-auto'
						/>
					) : (
						image
					)}
				</div>
			)}

			{title && (
				<h3 className='text-lg font-semibold mb-3 text-gray-800'>{title}</h3>
			)}

			{description && (
				<p className='text-sm mb-5 text-gray-600 leading-relaxed'>
					{description}
				</p>
			)}

			{linkText && linkUrl && (
				<Link
					to={linkUrl}
					className='text-blue-600 hover:text-blue-800 text-sm mt-auto flex items-center font-medium'
					onClick={handleLinkClick}>
					{linkText}
					<svg
						className='ml-2 h-4 w-4'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</Link>
			)}
		</div>
	);
};

NavDropdown.propTypes = {
	title: PropTypes.string.isRequired,
	leftItems: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string,
			onClick: PropTypes.func,
		})
	),
	rightContent: PropTypes.node,
	className: PropTypes.string,
	dropdownClassName: PropTypes.string,
	leftItemClassName: PropTypes.string,
	rightContentClassName: PropTypes.string,
	triangleClassName: PropTypes.string,
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
};

FeatureContent.propTypes = {
	image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	title: PropTypes.string,
	description: PropTypes.string,
	linkText: PropTypes.string,
	linkUrl: PropTypes.string,
};

export default NavDropdown;
