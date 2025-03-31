import PagesLayout from '../../Components/Layout/PagesLayout';

// Reusable header component
const SectionHeader = ({ title }) => (
	<div className='text-left mb-10'>
		<h1 className='text-3xl md:text-4xl playscript'>{title}</h1>
		<div className='w-16 h-1 bg-[#ff8200] mt-4'></div>
	</div>
);

// Reusable content section component with responsive layout
const ContentSection = ({
	title,
	children,
	imageSrc,
	imageAlt,
	reverse = false,
}) => (
	<div
		className={`flex flex-col md:flex-row ${
			reverse ? 'md:flex-row-reverse' : ''
		} gap-10`}>
		<div className='flex flex-col flex-1'>
			<SectionHeader title={title} />
			<div className='text-base text-[#55565A]'>{children}</div>
		</div>
		<div className='flex-1'>
			<img
				src={imageSrc}
				alt={imageAlt}
				className='w-full h-auto object-cover'
			/>
		</div>
	</div>
);

const OurWorkplace = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/Our-People.avif'
			heroHeading='Our Workplace'>
			<section className='pb-20'>
				{/* Hero statement section */}
				<div className='bg-[#0f3557] flex items-center justify-center py-14 text-white playscript text-center px-4'>
					<h1 className='text-2xl leading-9 font-medium'>
						Our culture is built on the belief that embracing a variety of
						perspectives and ideas <br /> leads to better outcomes. Encouraging
						inclusivity – across businesses, seniority, <br /> gender and
						culture – is just one way we accomplish this goal.
					</h1>
				</div>
				{/* Main content area */}
				<div className='bg-white py-24 flex flex-col gap-20 px-4 md:px-40'>
					<ContentSection
						title='Our Three Core Values'
						imageSrc='/Assets/Images/our-workplace-mediawtext.avif'
						imageAlt='Our Core Values'>
						<p>
							Our people are our most important asset. Brookfield invests in our
							people with a focus on each achieving their potential. The pillars
							of Brookfield’s culture revolve around our core values and
							underpins how we continue to uphold and develop a diverse and
							inclusive workplace.
						</p>
					</ContentSection>

					<ContentSection
						title='Diversity of Our People'
						imageSrc='/Assets/Images/diversity_FINAL.avif'
						imageAlt='Diversity at Brookfield'
						reverse={true}>
						<div className='flex flex-col gap-3'>
							<p className='font-bold leading-[27px] text-[20px]'>
								Our approach to diversity, equity and inclusion is deliberate
								and integrated into our human capital development processes and
								initiatives.
							</p>
							<p className='text-[20px] leading-[27px]'>
								At Brookfield, women comprise:
							</p>
							<ul className='flex flex-col gap-2 list-disc ml-7'>
								<li>
									<strong>46%</strong> of our overall workforce
								</li>
								<li>
									<strong>29%</strong> of Senior Vice Presidents and above
								</li>
								<li>
									<strong>33%</strong> of our Brookfield Asset Management Ltd.
									board directors
								</li>
								<li>
									<strong>57%</strong> of our Brookfield Asset Management Ltd.
									independent board directors
								</li>
							</ul>
						</div>
					</ContentSection>
				</div>

				{/* two image section */}
				<div className='flex gap-5'>
					<div
						className='relative bg-center background-cover h-[400px] flex-1'
						style={{
							backgroundImage:
								"url('/Assets/Images/Creating-Value-through-Sustainability-Measurement-hero-1600x600.avif')",
							backgroundRepeat: 'no-repeat',
						}}>
						<div className='absolute inset-0 bg-gradient-to-b from-black  opacity-25'></div>
						<div className='text-white '>
							<SectionHeader title='Our 2023 Sustainablity Report' />
							<p>
								Download our latest report to learn more about our
								sustainability approach and initiatives.
							</p>
						</div>
					</div>
					<div
						className='relative bg-center background-cover h-[400px] flex-1'
						style={{
							backgroundImage:
								"url('/Assets/Images/Internal-Mobility-1600.avif')",
							backgroundRepeat: 'no-repeat',
						}}>
						<div className='absolute inset-0 bg-gradient-to-b from-black to-black opacity-25'></div>
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default OurWorkplace;
