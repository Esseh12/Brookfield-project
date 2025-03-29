import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

/**
 * A reusable link item for the additional content underneath.
 */
const InfoLinkItem = ({ label }) => {
	return (
		<div className='group flex justify-between border-t border-b border-[#aec2d3] py-2 cursor-pointer transition-all delay-75'>
			<p className='group-hover:text-[#5389cb] group-hover:underline'>
				{label}
			</p>
			<FaArrowRightLong className='text-[#5389cb]' />
		</div>
	);
};

export default InfoLinkItem;
