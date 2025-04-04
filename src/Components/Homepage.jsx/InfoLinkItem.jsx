import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

/**
 * A reusable link item for the additional content underneath.
 * Accepts a label and a URL to navigate to.
 */
const InfoLinkItem = ({ label, url }) => {
	return (
		<Link
			to={url}
			className='group flex justify-between border-t border-b border-[#aec2d3] py-2 cursor-pointer transition-all delay-75'>
			<p className='group-hover:text-[#5389cb] group-hover:underline'>
				{label}
			</p>
			<FaArrowRightLong className='text-[#5389cb]' />
		</Link>
	);
};

export default InfoLinkItem;
