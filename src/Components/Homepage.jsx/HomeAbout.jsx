import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDownLong } from 'react-icons/fa6';
import { SlClose } from 'react-icons/sl';
import InfoLinkItem from './InfoLinkItem';

const HomeAbout = () => {
	// Track which image was clicked:
	// 'left' => left image clicked
	// 'right' => right image clicked
	// null => none clicked
	const [selected, setSelected] = useState(null);

	// Determine overlay and border classes
	const leftOverlay = selected === 'right' ? 'bg-white bg-opacity-50' : '';
	const rightOverlay = selected === 'left' ? 'bg-white bg-opacity-50' : '';

	const leftBorder = selected === 'left' ? 'border-2 border-black' : '';
	const rightBorder = selected === 'right' ? 'border-2 border-black' : '';

	return (
		<section className='bg-white py-20 w-[75%] mx-auto'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10'>
				{/* Introductory Text */}
				<p className='text-[#0f3557] text-sm sm:text-base leading-relaxed'>
					We are a leading global investment firm, investing on behalf of
					institutions and individuals around the world. Our success is based on
					our proven investment and operational expertise—and at the heart of it
					all is the Brookfield Ecosystem. The insights we gather from our
					scale, expertise and global reach enable each group within Brookfield
					to benefit from being part of the whole.
				</p>

				{/* Images Container */}
				<div className='flex flex-col md:flex-row gap-5'>
					{/* Left Image Card */}
					<div
						// If the user clicks this, select 'left'
						onClick={() => setSelected('left')}
						className={`group flex-1 h-[40vh] md:h-[60vh] px-6 pb-6 flex flex-col justify-end relative cursor-pointer
              transition-all duration-300 ${leftOverlay} ${leftBorder}
            `}
						style={{
							backgroundImage:
								"url('/Assets/Images/home_image_block_left.avif')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}>
						<h1 className='text-2xl leading-8 text-white transform transition-transform duration-500 group-hover:-translate-y-2'>
							Tamsey Asset Management
						</h1>
						<p className='text-white transform transition-transform duration-500 group-hover:-translate-y-2'>
							We invest on behalf of institutions around the world across
							renewable power and transition, infrastructure, private equity,
							real estate and credit.
						</p>
						{/* "More" Link appears on hover */}
						<Link
							to='/asset-management'
							className='flex items-center gap-2 text-[#94CEF3] opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
							More <FaArrowDownLong />
						</Link>
					</div>

					{/* Right Image Card */}
					<div
						// If the user clicks this, select 'right'
						onClick={() => setSelected('right')}
						className={`group flex-1 h-[40vh] md:h-[60vh] px-6 pb-6 flex flex-col justify-end relative cursor-pointer
              transition-all duration-300 ${rightOverlay} ${rightBorder}
            `}
						style={{
							backgroundImage:
								"url('/Assets/Images/home_image_block_right.avif')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}>
						<h1 className='text-2xl leading-8 text-white transform transition-transform duration-500 group-hover:-translate-y-2'>
							Tamsey Wealth Solutions
						</h1>
						<p className='text-white transform transition-transform duration-500 group-hover:-translate-y-2'>
							We provide a range of retirement savings products to help millions
							of people achieve sustainable, long-term financial security.
						</p>
						{/* "More" Link appears on hover */}
						<Link
							to='/wealth-solutions'
							className='flex items-center gap-2 text-[#94CEF3] opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
							More <FaArrowDownLong />
						</Link>
					</div>
				</div>

				{/* Additional Content Underneath */}
				{selected && (
					<div className='mt-2 text-[#0f3557] text-sm sm:text-base leading-relaxed transition-all duration-300'>
						{selected === 'left' ? (
							<div className='flex flex-col md:flex-row gap-5'>
								<div className='flex-1 flex flex-col'>
									<h2 className='font-semibold text-lg mb-2'>
										Tamsey Asset Management Businesses
									</h2>
									<p>
										We invest on behalf of institutions around the world across
										renewable power and transition, infrastructure, private
										equity, real estate, and credit. Click to learn more about
										how we leverage our operational expertise.
									</p>
								</div>
								<div className='flex-1 flex flex-col'>
									{/* Close Icon */}
									<div
										className='group flex justify-end cursor-pointer text-[#aec2d3] py-4 text-3xl'
										onClick={() => setSelected(null)}>
										<SlClose className='group-hover:text-[#ff8200] transition-all delay-75' />
									</div>

									{/* Reusable link items */}
									<InfoLinkItem
										label='Renewable Power and Transition'
										url='/our-businesses/renewable-power-transition'
									/>
									<InfoLinkItem
										label='Infrastructure'
										url='/our-businesses/infrastructure'
									/>
									<InfoLinkItem
										label='Private Equity'
										url='/our-businesses/private-equity'
									/>
									<InfoLinkItem
										label='Real Estate'
										url='/our-businesses/real-estate'
									/>
									<InfoLinkItem
										label='Credit'
										url='/our-businesses/credit'
									/>
								</div>
							</div>
						) : (
							<div className='flex flex-col md:flex-row gap-5'>
								<div className='flex-1 flex flex-col'>
									<h2 className='font-semibold text-lg mb-2'>
										Brookfield Wealth Solutions
									</h2>
									<p>
										We provide a range of retirement savings products to help
										millions of people achieve sustainable, long-term financial
										security. Click to learn more about our wealth solutions.
									</p>
								</div>
								<div className='flex-1 flex flex-col'>
									{/* Close Icon */}
									<div
										className='group flex justify-end cursor-pointer text-[#aec2d3] py-4 text-3xl'
										onClick={() => setSelected(null)}>
										<SlClose className='group-hover:text-[#ff8200] transition-all delay-75' />
									</div>

									{/* Reusable link item */}
									<InfoLinkItem
										label='Retirement Services'
										url='/our-businesses/retirement-services'
									/>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeAbout;
