import PagesLayout from '../../Components/Layout/PagesLayout';
import DefaultButton from '../../Components/Buttons/defaultButton';

// Reusable component for section headers
const SectionHeader = ({
	title,
	textColor = '',
	fontSize = 'text-3xl md:text-4xl',
}) => (
	<div className='text-left mb-10'>
		<h1 className={`${fontSize} ${textColor} playscript`}>{title}</h1>
		<div className='w-16 h-1 bg-[#ff8200] mt-4'></div>
	</div>
);

// Reusable component for core strength items
const CoreStrengthItem = ({ title, description }) => (
	<div className='flex flex-col gap-4'>
		<h2 className='text-lg font-semibold'>{title}</h2>
		<p className='text-base text-[#55565A]'>{description}</p>
	</div>
);

// Reusable component for insight sections using background images with overlay text
const InsightSection = ({ imageSrc, title, description }) => (
	<div
		className='relative h-64 md:h-96 bg-cover bg-center shadow-sm'
		style={{ backgroundImage: `url(${imageSrc})` }}>
		<div className='absolute inset-0 bg-opacity-50 flex flex-col justify-center p-4 md:p-6 gap-4'>
			<h2 className='text-2xl md:text-3xl playscript text-white leading-[50px]'>
				{title}
			</h2>
			<div className='w-16 h-1 bg-[#ff8200]'></div>
			<p className='text-sm md:text-base mt-4 text-white leading-6'>
				{description}
			</p>
			<div>
				<DefaultButton
					text='Learn More'
					arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
					link='#'
					textColor='#FFFFFF'
					borderColor='#FFFFFF'
					hoverOverlayColor='rgba(255, 255, 255, 0.2)'
				/>
			</div>
		</div>
	</div>
);

// Reusable component for form input fields
const FormInput = ({ type = 'text', placeholder, className = '' }) => (
	<input
		type={type}
		placeholder={placeholder}
		className={`w-full p-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0f3557] ${className}`}
	/>
);

// Reusable image grid item
const ImageGridItem = ({ imageSrc, Title }) => (
	<div className='flex flex-col gap-4'>
		<div className='w-full h-64 overflow-hidden'>
			<img
				src={imageSrc}
				alt='Brookfield'
				className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
			/>
		</div>
		<p className='font-bold text-[#417094] text-[12px] leading-[12px]'>
			Insight
		</p>
		<h3 className='text-lg leading-7 font-semibold cursor-pointer hover:underline'>
			{Title}
		</h3>
	</div>
);

