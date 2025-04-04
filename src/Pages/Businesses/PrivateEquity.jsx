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

const PrivateEquity = () => {
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
	];
	const cardsData = [
		{
			image: '/Assets/Images/pe-sample-hero.avif',
			title: 'Our Approach to Private Equity',
			description:
				'Brookfield has an established three-pronged approach to private equity investing. ',
			buttonText: 'Learn More',
		},
		{
			image: '/Assets/Images/10671-bsi-paper_hero_header-1600x600.avif',
			title: 'The Appeal of Flexible Capital Solutions',
			description:
				'Flexible capital offers an attractive solution for companies and investors alike—and expands the universe of solutions across private debt and private equity. ',
			buttonText: 'Read The Report',
		},
		// Additional cards if needed...
	];

	// Text strings for the left and right sections
	const leftText =
		'We are a large-scale global investor focused on acquiring high-quality businesses that provide essential products and services. Our global integrated team of investment and operations professionals is dedicated to creating value and enhancing cash flows by driving operational improvements. ';
	const rightText = '';

	// Array of stat objects
	const stats = [
		{ prefix: '$', value: 145, suffix: 'B', label: 'Assets Under Management' },
		{ value: 170, label: 'INVESTMENT PROFESSIONALS' },
		{ value: 142000, label: 'OPERATING EMPLOYEES' },
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/pe-hero-brk-center.avif'
			heroHeading='Private Equity'>
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

export default PrivateEquity;
