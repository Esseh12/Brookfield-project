import PagesLayout from '../../Components/Layout/PagesLayout';
import ReusableSection from '../../Components/Layout/ReusableHero';
import DefaultButton from '../../Components/Buttons/DefaultButton';
import ReusableAccordion from '../../Components/Accordion/Accordion';
import CarouselCard from '../../Components/Carousel/Carousel';

const HeroSection = () => (
	<section className='bg-[#0f3557] text-white py-14 px-10 md:px-14 md:pl-28'>
		<div className='container mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-20'>
			<img
				className='w-72 h-auto'
				src='/Assets/Images/Report-Cover-Photo.avif'
				alt='Report Cover Photo'
			/>
			<div className='flex flex-col gap-5 text-center md:text-left'>
				<h1 className='text-2xl font-semibold'>
					Our 2023 Sustainability Report
				</h1>
				<p className='text-lg leading-6'>
					Download our latest report to learn more about our <br />{' '}
					sustainability approach and initiatives.
				</p>
			</div>
			<div>
				<DefaultButton
					text='View The Report'
					arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
					link='/responsibility/2023-sustainability-report'
					textColor='#FFFFFF'
					borderColor='#FFFFFF'
					hoverOverlayColor='rgba(255, 255, 255, 0.2)'
				/>
			</div>
		</div>
	</section>
);

const QuoteSection = () => (
	<section
		className='relative bg-cover bg-center text-white py-16 px-4 md:px-0'
		style={{ backgroundImage: "url('/Assets/Images/quote-bg-mobile.avif')" }}>
		<div className='container mx-auto text-center'>
			<h2 className='text-3xl font-bold mb-4'>
				“We believe that value creation and sustainable development are
				complementary goals.”
			</h2>
			<p className='text-lg'>— Bruce Flatt, Chief Executive Officer</p>
		</div>
	</section>
);

const SustainabilityPrinciples = () => {
	const principles = [
		{
			title: 'Mitigate the impact of our operations on the environment',
			details: [
				'Strive to minimize the environmental impact of operations and improve our efficient use of resources over time.',
				'Support the goal of reaching net-zero greenhouse gas (GHG) emissions by 2050 or sooner.',
			],
		},
		{
			title: 'Strive to ensure the well-being and safety of employees',
			details: [
				'Foster a positive work environment based on respect for human rights, valuing diversity, and having zero tolerance for workplace discrimination, violence, or harassment.',
				'Operate with leading health and safety practices to support the goal of achieving zero serious safety incidents.',
			],
		},
		{
			title: 'Uphold strong governance practices',
			details: [
				'Operate to the highest ethical standards by conducting business activities in accordance with our Code of Business Conduct and Ethics.',
				'Maintain strong stakeholder relationships through transparency and active engagement.',
			],
		},
		{
			title: 'Be good corporate citizens',
			details: [
				'Seek to ensure the interests, safety, and well-being of the communities in which we operate are integrated into our business decisions.',
				'Support philanthropy and volunteerism by our employees.',
			],
		},
	];

	return (
		<section className='bg-white py-16 px-4 md:px-0'>
			<div className='container mx-auto'>
				<div className='text-center md:text-left mb-10'>
					<h1 className='text-4xl font-playfair'>Sustainability at Tamsey</h1>
					<div className='w-16 h-1 bg-[#ff8200] mt-4 mx-auto md:mx-0'></div>
				</div>
				<p className='text-lg leading-8 text-center md:text-left mb-10'>
					Our sustainability strategy is centered on preserving and creating
					value for our investors and stakeholders—now and in the future.
				</p>
				<h2 className='text-base font-semibold text-[#55565A] mb-6'>
					OUR GUIDING SUSTAINABILITY PRINCIPLES
				</h2>
				<div className='space-y-4'>
					{principles.map((principle, index) => (
						<ReusableAccordion
							key={index}
							title={principle.title}
							accordionClassName=''
							summaryClassName='hover:bg-blue-100'
							detailsClassName='bg-white'>
							<div className='grid md:grid-cols-2 gap-5'>
								{principle.details.map((detail, idx) => (
									<p
										key={idx}
										className='text-[#55565A]'>
										{detail}
									</p>
								))}
							</div>
						</ReusableAccordion>
					))}
				</div>
			</div>
		</section>
	);
};

