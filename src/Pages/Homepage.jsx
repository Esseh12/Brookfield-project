import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HomepageHero from '../Components/Homepage.jsx/Hero';
import HomeAbout from '../Components/Homepage.jsx/HomeAbout';
import HomeVideo from '../Components/Homepage.jsx/HomeVideo';
import Highlights from '../Components/Homepage.jsx/Hightlights';
import BottomHero from '../Components/Homepage.jsx/BottomHero';
import Footer from '../Components/Footer';

const Homepage = () => {
	// Define navItems to be passed to Navbar
	const navItems = [
		{
			label: 'About Us',
			href: '#',
			dropdownItems: [
				{ label: 'Who We Are', href: '/about-us/who-we-are' },
				{ label: 'Global Presence', href: '/about-us/global-presence' },
				{ label: 'Leadership', href: '/about-us/leadership' },
			],
		},
		{ label: 'Responsibility', href: '/responsibility' },
		{ label: 'Businesses', href: '/businesses' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'News & Insights', href: '/news' },
		{ label: 'Investors', href: '/investors' },
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
