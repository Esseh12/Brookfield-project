// OverviewSection.jsx
import React from 'react';
import CountUp from 'react-countup';

// Reusable StatItem component
export const StatItem = ({ prefix = '', value, suffix = '', label }) => (
	<div className='flex flex-col items-center justify-center px-3 py-4 text-center border-t border-gray-300'>
		<div className='text-base md:text-[20px] text-[#3A7BCE] font-semibold mt-1'>
			{label}
		</div>
		<div className='playscript text-3xl md:text-6xl leading-tight md:leading-[87px] mb-1'>
			{prefix}
			<CountUp
				end={value}
				duration={2.5}
				separator=','
			/>
			{suffix}
		</div>
	</div>
);

// Reusable OverviewSection component
const OverviewSection = ({ leftText, rightText, stats = [] }) => {
	return (
		<section
			id='overview'
			className='py-12 md:py-16 bg-primary-50'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
					{/* Left Content */}
					<div>
						<p className='playscript text-xl md:text-[26px] mb-4 leading-snug md:leading-[40px]'>
							{leftText}
						</p>
					</div>
					{/* Right Content */}
					<div>
						<p className='text-base md:text-xl mb-4 leading-snug text-[#55565A]'>
							{rightText}
						</p>
					</div>
				</div>
				{/* Stat Section */}
				{stats.length > 0 && (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12'>
						{stats.map((stat, idx) => (
							<StatItem
								key={idx}
								prefix={stat.prefix}
								value={stat.value}
								suffix={stat.suffix}
								label={stat.label}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

OverviewSection.defaultProps = {
	leftText:
		"Default left text: We are one of the world's largest investors in renewable power and transition assets, with nearly 46,000 megawatts of generating capacity.",
	rightText:
		'Default right text: We operate globally, leveraging scale and expertise to build a clean energy portfolio and accelerate the transition to net zero.',
	stats: [],
};

export default OverviewSection;
