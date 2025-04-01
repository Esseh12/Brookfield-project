import React from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';
import DefaultButton from '../../Components/Buttons/defaultButton';
import { Link } from 'react-router-dom';

// Reusable report card component
const SustainabilityReportCard = ({
	imageSrc,
	altText,
	reportTitle,
	description,
	buttonText,
	buttonLink,
	buttonArrowUrl,
	textColor,
	borderColor,
	backgroundColor,
	hoverOverlayColor,
}) => {
	return (
		<div className='bg-[#dbe4ec] flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
			{/* Report Image */}
			<div className='flex-shrink-0'>
				<img
					src={imageSrc}
					alt={altText}
					className='w-full max-w-xs md:max-w-sm'
				/>
			</div>
			{/* Report Description */}
			<div className='flex flex-col gap-4 text-center md:text-left md:w-1/2'>
				<h1 className='font-semibold text-2xl md:text-3xl leading-tight'>
					{reportTitle}
				</h1>
				<p className='text-base md:text-lg'>
					{description.split('\n').map((line, index) => (
						<span key={index}>
							{line}
							<br />
						</span>
					))}
				</p>
			</div>
			{/* Call-to-Action Button */}
			<div className='flex-shrink-0'>
				<DefaultButton
					text={buttonText}
					arrowUrl={buttonArrowUrl}
					link={buttonLink}
					textColor={textColor}
					borderColor={borderColor}
					backgroundColor={backgroundColor}
					hoverOverlayColor={hoverOverlayColor}
				/>
			</div>
		</div>
	);
};

// Reusable accordion link section component
const AccordionLinkSection = ({
	sectionTitle,
	links = [],
	containerClassName = '',
	titleClassName = 'text-lg font-bold',
	linkClassName = '',
}) => {
	return (
		<div
			className={`max-w-4xl mr-auto mt-14 px-4 sm:px-8 md:px-16 lg:px-20 py-10 ${containerClassName}`}>
			{sectionTitle && <p className={titleClassName}>{sectionTitle}</p>}
			<div className='mt-5'>
				{links.map((link, index) => (
					<Link
						key={index}
						to={link.href}
						className={`group flex justify-between items-center border-t py-4 ${
							index === links.length - 1 ? 'border-b' : ''
						} ${linkClassName}`}>
						<p className='text-[#4D4D4D] font-semibold leading-[22px] group-hover:text-[#0f3557]'>
							{link.text}
						</p>
						<img
							src={link.icon || '/Assets/Images/pdf-icon.svg'}
							alt={link.alt || 'pdf icon'}
							className='w-5 h-5'
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

const SustainabilityResources = () => {
	// Data for the report section
	const reportData = {
		imageSrc: '/Assets/Images/Report-Cover-Photo.avif',
		altText: 'Report Cover Photo',
		reportTitle: 'Our 2023 Sustainability Report',
		description:
			'Download our latest report to learn more about our\nsustainability approach and initiatives.',
		buttonText: 'View The Report',
		buttonLink: '/responsibility/sustainability-resources',
		buttonArrowUrl:
			'https://www.brookfield.com/themes/custom/bf/assets/images/btn-arrow-blue.svg',
		textColor: '#0f3557',
		borderColor: '#0f3557',
		backgroundColor: 'transparent',
		hoverOverlayColor: 'rgba(255, 255, 255, 0.2)',
	};

	// Data for the accordion links section
	const accordionLinks = [
		{
			text: 'Net Zero Asset Managers (NZAM) initiative Interim Progress Report',
			href: '/Assets/Document/Brookfield_NZAM_Interim_Progress_Report_2023.pdf',
			icon: '/Assets/Images/pdf-icon.svg',
			alt: 'pdf icon',
		},
		{
			text: 'Sustainable Finance',
			href: '/Assets/Document/Brookfield_Asset_Management_Green_Bond_Framework.pdf',
			icon: '/Assets/Images/pdf-icon.svg',
			alt: 'pdf icon',
		},
		{
			text: 'Streamlined Energy and Carbon Reporting',
			href: '/Assets/Document/Streamlined Energy and Carbon Reporting.pdf',
			icon: '/Assets/Images/pdf-icon.svg',
			alt: 'pdf icon',
		},
		{
			text: 'UK TCFD Report',
			href: '/Assets/Document/UK-TCFD-Report.pdf',
			icon: '/Assets/Images/pdf-icon.svg',
			alt: 'pdf icon',
		},
	];

	const accordionLinks2 = [
		{
			text: 'Positive Work Environment Policy',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Modern Slavery Statement',
			href: '/Assets/Document/Modern Slavery Statement_BAM.pdf',
			icon: '/Assets/Images/pdf-icon.svg',
			alt: 'pdf icon',
		},
	];

	const accordionLinks3 = [
		{
			text: 'Sustainability Policy',
			href: '/Assets/Document/Sustainability Policy_BAM.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Code of Business Conduct and Ethics',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Anti-Bribery and Corruption Program',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Personal Trading Policy',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Business Continuity and Crisis Management Plan',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Whistleblowing Policy',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Vendor Code of Conduct',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Proxy Voting Guidelines',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'European Union Sustainable Finance Disclosure Regulation',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Positive Work Environment Policy',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Stewardship Code',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			alt: 'pdf icon',
		},
		{
			text: 'Additional Governance Documents',
			href: '/Assets/Document/Positive Work Environment Policy.pdf',
			icon: '/Assets/Images/link-icon.svg',
			alt: 'pdf icon',
		},
	];

	const accordionLinks4 = [
		{
			text: '2020 ESG Report',
			href: '/Assets/Document/2020_ESG_Report.pdf',
			alt: 'pdf icon',
		},
		{
			text: '2021 ESG Report',
			href: '/Assets/Document/bam_esg_report_2021_final_2.pdf',
			alt: 'pdf icon',
		},
		{
			text: '2022 Sustainability Report',
			href: '/Assets/Document/BAM-2022-Sustainability-Report.pdf',
			alt: 'pdf icon',
		},
	];

	return (
		<PagesLayout heroHeading='Sustainability Resources'>
			<section>
				<SustainabilityReportCard {...reportData} />
				<AccordionLinkSection
					sectionTitle='ENVIRONMENTAL'
					links={accordionLinks}
				/>
				<AccordionLinkSection
					sectionTitle='SOCIAL'
					links={accordionLinks2}
				/>
				<AccordionLinkSection
					sectionTitle='GOVERNANCE'
					links={accordionLinks3}
				/>
				<AccordionLinkSection
					sectionTitle='Historical Reports'
					links={accordionLinks4}
				/>
			</section>
		</PagesLayout>
	);
};

export default SustainabilityResources;
