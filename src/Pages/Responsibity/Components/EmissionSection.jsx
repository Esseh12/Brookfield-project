import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const EmissionScope = ({ title, description, icons }) => {
	return (
		<div className='mb-12 flex flex-col md:flex-row md:justify-between gap-6'>
			<div className='max-w-md'>
				<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
				<p className='text-gray-300 mb-6 text-sm md:text-base'>{description}</p>
			</div>

			<div className='flex flex-row md:flex-col gap-4 md:gap-8'>
				{icons.map((icon, index) => (
					<img
						key={`${title}-icon-${index}`}
						src={icon}
						alt={`${title} icon`}
						className='w-8 h-8 md:w-12 md:h-12'
					/>
				))}
			</div>
		</div>
	);
};

const EmissionsSection = () => {
	const scopeOneIcons = [
		'https://ext.same-assets.com/1363139131/3420817321.svg',
		'https://ext.same-assets.com/1363139131/1195003779.svg',
		'https://ext.same-assets.com/1363139131/3245548596.svg',
	];

	const scopeTwoIcons = [
		'https://ext.same-assets.com/1363139131/3412487443.svg',
		'https://ext.same-assets.com/1363139131/295770044.svg',
		'https://ext.same-assets.com/1363139131/3452516059.svg',
	];

	const scopeThreeIcons = [
		'https://ext.same-assets.com/1363139131/1776255026.svg',
		'https://ext.same-assets.com/1363139131/875817475.svg',
		'https://ext.same-assets.com/1363139131/1674264128.svg',
	];

	// Setup intersection observers for each scope section
	const { ref: scopeOneRef, inView: scopeOneInView } = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const { ref: scopeTwoRef, inView: scopeTwoInView } = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const { ref: scopeThreeRef, inView: scopeThreeInView } = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	// For mobile sticky header
	const [activeScope, setActiveScope] = useState(null);

	// Update active scope based on which one is in view
	useEffect(() => {
		if (scopeOneInView) setActiveScope('Scope One');
		else if (scopeTwoInView) setActiveScope('Scope Two');
		else if (scopeThreeInView) setActiveScope('Scope Three');
	}, [scopeOneInView, scopeTwoInView, scopeThreeInView]);

	return (
		<section
			id='emissions'
			className='py-16 md:py-24 bg-[#0f3557] text-white relative'>
			{/* Mobile sticky header */}
			<div className='md:hidden fixed top-0 left-0 right-0 bg-[#0d2e4c] z-30 py-3 px-4 shadow-lg'>
				<h3 className='text-lg font-medium'>{activeScope || 'Emissions'}</h3>
			</div>

			<div className='container mx-auto max-w-5xl px-4 md:px-8 pt-12 md:pt-0'>
				<h1 className='text-3xl md:text-4xl font-bold mb-12 text-center md:text-left'>
					Emissions
				</h1>

				<div className='space-y-16 md:space-y-24'>
					{/* Scope One */}
					<div
						ref={scopeOneRef}
						className='scroll-mt-16'
						id='scope-one'>
						<EmissionScope
							title='Scope One'
							description='Direct greenhouse gas (GHG) emissions from sources owned or controlled by the reporting company; for example, emissions from combustion in boilers, furnaces or vehicles.'
							icons={scopeOneIcons}
						/>
					</div>

					{/* Scope Two */}
					<div
						ref={scopeTwoRef}
						className='scroll-mt-16'
						id='scope-two'>
						<EmissionScope
							title='Scope Two'
							description='Indirect GHG emissions from the generation of purchased or acquired electricity, steam, heating or cooling consumed by the reporting company.'
							icons={scopeTwoIcons}
						/>
					</div>

					{/* Scope Three */}
					<div
						ref={scopeThreeRef}
						className='scroll-mt-16'
						id='scope-three'>
						<EmissionScope
							title='Scope Three'
							description='Indirect emissions that occur in the value chain (both upstream and downstream) not controlled by the reporting company.'
							icons={scopeThreeIcons}
						/>
					</div>
				</div>

				{/* Summary Box */}
				<div className='mt-16  bg-opacity-30 p-6 md:p-10 rounded-lg'>
					<p className='text-gray-100 text-base md:text-lg leading-relaxed'>
						We have been assessing our corporate operations and controlled
						portfolio companies emissions for several years. Our focus is on
						measuring the emissions of our controlled portfolio companies, where
						we believe we can drive the widest impact. We believe that the
						global focus on high-quality scope 1 and 2 emissions data will help
						with efforts across scope 3. We have also begun reporting scope 1
						and 2 emissions of our non-controlled investments (financed
						emissions).
					</p>
				</div>
			</div>
		</section>
	);
};

export default EmissionsSection;
