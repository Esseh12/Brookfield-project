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

const RenewablePowerTransition = () => {
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
			icon: PiSolarPanelThin,
			title: 'Distributed Energy & Storage',
			description:
				'Our on-site solar and storage portfolio offers companies access to power at the point of consumption, reducing costs, increasing resilience, and contributing to their decarbonization goals.',
		},
		{
			icon: LuEarthLock,
			title: 'Sustainable Solutions',
			description:
				'Our sustainable solutions portfolio is comprised of assets and businesses that enable the transition and includes our investment in Westinghouse and utility operations focused on decarbonization across the Caribbean and Latin America.',
		},
	];
	const cardsData = [
		{
			image: 'https://ext.same-assets.com/1363139131/521446466.jpeg',
			title: 'Turbocharging the Transition',
			description:
				'Explore our latest insights on how the global transition to net zero can deliver strong risk-adjusted returns and positive environmental impact.',
			buttonText: 'Learn More',
		},
		{
			image: 'https://ext.same-assets.com/1363139131/2540248651.jpeg',
			title: 'Brookfield Renewable 2023 Sustainability Report',
			description:
				'Learn more about our strategy to accelerate the energy transition in a responsible manner. This report outlines our progress and goals and includes our disclosures against the TCFD recommendations.',
			buttonText: 'Read The Report',
		},
		// Additional cards if needed...
	];

	// Text strings for the left and right sections
	const leftText =
		"We are one of the world's largest investors in renewable power and transition assets and have almost 46,000 megawatts of generating capacity. We operate across five continents, managing a diverse portfolio of hydro, wind, solar, distributed energy, storage and sustainable solutions.";
	const rightText =
		'We use our operating capabilities, scale and global reach to develop and operate a high-quality clean energy portfolio in a responsible manner, helping accelerate the global transition to net zero. Our business is underpinned by stable cash flows, with the majority of our power sold to corporate and industrial customers, public power authorities and utilities under long-term, inflation-linked contracts.';

	// Array of stat objects
	const stats = [
		{ prefix: '$', value: 126, suffix: 'B', label: 'Assets Under Management' },
		{ value: 18000, label: 'Operating Employees' },
		{ value: 7000, suffix: '+', label: 'Power Generating Facilities' },
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

export default RenewablePowerTransition;
