import { useState } from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';
import Loader from '../../Components/Loaders/loader';

// Reusable component for a Featured Insight Card
const FeaturedInsightCard = ({ image, alt, title }) => (
	<div className='flex flex-col gap-5 text-center'>
		<img
			src={image}
			alt={alt}
			className='w-full h-auto object-cover'
		/>
		<p className='font-semibold text-lg leading-7 hover:underline'>{title}</p>
	</div>
);

// Reusable component for an Article Card
const ArticleCard = ({ image, alt, date, title, subTitle }) => (
	<div className='flex flex-col gap-3 pb-6 border-b border-[#0f3557] mb-12'>
		<img
			src={image}
			alt={alt}
			className='w-full h-auto object-cover'
		/>
		<p className='text-sm text-gray-500 whitespace-pre-line'>{date}</p>
		<h3 className='font-semibold text-xl hover:underline'>{title}</h3>
		{subTitle && <p className='leading-6 mt-2'>{subTitle}</p>}
	</div>
);

const Insights = () => {
	// ----------------------------
	//   1. State for Filters/Sort
	// ----------------------------
	const [selectedBusiness, setSelectedBusiness] = useState('All Businesses');
	const [selectedInsight, setSelectedInsight] = useState('All Insights');
	const [sortBy, setSortBy] = useState('Newest to Oldest'); // default sorting

	// For "Load More"
	const [visibleCount, setVisibleCount] = useState(4); // how many articles to show initially
	const [isLoading, setIsLoading] = useState(false);

	// ----------------------------
	//   2. Article Data
	// ----------------------------
	// Each article has:
	// - date in ISO format for proper sorting
	// - business category
	// - insightType (White Papers, Articles, Case Studies, Videos)
	// - other info (image, alt, title, subTitle)
	const articles = [
		{
			date: '2025-03-28',
			business: 'Real Estate',
			insightType: 'White Papers',
			image:
				'/Assets/Images/Insights Paper_Real Estate Secondaries Your Questions Answered_Website Card_586x336.avif',
			alt: 'Providing Liquidity and Enhancing Value: The Case for GP-Led Capital Solutions',
			title:
				'Providing Liquidity and Enhancing Value: The Case for GP-Led Capital Solutions',
			subTitle:
				'We explore how GP capital solutions, a type of secondaries transaction, can provide needed liquidity to GPs and unique advantages to non-core real estate portfolios.',
			dateLabel: 'White Paper |\nMarch 28, 2025',
		},
		{
			date: '2025-03-19',
			business: 'Private Equity',
			insightType: 'Articles',
			image:
				'/Assets/Images/Insights Paper_Unlocking Value The Case for Take-Privates and Carveouts_Website Card_586x336.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'Unlocking Value: The Case for Take-Privates and Carveouts',
			subTitle:
				'These complex transactions have the potential to enhance returns in today’s shifting private equity market.',
			dateLabel: 'Article | March 19, 2025',
		},
		{
			date: '2025-03-24',
			business: 'Renewable Power & Transition',
			insightType: 'Articles',
			image: '/Assets/Images/Transition-Opportunities-Header-Image.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'Transition Opportunities Are Truly Electrifying',
			subTitle:
				'Renewables are now the lowest-cost source of bulk power in the world—spurring corporate demand to mobilize at dizzying speeds.',
			dateLabel: 'Article |\nMarch 24, 2025',
		},
		{
			date: '2025-03-19',
			business: 'Real Estate',
			insightType: 'Articles',
			image: '/Assets/Images/RE-Rebound-Header.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'The Real Estate Rebound Is Here',
			subTitle:
				'We believe operational improvements will be the key to maximizing returns in the period ahead.',
			dateLabel: 'Article | March 19, 2025',
		},
		{
			date: '2025-03-17',
			business: 'Corporate Credit',
			insightType: 'Articles',
			image: '/Assets/Images/Private_Credit_Website_Card.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'Private Credit Opportunities: The Universe Keeps Expanding',
			subTitle:
				'Economic growth, attractive yields and abundant dry powder should keep the expansion rolling.',
			dateLabel: 'Article |\nMarch 17, 2025',
		},
		{
			date: '2025-03-11',
			business: 'Real Estate',
			insightType: 'White Papers',
			image:
				'/Assets/Images/Insights Paper_Fortifying Portfolios With Private Real Estate Credit_Website Card_586x336.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'Fortifying Portfolios With Private Real Estate Credit',
			subTitle:
				'We explain how this asset class can offer investors diversification, attractive yields and strong potential returns.',
			dateLabel: 'White Paper |\nMarch 11, 2025',
		},
		{
			date: '2025-03-10',
			business: 'Private Equity',
			insightType: 'Articles',
			image: '/Assets/Images/Private Equity Outlook Header Image.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'Driving Private Equity Returns With Operational Know-How',
			subTitle:
				'Financial engineering fades with cheap debt no longer an option.',
			dateLabel: 'Article |\nMarch 10, 2025',
		},
		{
			date: '2025-03-05',
			business: 'Infrastructure',
			insightType: 'Articles',
			image: '/Assets/Images/Private Equity Outlook Header Image.avif',
			alt: 'The Real Estate Rebound Is Here',
			title: 'We’re (Still) in a Golden Age of Infrastructure Investment',
			subTitle:
				'The infrastructure supercycle is creating unprecedented demand for private capital.',
			dateLabel: 'Article |\nMarch 5, 2025',
		},
	];

	// ----------------------------
	//   3. Filter + Sort Logic
	// ----------------------------
	const getFilteredAndSortedArticles = () => {
		// 1) Filter by selectedBusiness
		let filtered = articles;
		if (selectedBusiness !== 'All Businesses') {
			filtered = filtered.filter((item) => item.business === selectedBusiness);
		}

		// 2) Filter by selectedInsight
		if (selectedInsight !== 'All Insights') {
			filtered = filtered.filter(
				(item) => item.insightType === selectedInsight
			);
		}

		// 3) Sort by date
		// "Newest to Oldest" => descending
		// "Oldest to Newest" => ascending
		if (sortBy === 'Newest to Oldest') {
			filtered.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			);
		} else if (sortBy === 'Oldest to Newest') {
			filtered.sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			);
		}

		return filtered;
	};

	// ----------------------------
	//   4. Load More Handler
	// ----------------------------
	const handleLoadMore = () => {
		setIsLoading(true);

		// Simulate a 2-second load
		setTimeout(() => {
			setIsLoading(false);
			setVisibleCount((prev) => prev + 4); // load 4 more articles
		}, 2000);
	};

	// ----------------------------
	//   5. Clear All Filters
	// ----------------------------
	const handleClearAll = () => {
		setSelectedBusiness('All Businesses');
		setSelectedInsight('All Insights');
		setSortBy('Newest to Oldest');
		setVisibleCount(4);
	};

	// ----------------------------
	//   6. Final Filtered/Sorted
	// ----------------------------
	const filteredArticles = getFilteredAndSortedArticles();
	// Only show up to `visibleCount`
	const displayedArticles = filteredArticles.slice(0, visibleCount);

	return (
		<PagesLayout
			heroImage='/Assets/Images/11-brookfield-insights_hero_desktop_1.avif'
			heroHeading='Insights'>
			<section className='py-20'>
				{/* Header Section */}
				<div className='text-center flex flex-col gap-3 px-4 md:px-20'>
					<h2 className='text-2xl leading-[27px] font-semibold'>
						Featured Insights
					</h2>
					<p className='text-[#0f3557] text-[20px] leading-[33px]'>
						Our insights into investment themes across our businesses and where
						we see opportunities to create value over the long term.
					</p>
				</div>

				{/* Featured Insights Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-20'>
					<FeaturedInsightCard
						image='/Assets/Images/low_res_72_dpi-bord_gais_wind_farm_2018_1_0.avif'
						alt='Turbocharging the transition'
						title='Turbocharging the Transition'
					/>
					<FeaturedInsightCard
						image='/Assets/Images/infrastructure_focus2.avif'
						alt='Investing in the Infrastructure Supercycle'
						title='Investing in the Infrastructure Supercycle'
					/>
					<FeaturedInsightCard
						image='/Assets/Images/desktop_-_v1.avif'
						alt='Investing in the Infrastructure Supercycle'
						title='Investing in the Infrastructure Supercycle'
					/>
				</div>

				{/* Filter and Sort Bar */}
				<div className='flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 md:px-20 py-10 gap-6 md:gap-8 lg:gap-0'>
					{/* Left side: Business + Insight + Clear All */}
					<div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
						{/* VIEW BY */}
						<div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
							<p className='text-[12px] font-semibold text-[#3A7BCE] leading-4'>
								VIEW BY
							</p>
							<div className='relative'>
								<select
									className='border border-gray-300 rounded p-2 text-sm focus:outline-none w-52'
									value={selectedBusiness}
									onChange={(e) => setSelectedBusiness(e.target.value)}>
									<option>All Businesses</option>
									<option>Real Estate</option>
									<option>Infrastructure</option>
									<option>Renewable Power & Transition</option>
									<option>Private Equity</option>
									<option>Corporate Credit</option>
								</select>
							</div>
						</div>

						{/* ALL INSIGHTS */}
						<div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
							<div className='relative'>
								<select
									className='border border-gray-300 rounded p-2 text-sm focus:outline-none w-52'
									value={selectedInsight}
									onChange={(e) => setSelectedInsight(e.target.value)}>
									<option>All Insights</option>
									<option>White Papers</option>
									<option>Articles</option>
									<option>Case Studies</option>
									<option>Videos</option>
								</select>
							</div>
						</div>

						{/* CLEAR ALL */}
						<button
							onClick={handleClearAll}
							className='text-sm font-semibold text-[#3A7BCE]'>
							CLEAR ALL
						</button>
					</div>

					{/* Right side: SORT BY */}
					<div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
						<p className='text-[12px] font-semibold text-[#3A7BCE] leading-4'>
							SORT BY
						</p>
						<div className='relative'>
							<select
								className='border border-gray-300 rounded p-2 text-sm focus:outline-none w-52'
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}>
								<option>Newest to Oldest</option>
								<option>Oldest to Newest</option>
							</select>
						</div>
					</div>
				</div>

				{/* Article Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 pb-10'>
					{displayedArticles.map((article, idx) => (
						<ArticleCard
							key={idx}
							image={article.image}
							alt={article.alt}
							date={article.dateLabel}
							title={article.title}
							subTitle={article.subTitle}
						/>
					))}
				</div>

				{/* Load More / Loader */}
				<div className='flex justify-center items-center py-2'>
					{isLoading ? (
						<Loader /> // Show your loader component
					) : (
						// Only show "Load More" if there are more articles to load
						filteredArticles.length > visibleCount && (
							<button
								onClick={handleLoadMore}
								className='bg-[#0f3557] text-white px-4 py-2 rounded hover:opacity-90'>
								Load More
							</button>
						)
					)}
				</div>
			</section>
		</PagesLayout>
	);
};

export default Insights;
