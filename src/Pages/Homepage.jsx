import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HomepageHero from '../Components/Homepage.jsx/Hero';
import HomeAbout from '../Components/Homepage.jsx/HomeAbout';
import HomeVideo from '../Components/Homepage.jsx/HomeVideo';
import Highlights from '../Components/Homepage.jsx/Hightlights';
import BottomHero from '../Components/Homepage.jsx/BottomHero';
import Footer from '../Components/Footer';

const Homepage = () => {
	return (
		<>
			<Navbar>
				{/* Use <Link> from react-router-dom instead of <a> */}
				<Link
					to='/about'
					className='hover:underline text-sm font-medium'>
					About Us
				</Link>
				<Link
					to='/responsibility'
					className='hover:underline text-sm font-medium'>
					Responsibility
				</Link>
				<Link
					to='/businesses'
					className='hover:underline text-sm font-medium'>
					Businesses
				</Link>
				<Link
					to='/careers'
					className='hover:underline text-sm font-medium'>
					Careers
				</Link>
				<Link
					to='/news'
					className='hover:underline text-sm font-medium'>
					News & Insights
				</Link>
				<span className='hidden sm:block w-px h-6 bg-current' />
				<Link
					to='/investors'
					className='hover:underline text-sm font-medium'>
					Investors
				</Link>

				<Link
					to='/login'
					className='hover:underline text-sm font-medium'>
					LP Login
				</Link>
			</Navbar>

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
