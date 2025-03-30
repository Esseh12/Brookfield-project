import React from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';
import ReusableAccordion from '../../Components/Accordion/Accordion';
import DefaultButton from '../../Components/Buttons/defaultButton';

// Reusable header component
const SectionHeader = ({ title }) => (
	<div className='text-left mb-10'>
		<h1 className='text-3xl md:text-4xl playscript'>{title}</h1>
		<div className='w-16 h-1 bg-[#ff8200] mt-4 mx-0'></div>
	</div>
);

// Reusable paragraph component
const Paragraph = ({ children }) => (
	<p className='text-base md:text-[22px] leading-[34px]'>{children}</p>
);

// Reusable decarbonization focus section
const DecarbonizationFocus = ({ heading, content }) => (
	<div className='mb-10'>
		<h3 className='text-[22px] font-bold leading-[34px] mb-4'>{heading}</h3>
		<Paragraph>{content}</Paragraph>
	</div>
);

const SustainabilityPrinciples = () => {
	const principles = [
		{
			title: 'We Will Help Accelerate the Transition to Net Zero',
			details: [
				'We will catalyze companies onto net-zero pathways aligned with the Paris Agreement through our global transition investment strategy, focusing specifically on investments that will accelerate the transition to a net-zero carbon economy.',
			],
		},
		{
			title: 'We Will Collaborate',
			details: [
				'We will work with leading private-sector initiatives to advance the role of finance in supporting the economy-wide transition, to accelerate capital flows consistent with the Paris Agreement and to promote widespread adoption of decision-useful methodologies to support credible transition planning, analysis and investing.',
			],
		},
		{
			title: 'We Are Committed to Transparency',
			details: [
				'We will track and report GHG emissions consistent with GHG Protocol and PCAF standards.',
				'We will publish decarbonization plans every five years consistent with the Paris Agreement.',
				'We continue to align our business with the TCFD recommendations and have published our inaugural TCFD disclosures in our 2022 Sustainability Report.',
			],
		},
		{
			title: 'We Will Continue to Pursue Industry-Leading Returns',
			details: [
				'We will continue to pursue industry-leading returns for our investors, consistent with our long track record of building the backbone of a more sustainable global economy.',
			],
		},
	];

	return (
		<section className='bg-white py-16 px-4 md:px-0'>
			<div className='container mx-auto'>
				<div className='space-y-4 max-w-3xl mr-auto'>
					{principles.map((principle, index) => (
						<ReusableAccordion
							key={index}
							title={principle.title}
							accordionClassName=''
							summaryClassName='hover:bg-blue-100'
							detailsClassName='bg-white'>
							<div className='grid gap-5'>
								{principle.details.map((detail, idx) => (
									<p
										key={idx}
										className='text-[#55565A] whitespace-pre-line'>
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

const Responsibility = () => {
	return (
		<section className='bg-white py-16 px-4 md:px-0'>
			<div className='container mx-auto'>
				<h1 className='text-2xl leading-8 font-semibold mb-6'>
					Responsibility at Brookfield
				</h1>
				<div className='flex flex-col md:flex-row justify-between gap-4'>
					<p className='text-lg leading-6'>
						See an overview of our sustainability perspectives and practices as{' '}
						<br className='hidden md:block' />
						well as our most recent Sustainability report.
					</p>
					<div>
						<DefaultButton
							text='Responsibility Overview'
							arrowUrl='https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-white.svg'
							link='/responsibility/sustainability-resources'
							textColor='#FFFFFF'
							borderColor='#0f3557'
							backgroundColor='#0f3557'
							hoverOverlayColor='rgba(255, 255, 255, 0.2)'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const AssetManagement = () => {
	return (
		<section className='bg-[#0f3557] py-14 px-4 md:px-20'>
			<div className='container mx-auto md:text-left'>
				<h1 className='text-2xl leading-8 font-semibold text-white mb-6'>
					Net Zero Asset Managers (NZAM) Initiative Interim <br /> Progress
					Report
				</h1>
				<div className='flex flex-col md:flex-row justify-between gap-6'>
					<p className='text-white'>
						An outline of Brookfield’s commitment to the NZAM initiative and
						progress <br className='hidden md:block' />
						towards our goal of net-zero GHG emissions by 2050 or sooner.
					</p>
					<div>
						<DefaultButton
							text='Download The Report'
							arrowUrl='/Assets/Images/btn-arrow-blue.svg'
							link='/Assets/Document/Brookfield_NZAM_Interim_Progress_Report_2023.pdf'
							textColor='#0f3557'
							borderColor='#0f3557'
							backgroundColor='#dbe4ec'
							hoverOverlayColor='rgba(255, 255, 255, 0.2)'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const EndSection = () => {
	return (
		<section className='py-14 px-4 md:px-20 pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col gap-4 justify-center'>
					<p className='text-[10px] leading-3.5 font-medium text-[#55565A]'>
						1 Aligning our focus to where Brookfield has the ability to drive
						outcomes, Operationally Managed Investments are defined as all
						investments where Brookfield has control or significant influence, a
						transition mandate or otherwise has a level of governance rights to
						influence outcomes. We actively consider these assets for NZAM
						purposes. They represent $631 billion of AUM as of December 31,
						2023.
					</p>
					<p className='text-[10px] leading-3.5 font-medium text-[#55565A]'>
						2 Aligning our focus to where Brookfield has the ability to drive
						outcomes, Operationally Managed Investments are defined as all
						investments where Brookfield has control or significant influence, a
						transition mandate or otherwise has a level of governance rights to
						influence outcomes. We actively consider these assets for NZAM
						purposes. They represent $631 billion of AUM as of December 31,
						2023.
					</p>
					<p className='text-[10px] leading-3.5 font-medium text-[#55565A]'>
						3 Expressed as a percentage of Operationally Managed AUM as of
						December 31, 2023, or 40% only excluding Oaktree and our Insurance
						Solutions channel.
					</p>
					<p className='text-[10px] leading-3.5 font-medium text-[#55565A]'>
						4 Applicable to Operationally Managed investments.
					</p>
				</div>
			</div>
		</section>
	);
};

const NetZeroCommitment = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/X-ELIO_Our Net Zero Commitment-1600.avif'
			heroHeading="Tamsey's Net Zero Commitment">
			<section className='pt-20 pb-20'>
				<div className='container mx-auto px-4 md:px-16'>
					<SectionHeader title='We are aligned with the worldwide goal to limit global warming and have set an ambition to achieve net zero by 2050.' />
					<div className='mt-10 flex flex-col gap-14'>
						<Paragraph>
							We became a signatory to NZAM in 2021, joining an international
							group of asset managers committed, consistent with fiduciary
							duties to clients and beneficiaries, to supporting the goal of net
							zero emissions by 2050 or sooner. This ambition is in line with
							global efforts to limit warming to well-below 2 degrees Celsius
							and to support investment aligned with net zero emissions by 2050
							or sooner.
						</Paragraph>
						<Paragraph>
							We agreed to set an interim target for a portion of our AUM with
							the ambition to reduce emissions by 50% by 2030, as well as review
							our interim target at least every five years. Additionally, our
							ambition includes an objective to increase the proportion of AUM
							covered until 100% of Operationally Managed investments are
							included. Our interim emissions target comprises assets across our
							business groups, including Renewable Power & Transition,
							Infrastructure, Private Equity and Real Estate. For our in-scope
							assets, we seek to align interim targets for 2030, consistent with
							a fair share of the approximate 50% global reduction in
							emissions—identified as a requirement in the IPCC special report
							on global warming of 1.5°C. We originally set $147 billion of
							assets on a path to net zero emissions by 2050 from a 2020 base
							year. In 2022, we increased our target to $201 billion. We shared
							our progress on adding additional assets to our interim target in
							our January 2024 NZAM Interim Progress Report.
						</Paragraph>
						<Paragraph>
							Since the beginning of 2023, AUM for our business has grown by
							$126 billion, of which we currently expect to add $62 billion of
							assets to our NZAM interim target, which would bring our NZAM
							in-scope assets to $263 billion (approximately 42% of
							Operationally Managed AUM).
						</Paragraph>
						<Paragraph>
							While Brookfield progresses towards its 2030 interim target, we
							note that Brookfield’s ability to decarbonize its portfolio relies
							in part on the rest of the economy transitioning at a pace aligned
							with countries’ goals and the Paris agreement. We observe that the
							path to net zero may not always be linear or binary.
						</Paragraph>
						<DecarbonizationFocus
							heading='Our Decarbonization Focus Over Time'
							content='Our approach is underpinned by a recognition that achieving net zero by 2050 or sooner requires significant collaboration between companies, governments and individuals. As our assets develop their decarbonization plans, we seek to progress them toward or align them to science-based pathways, enabling us to increase the scope of assets included in our NZAM interim target. Today, assets within our interim target represent only a portion of our total assets; over time, we aim to place all of our Operationally Managed portfolio companies on a decarbonization journey.'
						/>
					</div>
					<SustainabilityPrinciples />
					<Responsibility />
				</div>
				<AssetManagement />
				<EndSection />
			</section>
		</PagesLayout>
	);
};

export default NetZeroCommitment;
