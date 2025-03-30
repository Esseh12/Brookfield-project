import { Button } from '@mui/material';

/**
 * A reusable hero-style button with a hover overlay effect.
 *
 * @param {string} text - The text displayed on the button.
 * @param {string} arrowUrl - The URL for the arrow icon.
 * @param {string} link - The URL or route to navigate to when clicked.
 * @param {string} textColor - The text color (default is white).
 * @param {string} borderColor - The border color (default is white).
 * @param {string} hoverOverlayColor - The overlay color on hover.
 */
const DefaultButton = ({
	text = 'Click Me',
	arrowUrl,
	link = '#',
	textColor = '#FFFFFF',
	borderColor = '#FFFFFF',
	backgroundColor = 'transparent',
	hoverOverlayColor = 'rgba(255,255,255,0.2)',
}) => {
	return (
		<Button
			href={link}
			// Material UI 'sx' prop + Tailwind classes for combined styling
			sx={{
				position: 'relative',
				overflow: 'hidden',
				color: textColor,
				border: `1px solid ${borderColor}`,
				textTransform: 'none',
				padding: '0.5rem 1.5rem',
				display: 'inline-flex',
				alignItems: 'center',
				backgroundColor: backgroundColor,
				borderRadius: '0',
				// On hover, we’ll rely on the overlay for the effect
				'&:hover': {
					// backgroundColor: 'transparent',
				},
			}}
			className='group relative transition-all duration-300'>
			{/* Hover overlay - slides in from the left */}
			<span
				className='absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300'
				style={{
					backgroundColor: hoverOverlayColor,
				}}
			/>

			{/* Content in front of the overlay */}
			<span className='relative z-10 flex items-center space-x-2'>
				<span>{text}</span>
				{arrowUrl && (
					<img
						src={arrowUrl}
						alt='arrow icon'
						className='h-4 w-auto'
					/>
				)}
			</span>
		</Button>
	);
};

export default DefaultButton;