const NetZeroSection = () => {
	return (
		<ReusableSection
			backgroundImage='/Assets/Images/X-ELIO_Our Net Zero Commitment-1600.avif'
			title='Our Net-Zero Commitment'
			description={`We are aligned with the global goal of decarbonization and have set an ambition to achieve net zero across all our assets under management by 2050.`}
			dataAos='fade-up'
			overlayClassName='bg-gradient-to-b from-black to-white opacity-60'
			defaultButtonProps={{
				text: 'Learn More',
				arrowUrl:
					'https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg',
				link: '/responsibility/brookfields-net-zero-commitment',
				textColor: '#FFFFFF',
				borderColor: '#FFFFFF',
				hoverOverlayColor: 'rgba(255, 255, 255, 0.2)',
			}}
		/>
	);
};

const Partners = () => {
	return (
		<section className='bg-white py-16 px-4 md:px-0'>
			<div className='container mx-auto'>
				<div className='text-center md:text-left mb-10'>
					<h1 className='text-4xl font-playfair'>
						Affiliations and Partnerships
					</h1>
					<div className='w-16 h-1 bg-[#ff8200] mt-4 mx-auto md:mx-0'></div>
				</div>
				<p className='text-lg leading-[26px] text-[#0F3557] font-normal'>
					In support of advancing our sustainability efforts, we align and
					engage with sustainability frameworks and <br /> organizations.
				</p>
				{/* Add partner logos here */}
				<CarouselCard />
			</div>
		</section>
	);
};

const IntegratingSustainablity = () => {
	const principles = [
		{
			subTitle: 'Due Diligence',
			title:
				'We tailor sustainability due diligence to each investment and follow a structured \n  approach, leveraging relevant industry frameworks.',
			details: [
				'Seek to assess sustainability-related opportunities and risks and factor them into the overall \n investment decision.',
				'Leverage leading industry guidance to identify sustainability factors most likely to materially \n impact the financial condition or operating performance of companies in a sector.',
				'As part of our Sustainability Due Diligence Protocol, we provide specific guidance to \n  investment teams on assessing bribery and corruption, cybersecurity, health and safety, \n human rights, modern slavery and climate-related risks.',
				'Where warranted, perform deeper due diligence, working with internal experts and third-party \n  consultants.',
			],
		},
		{
			subTitle: 'Investment Committee Approval',
			title:
				'All potential investments must incorporate sustainability matters into their \n  evaluation and be approved by the Investment Committee.',
			details: [
				'Investment teams outline for the Committee the merits of each transaction and material risks, \n mitigants and significant opportunities for improvement, including those related to sustainability.',
			],
		},
		{
			subTitle: 'Ongoing Management',
			title:
				'Upon company acquisition, for assets where we have control, we create a tailored \n integration plan that includes any applicable material sustainability-related matters \n for review and execution.',
			details: [
				'It is the responsibility of the management teams within each portfolio company to manage \n sustainability risks and opportunities through the \n investment’s life cycle, supported by the applicable investment team.',
				'Management teams regularly report to their respective boards of directors from both financial \n and operating perspectives, including key performance indicators that incorporate material \n sustainability factors, such as health and safety, environmental management, compliance with \n regulatory requirements, and, increasingly, GHG emissions.',
			],
		},
		{
			subTitle: 'Exit',
			details: [
				'When preparing an asset for divestiture, we seek to outline potential value creation deriving \n from several different factors, including relevant sustainability considerations.',
				'Where applicable, we also prepare both qualitative and quantitative data that summarize the \n sustainability performance of the investment and provide a holistic understanding of how we \n have managed the investment during the holding period.',
			],
		},
	];

	return (
		<section className='bg-white py-16 px-4 md:px-0'>
			<div className='container mx-auto'>
				{/* Header */}
				<div className='text-center md:text-left mb-10'>
					<h1 className='text-4xl font-playfair'>
						Integrating Sustainability into Our Investment Process
					</h1>
					<div className='w-16 h-1 bg-[#ff8200] mt-4 mx-auto md:mx-0'></div>
				</div>

				{/* Intro text */}
				<p className='text-[22px] leading-8 text-center md:text-left mb-10'>
					We seek to embed material sustainability considerations and evaluate
					risks and value creation <br className='hidden md:block' />
					opportunities throughout our investment process. Following
					acquisition, we actively look to <br className='hidden md:block' />
					advance sustainability initiatives and improve sustainability
					performance in driving long-term <br className='hidden md:block' />
					value creation throughout the investment's life cycle. Our investment
					processes align with the PRI.
				</p>

				{/* Accordion list with reduced width */}
				<div className='space-y-4 max-w-3xl mr-auto'>
					{principles.map((principle, index) => (
						<ReusableAccordion
							key={index}
							subTitle={principle.subTitle}
							title={principle.title}
							accordionClassName=''
							summaryClassName='hover:bg-blue-100'
							detailsClassName='bg-white'>
							<ul className='list-disc pl-8'>
								{principle.details.map((detail, idx) => (
									<li
										key={idx}
										className='text-[#55565A] mt-2 whitespace-pre-line'>
										{detail}
									</li>
								))}
							</ul>
						</ReusableAccordion>
					))}
				</div>
			</div>
		</section>
	);
};