const PrivateMarketSolutions = () => {
	// Data for core strengths
	const coreStrengths = [
		{
			title: 'Creating Value',
			description:
				'Build value in businesses through our vast operating team of hundreds of thousands of employees.',
		},
		{
			title: 'Investing with Discipline',
			description:
				'Invest consistently throughout economic cycles, leveraging our deep bench of knowledge and on-the-ground insights.',
		},
		{
			title: 'Deploying Large-Scale Capital',
			description:
				'Execute transactions of a size that few others can match through our access to substantial flexible capital.',
		},
	];

	// Data for insight sections
	const insightSections = [
		{
			imageSrc: '/Assets/Images/mobile_-_v1.avif',
			title: 'Leaning into the Real Estate Rebound',
			description:
				'Explore our latest insights across global real estate markets, with outlooks from our business leaders.',
		},
		{
			imageSrc: '/Assets/Images/infrastructure_focus2.avif',
			title: 'Investing in the Infrastructure Supercycle',
			description:
				'Explore our latest insights on the macro forces driving infrastructure development.',
		},
	];

	// Data for bottom image grid
	const imageGrid = [
		{
			imageSrc:
				'/Assets/Images/Insights Paper_Fortifying Portfolios With Private Real Estate Credit_Website Card_586x336.avif',
			Title: 'Fortifying Portfolios With Private Real Estate Credit',
		},
		{
			imageSrc: '/Assets/Images/Gridlock Insights Cover Image.avif',
			Title:
				'Gridlock: Why Investment in Transmission Is Critical to Reach Net Zero',
		},
		{
			imageSrc: '/Assets/Images/CTF_Fund_Photo_Retouched.avif',
			Title: 'What It Takes to Catalyze the Transition in Emerging Markets',
		},
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/privatefunds-hero_nooverlay.avif'
			heroHeading='Institutional Investors'>
			<section className='py-16'>
				{/* Top Section */}
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14'>
					<p className='playscript text-2xl sm:text-3xl leading-9'>
						Leveraging Brookfield's core strengths, we partner with sovereign
						wealth funds, public and private pensions, insurance companies,
						endowments, foundations and family offices around the world to
						generate attractive risk-adjusted returns.
					</p>
					<div>
						<SectionHeader title='Our Core Strengths' />
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{coreStrengths.map((strength, idx) => (
								<CoreStrengthItem
									key={idx}
									title={strength.title}
									description={strength.description}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Blue Background Section */}
				<div className='bg-[#0f3557] mt-12'>
					<div className='max-w-6xl mx-auto py-12 px-4 sm:px-8 flex flex-col gap-4 text-white'>
						<h2 className='playscript text-2xl sm:text-[30px] leading-[40px]'>
							Investing in a New Era
						</h2>
						<p className='leading-6 text-sm sm:text-base'>
							While today's uncertainties cloud the macro view, our outlook for
							investing <br className='hidden md:block' /> remains bright. In
							our special report, we share where we are seeing compelling{' '}
							<br className='hidden md:block' /> opportunities ahead across our
							global platform.
						</p>
						<div>
							<DefaultButton
								text='Explore Now'
								arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
								link='#'
								textColor='#FFFFFF'
								borderColor='#FFFFFF'
								hoverOverlayColor='rgba(255, 255, 255, 0.2)'
							/>
						</div>
					</div>
				</div>

				{/* Invested Section */}
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'>
					<div className='flex flex-col md:flex-row gap-8 items-start'>
						<div className='w-full md:w-1/2 relative'>
							<div className='relative aspect-video'>
								<img
									src='/Assets/Images/who_we_are.avif'
									alt='Brookfield Institutional Investors'
									className='w-full h-full object-cover'
								/>
								<div className='absolute inset-0 flex items-center justify-center'>
									<button className='bg-[#ff8200] rounded-full w-16 h-16 flex items-center justify-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='white'
											width='24'
											height='24'>
											<path d='M8 5v14l11-7z' />
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className='w-full md:w-1/2'>
							<SectionHeader
								title='Invested'
								fontSize='text-4xl md:text-5xl'
							/>
							<p className='text-base md:text-lg text-[#55565A]'>
								Brookfield serves institutional investors globally by providing
								solutions across renewable power & transition, infrastructure,
								private equity, real estate and credit.
							</p>
						</div>
					</div>
				</div>

				{/* Insight Sections */}
				<div className='w-full mt-16'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{insightSections.map((section, idx) => (
							<div
								key={idx}
								className='relative'>
								<InsightSection
									imageSrc={section.imageSrc}
									title={section.title}
									description={section.description}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Contact Us Section */}
				<div className='w-full bg-[#f0f4f7]'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
						<div className='flex flex-col md:flex-row gap-8 md:gap-16'>
							<div className='w-full md:w-1/3 flex flex-col gap-4'>
								<p className='playscript text-2xl'>Contact Us</p>
								<p className='text-base text-[#55565A]'>
									If you'd like to learn more about our views or capabilities,
									please request a follow-up.
								</p>
							</div>
							<div className='w-full md:w-2/3'>
								<form className='flex flex-col gap-4'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<FormInput
											placeholder='First Name'
											className='bg-white'
										/>
										<FormInput
											placeholder='Last Name'
											className='bg-white'
										/>
									</div>
									<FormInput
										placeholder='Business Email'
										type='email'
										className='bg-white'
									/>
									<FormInput
										placeholder='Company'
										className='bg-white'
									/>
									<FormInput
										placeholder='Please provide details on your request.'
										className='bg-white'
									/>
									<div className='mt-2'>
										<DefaultButton
											text='Submit'
											arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
											link='#'
											textColor='#FFFFFF'
											borderColor='#0f3557'
											backgroundColor='#0f3557'
											hoverOverlayColor='rgba(255, 255, 255, 0.2)'
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Image Grid */}
				<div className='w-full mt-20 px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{imageGrid.map((item, idx) => (
							<ImageGridItem
								key={idx}
								imageSrc={item.imageSrc}
								Title={item.Title}
							/>
						))}
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default PrivateMarketSolutions;
