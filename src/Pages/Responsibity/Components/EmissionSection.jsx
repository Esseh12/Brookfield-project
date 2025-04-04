import { useInView } from 'react-intersection-observer';

const EmissionScope = ({ title, description, icons }) => {
	return (
		<div className='mb-12  flex justify-between'>
			<div>
				<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
				<p className='text-gray-medium mb-6 text-sm md:text-base max-w-md'>
					{description}
				</p>
			</div>

			<div className='flex flex-col flex-wrap gap-8'>
				{icons.map((icon) => (
					<img
						key={`${title}-icon-${icon.split('/').pop()}`}
						src={icon}
						alt={`${title} icon`}
						className='w-12 h-12'
					/>
				))}
			</div>
		</div>
	);
};

// Wrapper that makes an emission card sticky when in view
const StickyEmissionCard = ({ children }) => {
	// We use a threshold (e.g. 0.6) so the card becomes active when ~60% visible
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: false,
	});

	return (
		<div
			ref={ref}
			className={`transition-all duration-500 ease-in-out ${
				inView
					? 'fixed top-1/2 left-0 transform -translate-y-1/2 w-full z-20'
					: 'relative'
			}`}>
			{children}
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

	return (
		<section
			id='emissions'
			className='py-16 md:py-24 bg-[#0f3557] text-white flex items-center justify-center min-h-screen'>
			<div className='w-full max-w-3xl px-4 md:px-8'>
				<div className='grid grid-cols-1 md:grid-row-3 gap-8'>
					<EmissionScope
						title='Scope One'
						description='Direct greenhouse gas (GHG) emissions from sources owned or controlled by the reporting company; for example, emissions from combustion in boilers, furnaces or vehicles.'
						icons={scopeOneIcons}
					/>
					<EmissionScope
						title='Scope Two'
						description='Indirect GHG emissions from the generation of purchased or acquired electricity, steam, heating or cooling consumed by the reporting company.'
						icons={scopeTwoIcons}
					/>
					<EmissionScope
						title='Scope Three'
						description='Indirect emissions that occur in the value chain (both upstream and downstream) not controlled by the reporting company.'
						icons={scopeThreeIcons}
					/>
				</div>

				<div className='mt-16 bg-gray-light bg-opacity-20 p-6 md:p-10 rounded-lg'>
					<p className='text-gray-dark text-base md:text-lg leading-relaxed'>
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

				<div className='mt-16 grid grid-cols-3 gap-4 md:hidden'>
					{[...scopeOneIcons, ...scopeTwoIcons, ...scopeThreeIcons].map(
						(icon) => (
							<img
								key={`mobile-icon-${icon.split('/').pop()}`}
								src={icon}
								alt='Emission scope icon'
								className='w-10 h-10'
							/>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default EmissionsSection;
