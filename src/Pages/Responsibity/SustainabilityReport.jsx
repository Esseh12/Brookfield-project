import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from './Components/Hero';
import { FeatureContent } from '../../Components/NavbarDropdown';
import SidebarMenu from './Components/SidebarMenu';
import EmissionsSection from './Components/EmissionSection';
import CaseStudies from './Components/CaseStudies';
import ApproachSection from './Components/ApproachSection';
import ClosingSection from './Components/ClosingSection';

const SustainabilityReport = () => {
	// Define navItems for Navbar
	const navItems = [
		{
			label: 'About Us',
			href: '#',
			dropdownItems: [
				{ label: 'Who We Are', href: '/about-us/who-we-are' },
				{ label: 'Global Presence', href: '/about-us/global-presence' },
				{ label: 'Leadership', href: '/about-us/leadership' },
			],
			rightContent: (
				<FeatureContent
					image='/Assets/Images/brookfield-logo-nav-icon.avif'
					title='About Tamsey Finance Inc'
					description='Learn about our heritage, values, and global impact in the financial industry.'
					linkText='Our History'
					linkUrl='/about-us/history'
				/>
			),
		},
		{
			label: 'Responsibility',
			href: '#',
			dropdownItems: [
				{ label: 'Overview', href: '/responsibility' },
				{
					label: 'Sustainability Report',
					href: '/responsibility/2023-sustainability-report',
				},
				{
					label: 'Our Net Zero Commitment',
					href: '/responsibility/tamseys-net-zero-commitment',
				},
				{
					label: 'Our Workplace',
					href: '/responsibility/our-workplace',
				},
				{
					label: 'Sustainabilty Resources',
					href: '/responsibility/sustainability-resources',
				},
			],
			rightContent: (
				<FeatureContent
					image='/Assets/Images/Report-Cover-Photo.avif'
					title='2023 Sustainability Report'
					description='Learn about our heritage, values, and global impact in the financial industry.'
					linkText='View Now'
					linkUrl='/about-us/history'
				/>
			),
		},
		{
			label: 'Businesses',
			href: '/businesses',
			dropdownItems: [
				{ label: 'Investment Banking', href: '/businesses/investment-banking' },
				{ label: 'Asset Management', href: '/businesses/asset-management' },
				{ label: 'Wealth Management', href: '/businesses/wealth-management' },
			],
			rightContent: (
				<FeatureContent
					title='Our Business Divisions'
					description='Discover our comprehensive suite of financial services and solutions.'
					linkText='Explore All Services'
					linkUrl='/businesses/all'
				/>
			),
		},
		{
			label: 'Careers',
			href: '#',
			dropdownItems: [
				{ label: 'Student Programs', href: '/careers/student-programs' },
				{
					label: 'Open Oppurtunities',
					href: '/careers/opportunities',
				},
				{
					label: 'Our Net Zero Commitment',
					href: '/responsibility/tamseys-net-zero-commitment',
				},
			],
		},
		{
			label: 'News & Insights',
			href: '',
			dropdownItems: [
				{ label: 'Insights', href: '/news-insights/insights' },
				{
					label: 'Podcasts',
					href: '/news-insights/podcasts/brookfield-perspectives',
				},
				{ label: 'Newsroom', href: '/news-insights/newsroom' },
			],
			rightContent: (
				<FeatureContent
					image='/Assets/Images/bn-annual-report-2024--tout.avif'
					title='BN 2024 Annual Report'
					linkText='View More'
					linkUrl='#'
				/>
			),
		},
		{
			label: 'Investors',
			href: '/investors',
			dropdownItems: [
				{ label: 'Financial Results', href: '/investors/financial-results' },
				{ label: 'Annual Reports', href: '/investors/annual-reports' },
				{ label: 'Investor Events', href: '/investors/events' },
			],
			rightContent: (
				<FeatureContent
					title='Investor Relations'
					description='Access our financial information, earnings reports, and shareholder resources.'
					linkText='Investor Resources'
					linkUrl='/investors/resources'
				/>
			),
		},
		{ label: 'LP Login', href: '/login' },
	];

	return (
		<>
			<section>
				<Navbar navItems={navItems} />
				<div className='relative'>
					<SidebarMenu />
					<Hero />
					<EmissionsSection />
					<CaseStudies />
					<ApproachSection />
					<ClosingSection />
				</div>

				<Footer />
			</section>
		</>
	);
};
export default SustainabilityReport;
