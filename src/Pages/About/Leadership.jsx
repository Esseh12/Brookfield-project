import React, { useState } from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';

/* 
  Mock data for filter options
  You can expand these arrays or split them further as needed
*/
const BUSINESS_UNITS = [
	'Corporate',
	'Global Client Group',
	'Credit',
	'Renewable Power & Transition',
	'Infrastructure',
	'Private Equity',
	'Real Estate',
	'Wealth Solutions',
	'Public Securities',
];

const LEADERSHIP_ROLES = [
	'Board of Directors',
	'Executive Officers',
	'Senior Vice Presidents',
	// ... Add more if needed
];

/*
  Mock data for the leadership grid.
  Replace images, names, and titles with your real data.
*/
const LEADERS = [
	{
		name: 'Bruce Flatt',
		title: 'Chief Executive Officer',
		image: '/Assets/Images/b-flatt.avif',
	},
	{
		name: 'Connor Teskey',
		title: 'President, Renewable Power & Transition',
		image: '/Assets/Images/Connor_Teskey_v3.avif',
	},
	{
		name: 'Nicholas Goodman',
		title: 'Chief Financial Officer',
		image: '/Assets/Images/N_Goodman_Headshot_3.avif',
	},
	{
		name: 'Hadley Peer',
		title: 'Managing Director',
		image: '/Assets/Images/HadleyPeerMarshall_2024_500x500 temp.avif',
	},
	{
		name: 'Brian Kingston',
		title: 'Managing Partner, Real Estate',
		image: '/Assets/Images/B_Kingston_Headshot.avif',
	},
	{
		name: 'Cyrus Madon',
		title: 'Managing Partner, Private Equity',
		image: '/Assets/Images/C_Madon_Headshot_3.avif',
	},
	// ... add as many as you need
];

/**
 * Renders a group of checkbox filters
 * @param {string[]} options - an array of strings to render as checkboxes
 * @param {string} groupTitle - optional title for the group (e.g., "Business", "Leadership Role")
 */
const FilterCheckboxGroup = ({ options, groupTitle }) => {
	return (
		<div className='mt-6'>
			{groupTitle && (
				<p className='font-semibold text-sm text-gray-700 mb-2 uppercase tracking-wide'>
					{groupTitle}
				</p>
			)}
			<ul className='space-y-2'>
				{options.map((option, idx) => (
					<li
						key={idx}
						className='flex items-center'>
						<input
							type='checkbox'
							id={`filter-${groupTitle}-${idx}`}
							name={option}
							className='h-4 w-4 text-blue-600 border-gray-300 rounded'
						/>
						<label
							htmlFor={`filter-${groupTitle}-${idx}`}
							className='ml-2 text-sm text-gray-700'>
							{option}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

/**
 * Renders the entire filter section on the left side:
 * - Search input
 * - Filter checkbox groups
 * - Apply button
 */
const FilterSection = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className='w-full md:w-1/4'>
			<h2 className='text-gray-700 text-lg font-bold mb-4 uppercase tracking-wide'>
				Filter
			</h2>
			{/* Search Input */}
			<div>
				<input
					type='text'
					placeholder='Search'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='border border-gray-300 rounded-full px-4 py-2 w-full outline-none focus:border-black focus:ring-0 mb-6'
				/>
			</div>
			{/* Business Units */}
			<FilterCheckboxGroup
				options={BUSINESS_UNITS}
				groupTitle='Business'
			/>
			{/* Leadership Roles */}
			<FilterCheckboxGroup
				options={LEADERSHIP_ROLES}
				groupTitle='Leadership Role'
			/>

			{/* Apply Filter Button */}
			<button className='mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all'>
				Apply Filter
			</button>
		</div>
	);
};

/**
 * Renders a single leader card in the grid
 */
const LeadershipCard = ({ name, title, image }) => {
	return (
		<div className='bg-white shadow-sm rounded-md overflow-hidden border-1 border-[#0f3557]'>
			{/* Leader Image */}
			<img
				src={image}
				alt={name}
				className='w-full object-cover h-60'
			/>
			{/* Leader Info */}
			<div className='p-4'>
				<h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
				<p className='text-sm text-gray-600 mt-1'>{title}</p>
				{/* If you have a profile page, you can link it here */}
				<a
					href='#'
					className='text-blue-600 text-sm font-medium hover:underline mt-2 block'>
					View Profile
				</a>
			</div>
		</div>
	);
};

/**
 * Renders the grid of leadership cards
 */
const LeadershipGrid = () => {
	return (
		<div className='w-3/4 md:w-3/4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{LEADERS.map((leader, idx) => (
					<LeadershipCard
						key={idx}
						name={leader.name}
						title={leader.title}
						image={leader.image}
					/>
				))}
			</div>
		</div>
	);
};

/**
 * Main Leadership Page
 */
const Leadership = () => {
	return (
		<PagesLayout
			heroImage='/Assets/Images/brookfield-leadership_employee-hero-revised.avif'
			heroHeading='Leadership'>
			{/* Main Content Area */}
			<div className='bg-white flex flex-col md:flex-row gap-8 px-4 md:px-24  md:py-12'>
				{/* Left: Filter Section */}
				<FilterSection />

				{/* Right: Leadership Cards */}
				<LeadershipGrid />
			</div>
		</PagesLayout>
	);
};

export default Leadership;
