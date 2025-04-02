import { Link } from 'react-router-dom';
import PagesLayout from '../../Components/Layout/PagesLayout';
import { FaPodcast } from 'react-icons/fa6';
import { SlSocialSpotify } from 'react-icons/sl';
import { FaYoutube, FaArrowRight } from 'react-icons/fa';

// Reusable component for subscription links
const SubscriptionLink = ({ to, icon: Icon, children }) => (
	<Link
		to={to}
		className='flex items-center mr-2 hover:underline'>
		{Icon && <Icon className='inline mr-1' />}
		{children}
	</Link>
);

// Reusable component for each season card
const SeasonCard = ({ imgSrc, title, description }) => (
	<div className='flex flex-col gap-4'>
		<img
			src={imgSrc}
			alt={title}
			className='w-full h-auto object-cover rounded'
		/>
		<h2 className='font-semibold text-[22px] leading-[30px]'>{title}</h2>
		<p className='text-[#55565A] leading-6 text-sm'>{description}</p>
	</div>
);

// Episode component for featured and recent episodes
const EpisodeCard = ({ image, category, title, date, featured = false }) => (
	<div className={`mb-8 ${featured ? '' : 'flex gap-4'}`}>
		<div
			className={`relative ${
				featured ? 'w-full mb-4' : 'w-28 h-28 flex-shrink-0'
			}`}>
			<img
				src={image}
				alt={title}
				className={`w-full h-auto object-cover rounded ${
					featured ? 'aspect-video' : 'aspect-square'
				}`}
			/>
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='bg-white bg-opacity-70 rounded-full p-2'>
					<div className='w-8 h-8 bg-[#E85E12] rounded-full flex items-center justify-center'>
						<div className='w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-white ml-1'></div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div className='text-xs uppercase tracking-wider text-blue-800 mb-1'>
				{category}
			</div>
			<h3
				className={`font-semibold ${featured ? 'text-xl mb-2' : 'text-base'}`}>
				<Link
					to='#'
					className='hover:text-blue-600'>
					{title}
				</Link>
			</h3>
			<div className='text-sm text-gray-600'>{date}</div>
		</div>
	</div>
);

const Podcast = () => {
	// Data for each season card
	const seasonData = [
		{
			imgSrc:
				'/Assets/Images/brookfield-perspectives-podcast-season-1-header.avif',
			title: 'Season One: Decarbonization',
			description:
				"This first season explores our decades-long commitment to renewable energy, and how we're investing through the world's largest private fund dedicated to facilitating a net-zero economy.",
		},
		{
			imgSrc:
				'/Assets/Images/brookfield-perspectives-podcast-season-2-header.avif',
			title: 'Season Two: Deglobalization',
			description:
				'In our second season, we dive into deglobalization, exploring how geopolitical shifts are presenting opportunities across onshoring/reshoring, trade logistics, and energy resilience.',
		},
		{
			imgSrc:
				'/Assets/Images/brookfield-perspectives-digitalization-hero-v2.avif',
			title: 'Season Three: Digitalization',
			description:
				'In the third season, we examine digitalization: the use of digital technologies to improve on analog systems and create additional value, and the impact that the exponential growth in data-driven technologies such as AI will have on the investment landscape and the global financial ecosystem.',
		},
	];

	// Featured episode data
	const featuredEpisode = {
		image: '/Assets/Images/broofield-video-image.jpeg',
		category: 'BROOKFIELD PERSPECTIVES - EPISODE',
		title: 'Brookfield Corporation: March 2025 Update Letter to Shareholders',
		date: 'March 26, 2025',
	};

	// Recent episodes data
	const recentEpisodes = [
		{
			image: '/Assets/Images/broofield-video-image.jpeg',
			category: 'BROOKFIELD PERSPECTIVES - EPISODE',
			title: 'Brookfield Corporation: 4Q 2024 Letter to Shareholders',
			date: 'February 13, 2025',
		},
		{
			image: '/Assets/Images/broofield-video-image.jpeg',
			category: 'BROOKFIELD PERSPECTIVES - EPISODE',
			title: 'Brookfield Asset Management: 4Q 2024 Letter to Shareholders',
			date: 'February 12, 2025',
		},
		{
			image: '/Assets/Images/broofield-video-image.jpeg',
			category: 'BROOKFIELD PERSPECTIVES - EPISODE',
			title: 'Brookfield Corporation: 3Q 2024 Letter to Shareholders',
			date: 'November 14, 2024',
		},
	];

	return (
		<PagesLayout
			heroHeading='Brookfield Perspectives'
			heroSubheading="Brookfield Perspectives is a podcast from one of the world's leading investment firms. Through the lens of our investment and operational expertise, we explore the Brookfield ecosystem and its role in creating lasting, sustainable value on a global scale. From data centers and broadcasting towers to logistics hubs and battery manufacturers, we dive into the industries and infrastructure that quietly power everyday life—while fueling innovation, expanding economies, and driving global growth."
			heroChildren={
				<div className='text-white flex flex-wrap gap-2 items-center justify-center'>
					<span>Subscribe on:</span>
					<SubscriptionLink
						to='#'
						icon={FaPodcast}>
						Apple Podcasts
					</SubscriptionLink>
					<SubscriptionLink
						to='#'
						icon={SlSocialSpotify}>
						Spotify
					</SubscriptionLink>
					<SubscriptionLink
						to='#'
						icon={FaYoutube}>
						Youtube
					</SubscriptionLink>
				</div>
			}>
			{/* Featured and Recent Episodes Section */}
			<div className='px-6 md:px-28 py-14 bg-white'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						{/* Featured Section */}
						<div>
							<h2 className='text-base font-bold uppercase text-[#0A345E] mb-6'>
								FEATURED
							</h2>
							<EpisodeCard
								image={featuredEpisode.image}
								category={featuredEpisode.category}
								title={featuredEpisode.title}
								date={featuredEpisode.date}
								featured={true}
							/>
							<Link
								to='#'
								className='text-blue-700 hover:text-blue-900 flex items-center text-sm font-medium'>
								View Episode Details <FaArrowRight className='ml-2' />
							</Link>
						</div>

						{/* Most Recent Section */}
						<div>
							<h2 className='text-base font-bold uppercase text-[#0A345E] mb-6'>
								MOST RECENT
							</h2>
							<div className='border-t border-gray-300'>
								{recentEpisodes.map((episode, index) => (
									<div
										key={index}
										className='py-4 border-b border-gray-300'>
										<EpisodeCard
											image={episode.image}
											category={episode.category}
											title={episode.title}
											date={episode.date}
										/>
									</div>
								))}
							</div>
							<div className='mt-6'>
								<Link
									to='#'
									className='text-blue-700 hover:text-blue-900 flex items-center text-sm font-medium'>
									View All Episodes <FaArrowRight className='ml-2' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Seasons Section */}
			<div className='px-6 md:px-28 py-14 bg-gray-50'>
				<div>
					<h2 className='text-lg font-semibold leading-[25px]'>
						Listen by Season
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
						{seasonData.map((season, index) => (
							<SeasonCard
								key={index}
								imgSrc={season.imgSrc}
								title={season.title}
								description={season.description}
							/>
						))}
					</div>

					<div className='mt-16 flex justify-center items-center font-semibold'>
						<Link
							to='#'
							className='hover:text-[#3A78C3] hover:underline flex items-center'>
							Browse All Episodes <FaArrowRight className='ml-2' />
						</Link>
					</div>
				</div>
			</div>
		</PagesLayout>
	);
};

export default Podcast;
