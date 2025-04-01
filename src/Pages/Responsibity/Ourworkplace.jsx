import PagesLayout from '../../Components/Layout/PagesLayout';
import DefaultButton from '../../Components/Buttons/defaultButton';
import CarouselCard from '../../Components/Carousel/Carousel';

// Reusable header component
const SectionHeader = ({ title, className = '' }) => (
	<div className={`text-left mb-6 ${className}`}>
		<h1 className='text-3xl md:text-4xl playscript whitespace-pre-line'>
			{title}
		</h1>
		<div className='w-16 h-1 bg-[#ff8200] mt-2'></div>
	</div>
);

// Reusable content section with text and image side-by-side (reversible)
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
		} gap-8`}>
		<div className='flex-1'>
			<SectionHeader title={title} />
			<div className='text-base text-[#55565A]'>{children}</div>
		</div>
		<div className='flex-1 mb-10'>
			<img
				src={imageSrc}
				alt={imageAlt}
				className='w-full h-auto object-cover'
			/>
		</div>
	</div>
);

// Reusable overlay image section with an optional overlay
const OverlayImageSection = ({
	imageSrc,
	overlay = true,
	overlayOpacity = 'opacity-30',
	children,
	className = '',
}) => (
	<div
		className={`relative bg-center bg-cover h-[400px] flex-1 ${className}`}
		style={{
			backgroundImage: `url('${imageSrc}')`,
			backgroundRepeat: 'no-repeat',
		}}>
		{overlay && (
			<div
				className={`absolute inset-0 bg-gradient-to-b from-black ${overlayOpacity}`}></div>
		)}
		<div className='relative text-white p-8 md:p-16'>{children}</div>
	</div>
);

const OurWorkplace = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/Our-People.avif'
			heroHeading='Our Workplace'>
			<section>
				{/* Hero Statement */}
				<div className='bg-[#0f3557] flex items-center justify-center py-12 text-white playscript text-center px-4'>
					<h1 className='text-2xl md:text-3xl leading-9 font-medium'>
						Our culture is built on the belief that embracing a variety of
						perspectives and ideas <br />
						leads to better outcomes. Encouraging inclusivity – across
						businesses, seniority, <br />
						gender and culture – is just one way we accomplish this goal.
					</h1>
				</div>

				{/* Main Content Area */}
				<div className='bg-white py-16 flex flex-col gap-12 px-4 md:px-20'>
					<ContentSection
						title='Our Three Core Values'
						imageSrc='/Assets/Images/our-workplace-mediawtext.avif'
						imageAlt='Our Core Values'>
						<p>
							Our people are our most important asset. Brookfield invests in our
							people with a focus on each achieving their potential. The pillars
							of Brookfield’s culture revolve around our core values and
							underpin how we continue to uphold and develop a diverse and
							inclusive workplace.
						</p>
					</ContentSection>

					<ContentSection
						title='Diversity of Our People'
						imageSrc='/Assets/Images/diversity_FINAL.avif'
						imageAlt='Diversity at Brookfield'>
						<div className='flex flex-col gap-3'>
							<p className='font-bold text-[20px] leading-7'>
								Our approach to diversity, equity and inclusion is deliberate
								and integrated into our human capital development processes and
								initiatives.
							</p>
							<p className='text-[20px] leading-7'>
								At Brookfield, women comprise:
							</p>
							<ul className='list-disc ml-6 flex flex-col gap-1'>
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

				{/* Two Image Section */}
				<div className='flex flex-col md:flex-row gap-4 px-4 md:px-20'>
					<OverlayImageSection
						imageSrc='/Assets/Images/Creating-Value-through-Sustainability-Measurement-hero-1600x600.avif'
						overlay={true}
						overlayOpacity='opacity-25'>
						<SectionHeader title='Our 2023 Sustainability Report' />
						<p className='mb-4'>
							Download our latest report to learn more about our sustainability
							approach <br /> and initiatives.
						</p>
						<DefaultButton
							text='View the Report'
							arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
							link='/responsibility/sustainability-resources'
							textColor='#ffffff'
							borderColor='#ffffff'
							backgroundColor='transparent'
							hoverOverlayColor='rgba(255, 255, 255, 0.2)'
						/>
					</OverlayImageSection>

					<OverlayImageSection
						imageSrc='/Assets/Images/Internal-Mobility-1600.avif'
						overlay={false}>
						<h1 className='text-3xl md:text-4xl playscript whitespace-pre-line mb-4'>
							Investing in Our People: Hiring & Internal Mobility
						</h1>
						<p className='whitespace-pre-line mb-2'>
							{`We proactively seek candidates who are aligned with 
attributes of a Brookfield leader and have the potential to 
develop within the organization. This includes a focus on 
diverse representation of candidates in our recruitment process.`}
						</p>
						<p className='whitespace-pre-line'>
							{`We proactively seek candidates who are aligned with 
attributes of a Brookfield leader and have the potential to 
develop within the organization. This includes a focus on 
diverse representation of candidates in our recruitment process.`}
						</p>
					</OverlayImageSection>
				</div>

				{/* Employee Resource Groups */}
				<div className='px-4 md:px-20 mt-14'>
					<div className='mb-10'>
						<SectionHeader
							title='Employee Resource Groups'
							className='mb-8'
						/>
						<p className='text-lg leading-[26px]'>
							Brookfield has employee resource groups that reinforce an
							inclusive workplace and sense of community, <br />
							provide volunteer and networking opportunities and share best
							practices globally.
						</p>
					</div>
					<CarouselCard />
				</div>

				{/* Additional Sustainability Resources CTA */}
				<div className='bg-[#dbe4ec] px-4 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-2xl leading-[33px] font-semibold'>
						Additional Sustainability Resources
					</p>
					<DefaultButton
						text='Learn More'
						arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
						link='/responsibility/sustainability-resources'
						textColor='#FFFFFF'
						borderColor='#0f3557'
						backgroundColor='#0f3557'
						hoverOverlayColor='rgba(255, 255, 255, 0.2)'
					/>
				</div>
			</section>
		</PagesLayout>
	);
};

export default OurWorkplace;
