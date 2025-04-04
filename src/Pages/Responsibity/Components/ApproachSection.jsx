import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ApproachSection = () => {
	// Intersection Observer to watch the section
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false, // so it can revert when scrolling out
	});

	// Controls for the diamond overlay and content
	const diamondControls = useAnimation();
	const contentControls = useAnimation();
	const [contentVisible, setContentVisible] = useState(false);

	useEffect(() => {
		if (inView) {
			// Expand diamond when in view
			diamondControls.start('expanded');
			// Slight delay before showing content
			setTimeout(() => {
				contentControls.start('visible');
				setContentVisible(true);
			}, 300);
		} else {
			// Hide content first, then collapse diamond
			contentControls.start('hidden');
			setContentVisible(false);
			setTimeout(() => {
				diamondControls.start('collapsed');
			}, 200);
		}
	}, [inView, diamondControls, contentControls]);

	// Diamond animation variants
	const diamondVariants = {
		collapsed: {
			scale: 0,
			transition: { duration: 0.6, ease: 'easeInOut' },
		},
		expanded: {
			scale: 1,
			transition: { duration: 0.6, ease: 'easeInOut' },
		},
	};

	// Content animation variants
	const contentVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			transition: { duration: 0.4, ease: 'easeInOut' },
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
		},
	};

	const Diamond = ({ number }) => {
		return (
			<div className='flex flex-col items-start mb-8 md:mb-12'>
				<div className='w-12 h-12 border-2 border-[#919EBA] text-[#919EBA] bg-transparent flex justify-center items-center text-2xl font-bold transform rotate-45 mb-3'>
					<span className='-rotate-45'>{number}</span>
				</div>
				{!contentVisible && (
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='text-white text-xl font-medium'>
						Approach {number}
					</motion.h3>
				)}
			</div>
		);
	};

	return (
		<section
			ref={ref}
			className='relative min-h-screen bg-[#0f3557] overflow-hidden'>
			{/* Diamond Overlay */}
			<motion.div
				className='pointer-events-none absolute top-1/2 left-1/2 w-[300%] h-[300%] bg-white rotate-45 -translate-x-1/2 -translate-y-1/2'
				variants={diamondVariants}
				initial='collapsed'
				animate={diamondControls}
			/>

			{/* Content Container */}
			<div className='relative z-10 py-16 md:py-24 w-full max-w-4xl px-4 md:px-16 mx-auto'>
				<Diamond number={5} />

				{/* Main Content - Only visible after scroll animation */}
				<motion.div
					variants={contentVariants}
					initial='hidden'
					animate={contentControls}
					className=''>
					<h2 className='playscript font-medium leading-[40px] text-[30px] mb-8'>
						Decarbonization Investments
					</h2>

					<div className='space-y-4'>
						<p className='font-semibold leading-[22px]'>
							Annual Investment Must Accelerate
						</p>
						<p className='leading-[19px] text-[14px] text-[#556D81]'>
							Achieving net zero by 2050 is estimated to require a 4x increase
							of annual investments into energy transition and renewable asset
							classes by 2050.
						</p>
					</div>

					{/* Responsive image */}
					<div className='my-8 md:my-12'>
						<img
							src='/Assets/Images/2023_graphic_0_3.png'
							alt='Approach Graphic'
							className='w-full max-w-md  h-auto'
						/>
					</div>

					<div className='space-y-4'>
						<p className='text-lg font-semibold leading-[22px]'>
							Our Capital and Deployment
						</p>
						<p className='text-[12px] md:text-[14px] leading-[19px] text-[#556D81]'>
							Across our businesses—Renewable Power & Transition,
							Infrastructure, Private Equity, Real Estate and Credit—we are
							mobilizing capital to facilitate a transition to a lower-carbon
							economy.
						</p>
						<p className='text-[12px] md:text-[14px] leading-[19px] text-[#556D81]'>
							We have deployed capital into "Climate Solutions," or assets that
							directly remove or reduce real-economy GHG emissions, and "Climate
							Enablers," assets that indirectly contribute to, but are necessary
							for, emissions reductions by facilitating the deployment and
							scaling of Climate Solutions or supporting the decarbonization of
							other actors' operations.³
						</p>
					</div>

					<div className='my-8 md:my-12'>
						<div></div>
						<p className='text-sm md:text-base leading-[22px] font-semibold'>
							Climate Solutions
						</p>
						<div className='flex flex-col sm:flex-row gap-8 mt-5 justify-center sm:justify-start'>
							<span className='flex flex-col items-center'>
								<p className='font-medium playscript leading-[55px] text-[42px] text-[#85BB6E]'>
									$85B
								</p>
								<p className='text-[10px] leading-[24px] text-[#55565A]'>
									Clean Energy
								</p>
							</span>
							<span className='flex flex-col items-center'>
								<p className='font-medium playscript leading-[55px] text-[42px] text-[#85BB6E]'>
									$85B
								</p>
								<p className='text-[10px] leading-[24px] text-[#55565A]'>
									Sustainable Solutions & Key Infrastructure
								</p>
							</span>
							<span className='flex flex-col items-center'>
								<p className='font-medium playscript leading-[55px] text-[42px] text-[#85BB6E]'>
									$3B
								</p>
								<p className='text-[10px] leading-[24px] text-[#55565A]'>
									Business Transformation
								</p>
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ApproachSection;
