import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SectorCard = ({ icon: Icon, title, description }) => {
	const truncateText = (text, wordLimit) => {
		const words = text.split(' ');
		return words.length > wordLimit
			? words.slice(0, wordLimit).join(' ') + '...'
			: text;
	};

	return (
		<div className='bg-[#0f3557] text-white p-6 rounded-lg shadow-md relative flex flex-col h-full'>
			{Icon && (
				<div className='mb-4 text-[#C6D8EF]'>
					<Icon className='h-6 w-6 text-accent-300' />
				</div>
			)}
			<h3 className='text-lg md:text-xl font-semibold mb-2'>{title}</h3>
			<p className='text-sm md:text-base text-gray-100 mb-4 flex-grow'>
				{truncateText(description, 12)}
			</p>

			<Link
				to='#'
				className='group hover:border-[#C6D8EF] border-[#949494] rounded-full border p-[6px] flex items-center justify-center w-9 h-9 self-end transition-all'>
				<FaArrowRightLong className='text-sm text-[#949494] rotate-45 transition-all duration-200 group-hover:rotate-0 group-hover:text-[#C6D8EF]' />
			</Link>
		</div>
	);
};

const Sectors = ({ sectors }) => (
	<section
		id='sectors'
		className='py-16 bg-[#f2f5f8]'>
		<div className='container mx-auto px-4 md:px-6'>
			<h2 className='playscript text-2xl md:text-3xl lg:text-4xl mb-12 text-center md:text-left'>
				Business Sectors
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{sectors.map((sector, index) => (
					<SectorCard
						key={index}
						{...sector}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Sectors;