const OurPeople = () => {
	return (
		<ReusableSection
			backgroundImage='/Assets/Images/Our-People.avif'
			title='Our People'
			description={`Culture is what defines Brookfield, and our culture has been critical to our success. It reinforces strong  succession and ensures that we maintain an \n engaged workforce. Our employees drive our success and ensure that we deliver on our commitments to investors and other stakeholders. We seek to \n  create a positive, open and inclusive work environment that enables employees to develop. The experiences our people receive at Brookfield keep them \n engaged and developing professionally. `}
			dataAos='fade-up'
			overlayClassName='bg-gradient-to-b from-black to-black opacity-40'
			defaultButtonProps={{
				text: 'Learn More',
				arrowUrl:
					'https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg',
				link: '/responsibility/our-workplace',
				textColor: '#FFFFFF',
				borderColor: '#FFFFFF',
				hoverOverlayColor: 'rgba(255, 255, 255, 0.2)',
			}}
			descriptionClassName='whitespace-pre-line'
		/>
	);
};

const SustainabilityInAction = () => {
	return (
		<section className='bg-white py-16 px-4 md:px-0'>
			<div className='container mx-auto'>
				<div className='text-center md:text-left mb-5'>
					<h1 className='text-3xl font-playfair'>Sustainability in Action</h1>
				</div>
				{/* Add partner logos here */}
				<CarouselCard />
			</div>
		</section>
	);
};

const SustainabilityResources = () => {
	return (
		<section className='bg-[#dbe4ec] py-16 px-4 md:px-0'>
			<div className='container mx-auto flex justify-between items-center flex-col md:flex-row md:pr-28'>
				<div className='text-center md:text-left mb-10'>
					<h1 className='text-2xl font-playfair mb-10'>
						Additional Sustainability Resources
					</h1>
					<p className='text-lg leading-[26px] text-[#0F3557] font-normal'>
						Our approach to sustainability is vital to the success of our <br />
						business. Our additional sustainability resources are available{' '}
						<br />
						to further demonstrate our ongoing efforts.
					</p>
				</div>
				<div>
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
			</div>
		</section>
	);
};

const Responsibility = () => (
	<PagesLayout
		heroImage='/Assets/Images/Report Cover Photo-1600.avif'
		heroHeading='Responsibility'>
		<HeroSection />
		<QuoteSection />
		<SustainabilityPrinciples />
		<NetZeroSection />
		<Partners />
		<IntegratingSustainablity />
		<OurPeople />
		<SustainabilityInAction />
		<SustainabilityResources />
	</PagesLayout>
);

export default Responsibility;
