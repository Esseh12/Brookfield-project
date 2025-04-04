import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
	// Add state to track which left item is active
	const [activeLeftItem, setActiveLeftItem] = useState(0);
	const dropdownRef = useRef(null);
	const timeoutRef = useRef(null);

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

	// Clean up timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	// Handle navigation and toggle functionality
	const handleNavigation = (item, index, e) => {
		// Toggle functionality - set active item
		if (item.toggleable) {
			e.preventDefault();
			setActiveLeftItem(index);

			// If there's an onClick handler, call it
			if (item.onClick) {
				item.onClick();
			}
		}
		// Regular navigation behavior
		else if (item.onClick) {
			e.preventDefault();
			item.onClick();
			setIsOpen(false);
		} else if (item.href) {
			// Allow Link navigation to occur before closing dropdown
			setTimeout(() => {
				setIsOpen(false);
			}, 0); // 0ms delay ensures it's queued after current execution
		}
	};

	// Determine which right content to show
	const getCurrentRightContent = () => {
		// If the active item has specific content, show that
		if (leftItems[activeLeftItem] && leftItems[activeLeftItem].rightContent) {
			return leftItems[activeLeftItem].rightContent;
		}
		// Otherwise fall back to the default right content
		return rightContent;
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
					className={`absolute left-0 mt-0 shadow-lg bg-white  z-50 ${dropdownClassName}`}
					style={{ minWidth: '520px' }}>
					{/* Triangle pointer */}
					<div
						className={`absolute -top-2 left-10 w-6 h-6 bg-white transform rotate-45 ${triangleClassName}`}
					/>

					<div className='flex rounded-md bg-white relative z-10'>
						{/* Left column - Navigation items */}
						<div className='py-6 w-56 bg-white'>
							{leftItems.map((item, index) => (
								<Link
									key={index}
									to={item.href || '#'}
									className={`block px-8 py-3 text-sm ${
										item.toggleable && index === activeLeftItem
											? 'text-blue-600 font-semibold'
											: 'text-gray-700 hover:text-blue-600'
									} ${leftItemClassName}`}
									onClick={(e) => handleNavigation(item, index, e)}>
									{item.label}
								</Link>
							))}
						</div>

						{/* Right column - Feature content */}
						{getCurrentRightContent() && (
							<div
								className={`py-6 px-8 flex-1 bg-gray-50 ${rightContentClassName}`}>
								{getCurrentRightContent()}
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
	return (
		<div className='flex flex-col h-full'>
			{image && (
				<div className='mb-6'>
					{typeof image === 'string' ? (
						<img
							src={image}
							alt={title}
							className='max-w-[75%] h-auto'
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
					className='text-blue-600 hover:text-blue-800 text-sm mt-auto flex items-center font-medium'>
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
			toggleable: PropTypes.bool, // Add this to mark an item as toggleable
			rightContent: PropTypes.node, // Add this to provide specific content for this item
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
