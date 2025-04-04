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

const Infrastructure = () => {
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
			image: '/Assets/Images/infrastructure_focus2.avif',
			title: 'Investing in the Infrastructure Supercycle',
			description:
				'Explore our latest insights on the macro forces driving infrastructure development.',
			buttonText: 'Learn More',
		},
		{
			image: '/Assets/Images/intranet_definingcoreinfra.avif',
			title: 'Not All Infrastructure is Created Equal: Defining ‘Core’',
			description:
				'A lower-risk core infrastructure strategy should deliver a consistent cash yield with attractive risk-adjusted returns—regardless of economic cycles.',
			buttonText: 'Read The Report',
		},
		// Additional cards if needed...
	];

	// Text strings for the left and right sections
	const leftText =
		'We are one of the world’s largest infrastructure investors. We own and operate assets across the transport, data, utilities and midstream sectors with a focus on cash flow stability and resilience. Our portfolio, grounded in 120 years of investment experience, provides diversified exposure to scarce, high-quality businesses with significant barriers to entry.';
	const rightText =
		'We invest in infrastructure assets that deliver essential goods and services—from the movement of passengers and freight over toll roads and rail networks to the distribution of products through ports and pipelines, and much more.';

	// Array of stat objects
	const stats = [
		{ prefix: '$', value: 202, suffix: 'B', label: 'Assets Under Management' },
		{ value: 61000, label: 'Operating Employees' },
		{ value: 220, label: 'PROFESSIONALS' },
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/renewable-hero-wind-gradient.avif'
			heroHeading='Renewable Power & Transition'>
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

export default Infrastructure;
