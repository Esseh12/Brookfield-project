import PagesLayout from '../../Components/Layout/PagesLayout';
import FeatureCards from './Components/FeatureCards';
import OverviewSection from './Components/Overview';
import QuickNav from './Components/QuickNavs';
import Sectors from './Components/Sectors';
import { MdOutlineWindPower } from 'react-icons/md';
import { PiSolarPanelThin } from 'react-icons/pi';
import { LuEarthLock } from 'react-icons/lu';
import { FaWater, FaSun } from 'react-icons/fa';
import PortfolioHighlights from './Components/HighlightPortfolio';
// -------------------
// Reusable Components
// -------------------

const RealEstate = () => {
	const sectorsData = [
		{
			icon: FaWater,
			title: 'Hydro',
			description:
				'Our hydro power facilities are perpetual assets, providing reliable clean energy and storage capacity to support decarbonizing grids.',
		},
		{
			icon: MdOutlineWindPower,
			title: 'Wind',
			description:
				'Our growing wind portfolio is diversified across attractive power markets in North America, South America, Europe, and Asia, both onshore and offshore.',
		},
		{
			icon: FaSun,
			title: 'Solar',
			description:
				'One of the fastest-growing sources of renewable energy, utility-scale solar offers diverse and scalable applications.',
		},
		{
			icon: FaWater,
			title: 'Hydro',
			description:
				'Our hydro power facilities are perpetual assets, providing reliable clean energy and storage capacity to support decarbonizing grids.',
		},
		{
			icon: MdOutlineWindPower,
			title: 'Wind',
			description:
				'Our growing wind portfolio is diversified across attractive power markets in North America, South America, Europe, and Asia, both onshore and offshore.',
		},
		{
			icon: FaSun,
			title: 'Solar',
			description:
				'One of the fastest-growing sources of renewable energy, utility-scale solar offers diverse and scalable applications.',
		},
	];
	const cardsData = [
		{
			image: '/Assets/Images/desktop_-_v1.avif',
			title: 'Outlook & Opportunities',
			description:
				'Explore our latest insights across global real estate markets, with outlooks from our business leaders.',
			buttonText: 'Learn More',
		},
		{
			image: '/Assets/Images/10671-bsi-paper_hero_header-1600x600.avif',
			title: 'Brookfield Real Estate 2023 Sustainability Report',
			description:
				'Embracing sustainability helps us reimagine the future of real estate and build a better world for our neighbors, our planet, and our business. Learn more about our approach to ESG in our 2023 Sustainability Report.',
			buttonText: 'Read The Report',
		},
		// Additional cards if needed...
	];

	// Text strings for the left and right sections
	const leftText =
		'As one of the world’s largest and most successful real estate investors we take a simple and consistent approach, investing in high-quality assets for value. Our deep operating expertise allows us to spot trends in real time and enhance efficiencies to consistently deliver strong returns for our investors through market cycles.';
	const rightText =
		'We build, own and actively manage institutional-quality real estate companies and platforms that manage high-quality assets diversified across real estate sectors and geographies.';

	// Array of stat objects
	const stats = [
		{ prefix: '$', value: 271, suffix: 'B', label: 'Assets Under Management' },
		{ prefix: '~', value: 25000, label: 'OPERATING EMPLOYEES' },
		{ value: 500, suffix: 'M+', label: 'OPERATING EMPLOYEES' },
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/1920 x 300.avif'
			heroHeading='Real Estate'>
			<section>
				<QuickNav />
				<OverviewSection
					leftText={leftText}
					rightText={rightText}
					stats={stats}
				/>
				<FeatureCards cardsData={cardsData} />
				<Sectors sectors={sectorsData} />
				<PortfolioHighlights />
			</section>
		</PagesLayout>
	);
};

export default RealEstate;
