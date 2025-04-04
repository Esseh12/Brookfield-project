import { useState, useRef, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

// Reusable Tab Component
const TabFilter = ({ tabs, activeTab, onTabChange, className = '' }) => (
	<div className={`flex flex-wrap border-b border-gray-200 ${className}`}>
		{tabs.map((tab) => (
			<button
				key={tab.id || tab}
				onClick={() => onTabChange(tab.id || tab)}
				className={`px-6 py-3 text-sm font-medium transition-colors ${
					activeTab === (tab.id || tab)
						? 'text-primary-600 border-b-2 border-primary-600'
						: 'text-gray-600 hover:text-primary-600'
				}`}>
				{tab.label || tab}
			</button>
		))}
	</div>
);

// Reusable Carousel Navigation Component
const CarouselNavigation = ({ onPrev, onNext, className = '' }) => (
	<div className={`flex ${className}`}>
		<button
			onClick={onPrev}
			className='mr-2 p-2 rounded-full border border-gray-300 hover:border-primary-600 transition-colors'>
			<FaArrowRightLong className='w-5 h-5 text-primary-600 rotate-180' />
		</button>
		<button
			onClick={onNext}
			className='p-2 rounded-full border border-gray-300 hover:border-primary-600 transition-colors'>
			<FaArrowRightLong className='w-5 h-5 text-primary-600' />
		</button>
	</div>
);

// Reusable Card Component with customizable rendering
const Card = ({
	item,
	renderImage,
	renderContent,
	className = '',
	cardClassName = '',
}) => (
	<div
		className={`flex-none bg-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-white hover:bg-[#0f3557] ${cardClassName}`}
		data-card>
		{renderImage && (
			<div className='relative overflow-hidden'>{renderImage(item)}</div>
		)}
		{renderContent && <div className={className}>{renderContent(item)}</div>}
	</div>
);

// Main Reusable Portfolio Component
const PortfolioSection = ({
	title = 'Portfolio Highlights',
	tabs = [],
	items = [],
	itemsPerScroll = 3,
	idField = 'id',
	filterField = 'category',
	sectionId = 'portfolio',
	renderCardImage,
	renderCardContent,
}) => {
	const [activeTab, setActiveTab] = useState(tabs[0]?.id || tabs[0] || 'All');
	const [visibleCards, setVisibleCards] = useState(7);
	const carouselRef = useRef(null);

	const filteredItems =
		activeTab === 'All'
			? items
			: items.filter((item) => item[filterField] === activeTab);

	// Update visible cards based on screen size
	useEffect(() => {
		const updateVisibleCards = () => {
			if (window.innerWidth >= 1536) {
				// 2xl
				setVisibleCards(7);
			} else if (window.innerWidth >= 1280) {
				// xl
				setVisibleCards(6);
			} else if (window.innerWidth >= 1024) {
				// lg
				setVisibleCards(5);
			} else if (window.innerWidth >= 768) {
				// md
				setVisibleCards(4);
			} else if (window.innerWidth >= 640) {
				// sm
				setVisibleCards(3);
			} else {
				setVisibleCards(2);
			}
		};

		updateVisibleCards();
		window.addEventListener('resize', updateVisibleCards);
		return () => window.removeEventListener('resize', updateVisibleCards);
	}, []);

	const handlePrev = () => {
		if (carouselRef.current) {
			const scrollDistance = getScrollDistance();
			carouselRef.current.scrollBy({
				left: -scrollDistance,
				behavior: 'smooth',
			});
		}
	};

	const handleNext = () => {
		if (carouselRef.current) {
			const scrollDistance = getScrollDistance();
			carouselRef.current.scrollBy({
				left: scrollDistance,
				behavior: 'smooth',
			});
		}
	};

	const getScrollDistance = () => {
		if (!carouselRef.current) return 300;
		const cardElement = carouselRef.current.querySelector('div[data-card]');
		const cardWidth = cardElement?.offsetWidth || 220;
		const gap = 16; // 4 units in tailwind = 16px
		return (cardWidth + gap) * itemsPerScroll;
	};

	// Default card image renderer
	const defaultRenderCardImage = (item) => (
		<div className='h-48'>
			<img
				src={item.image}
				alt={item.title || 'Portfolio item'}
				className='w-full h-full object-cover'
			/>
			{item.hasPlayOverlay && (
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='bg-primary-500 rounded-full p-2'>
						<svg
							className='w-6 h-6 text-white'
							viewBox='0 0 24 24'
							fill='currentColor'>
							<path d='M8 5v14l11-7z' />
						</svg>
					</div>
				</div>
			)}
		</div>
	);

	// Default card content renderer
	const defaultRenderCardContent = (item) => (
		<div className='p-4 h-64 flex flex-col justify-between'>
			<div>
				<h3 className='text-lg font-semibold mb-2 line-clamp-2 group-hover:text-white transition-colors duration-300'>
					{item.title}
				</h3>
				<p className='mb-3 text-sm line-clamp-3 transition-colors duration-300'>
					{item.description}
				</p>
			</div>
			<div className='opacity-0 hover:opacity-100 transition-opacity duration-300'>
				<a
					href={item.link || '#'}
					className='inline-block text-sm px-3 py-1.5 text-white hover:bg-white hover:text-[#0f3557] transition-colors duration-300 rounded'>
					{item.ctaText || 'Read More'}
				</a>
			</div>
		</div>
	);

	return (
		<section
			id={sectionId}
			className='py-16 bg-white'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-3xl md:text-4xl text-primary-600 font-light mb-12'>
					{title}
				</h2>

				{/* Tabs and Navigation Row */}
				<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
					{/* Tabs */}
					<TabFilter
						tabs={tabs}
						activeTab={activeTab}
						onTabChange={setActiveTab}
						className='mb-6 md:mb-0'
					/>

					{/* Navigation Controls */}
					<CarouselNavigation
						onPrev={handlePrev}
						onNext={handleNext}
					/>
				</div>

				{/* Carousel */}
				<div
					ref={carouselRef}
					className='overflow-x-auto hide-scrollbar'>
					<div className='flex gap-4 pb-4'>
						{filteredItems.map((item) => (
							<Card
								key={item[idField]}
								item={item}
								cardClassName='w-[280px] sm:w-[300px] md:w-[300px] lg:w-[420px] xl:w-[400px] 2xl:w-[420px] flex flex-col group h-auto'
								renderImage={renderCardImage || defaultRenderCardImage}
								renderContent={renderCardContent || defaultRenderCardContent}
								className='flex-grow'
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// CSS for hiding scrollbar while preserving functionality and adding line clamp
const ScrollbarStyles = () => (
	<style
		jsx
		global>{`
		.hide-scrollbar {
			scrollbar-width: none; /* Firefox */
			-ms-overflow-style: none; /* IE and Edge */
		}
		.hide-scrollbar::-webkit-scrollbar {
			display: none; /* Chrome, Safari and Opera */
		}
		.line-clamp-2 {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
		.line-clamp-3 {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	`}</style>
);

// Example usage with sample data
const PortfolioHighlights = () => {
	// Sample portfolio items
	const portfolioItems = [
		{
			id: 1,
			title: "Canada's Largest Private Mortgage Insurance Provider",
			description:
				'Sagen offers a range of mortgage insurance products to lenders and brokers, making homeownership more accessible to first-time homebuyers.',
			image: '/Assets/Images/adobestock_277052924_1.avif',
			category: 'Business Services',
			link: '#',
		},
		{
			id: 2,
			title: 'Service Provider for Government-Operated Lottery Systems',
			description:
				'Scientific Games is a global leader in retail and digital products, technology and services for government-sponsored lottery and sports-betting programs.',
			image: '/Assets/Images/adobestock_170312451.avif',
			category: 'Infrastructure Services',
			link: '#',
		},
		{
			id: 3,
			title: 'Manufacturing Specialized Electric Heat Tracing Systems',
			description:
				'Chemelex is a global leader in the design and manufacturing of electric heat tracing systems. Its specialized products are used to regulate the temperature of pipes in industrial plants and commercial buildings.',
			image: '/Assets/Images/Screenshot 2025-02-04 161323.avif',
			category: 'Industrials',
			link: '#',
		},
		{
			id: 4,
			title: 'Providing Mission-Critical Software for Auto Dealers',
			description:
				'CDK Global is a leading provider of technology services and solutions that help automotive dealers and manufacturers run their businesses more efficiently.',
			image: '/Assets/Images/22-7150-hybrid-blog.avif',
			category: 'Business Services',
			link: '#',
		},
		{
			id: 5,
			title: 'Supplying Critical Water and Sanitation Services in Brazil',
			description:
				'Around half of the Brazilian population doesnt have sewage collection in their homes. Brk Ambiental is helping to change that',
			image: '/Assets/Images/BRK Ambiental 031.avif',
			category: 'Infrastructure Services',
			link: '#',
		},
		{
			id: 6,
			title: 'Manufacturing Components for Trailers, Towable Equipment and RVs',
			description:
				'Dexko manufactures and distributes over 65,000 products, including highly engineered, customized solutions for a diverse range of customers.',
			image: '/Assets/Images/atl_dexko_stock_image.avif',
			category: 'Industrials',
			link: '#',
		},
		{
			id: 7,
			title: 'Healthcare Data Analytics Platform',
			description:
				'Comprehensive data analytics solution for healthcare providers to improve patient outcomes and operational efficiency.',
			image:
				'/Assets/Images/pe_techandfutureofrealassets_webheader_1600x600_v2.avif',
			category: 'Business Services',
			link: '#',
		},
		{
			id: 8,
			title: 'Sustainable Water Infrastructure',
			description:
				'Innovative water management solutions for municipalities and businesses focused on conservation and sustainability.',
			image: '/Assets/Images/BRK Ambiental 031.avif',
			category: 'Infrastructure Services',
			link: '#',
		},
		// More items can be added here
	];

	// Tab structure that matches the image
	const portfolioTabs = [
		{ id: 'All', label: 'All' },
		{ id: 'Industrials', label: 'Industrials' },
		{ id: 'Business Services', label: 'Business Services' },
		{ id: 'Infrastructure Services', label: 'Infrastructure Services' },
	];

	return (
		<>
			<ScrollbarStyles />
			<PortfolioSection
				title='Portfolio Highlights'
				tabs={portfolioTabs}
				items={portfolioItems}
				itemsPerScroll={3}
				sectionId='portfoliohighlights'
				filterField='category'
			/>
		</>
	);
};

export default PortfolioHighlights;
