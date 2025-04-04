import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { FeatureContent } from '../Components/NavbarDropdown';
import HomepageHero from '../Components/Homepage.jsx/Hero';
import HomeAbout from '../Components/Homepage.jsx/HomeAbout';
import HomeVideo from '../Components/Homepage.jsx/HomeVideo';
import Highlights from '../Components/Homepage.jsx/Hightlights';
import BottomHero from '../Components/Homepage.jsx/BottomHero';
import Footer from '../Components/Footer';

const Homepage = () => {
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
					linkText='Learn More'
					linkUrl='#'
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
					linkUrl='/responsibility/2023-sustainability-report'
				/>
			),
		},
		{
			label: 'Businesses',
			href: '#',

			leftItems: [
				{
					label: 'Tamsey Wealth Solutions',
					toggleable: true,
					rightContent: (
						<div className='flex flex-col space-y-2'>
							<Link
								className=' text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/renewable-power-transition'>
								Renewable Power And Transition
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/infrastructure'>
								Infrastructure
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/private-equity'>
								Private Equity
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/real-estate'>
								Real Estate
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/credit'>
								Credit
							</Link>
						</div>
					),
				},
				{
					label: 'Tamsey Asset Management',
					href: '/businesses/asset-management',
					toggleable: true,
					// When this left item is active, show only one link on the right
					rightContent: (
						<div className='flex flex-col'>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Retirement Services
							</Link>
						</div>
					),
				},
			],
			// A default rightContent can be provided if needed
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
				{ label: 'Open Opportunities', href: '/careers/opportunities' },
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
			href: '#',

			leftItems: [
				{
					label: 'Institutional Investor',
					toggleable: true,
					rightContent: (
						<div className='flex flex-col space-y-2'>
							<Link
								className=' text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/institutional-investors'>
								Private Market Solution
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/institutional-investors/public-securities'>
								Public Security Groups
							</Link>
						</div>
					),
				},
				{
					label: 'Financial Advisers',
					href: '#',
					toggleable: true,
					// When this left item is active, show only one link on the right
					rightContent: (
						<div className='flex flex-col'>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Brookfield Wealth Solutions
							</Link>
						</div>
					),
				},
				{
					label: 'Shareholder Services',
					href: '#',
					toggleable: true,
					// When this left item is active, show only one link on the right
					rightContent: (
						<div className='flex flex-col gap-4'>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Brookfield Corporation
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Brookfield Wealth Solutions
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Brookfield Infrastructure Partners
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Brookfield Renewable Partners
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Brookfield Business Partners
							</Link>
							<Link
								className='text-sm text-[#0f3557] hover:text-[#ff8200] font-semibold leading-[21px]'
								to='/our-businesses/retirement-services'>
								Others
							</Link>
						</div>
					),
				},
			],
		},
		{ label: 'LP Login', href: '/login' },
	];
	return (
		<>
			<Navbar
				navItems={navItems}
				logoText='Tamsey Finance Inc'
			/>

			{/* Hero Section */}
			<HomepageHero />
			<HomeAbout />
			<HomeVideo />
			<Highlights />
			<BottomHero />
			<Footer />
		</>
	);
};

export default Homepage;
