import PagesLayout from '../../Components/Layout/PagesLayout';
import MapGlobalPresence from '../../Components/Layout/MapGlobalPrescence';
import CarouselCard from '../../Components/Carousel/Carousel';

const GlobalPrescence = () => {
	/** Mini component for each Ecosystem item */
	function EcosystemItem({ title, description }) {
		return (
			<div className='flex flex-col gap-2 md:gap-3'>
				<h1 className='text-lg md:text-2xl text-[#0f3557]'>{title}</h1>
				<p className='text-sm md:text-base text-[#55565a] leading-6'>
					{description}
				</p>
			</div>
		);
	}

	return (
		<PagesLayout
			heroImage='/Assets/Images/07-brookfield-global_presence_hero_desktop.avif'
			heroHeading='Global Presecence'>
			{/* First section : Ecosystem */}
			{/* Second Section: Ecosystem */}
			<div className='relative bg-white px-4 sm:px-12 lg:px-12 py-8 md:py-24 md:px-34'>
				<div className='max-w-7xl mx-auto'>
					{/* Header */}
					<div className='mb-8'>
						<h1 className='playscript text-3xl md:text-4xl leading-12 text-[#0f3557]'>
							Global Reach
						</h1>
						<span className='block w-16 h-1 bg-[#ff8200] mt-4'></span>
					</div>

					{/* Main paragraph */}
					<div className='mb-10'>
						<h3 className='playscript text-sm md:text-2xl text-[#0f3557] leading-9'>
							Well-established operations in more than 30 countries on five
							continents enable us to readily invest where attractive
							opportunities emerge.
						</h3>
					</div>

					{/* Ecosystem items */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<EcosystemItem
							title='Local Insights'
							description='Our on-the-ground presence in key locations around the world gives us knowledge of local market conditions and trends, as well as access to proprietary deal flow.'
						/>
						<EcosystemItem
							title='Strategic Flexibility'
							description='Quickly scaling up to put our investment ideas into action, allows us to allocate capital where it is otherwise scarce, acquire assets below replacement cost and leverage our operating expertise, enhancing the value of our investments.'
						/>
						<EcosystemItem
							title='Contributing to Local Communities'
							description='We are actively involved in the communities in which we operate—creating jobs, contributing to local charities and sitting on the boards of various nonprofit organizations.'
						/>
					</div>
				</div>
			</div>
			<MapGlobalPresence />
			<CarouselCard />
		</PagesLayout>
	);
};
export default GlobalPrescence;
