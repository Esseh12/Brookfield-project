import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PagesLayout from '../../Components/Layout/PagesLayout';
import LoadingSpinner from '../../Components/Loaders/loader';
import { FaArrowUpLong } from 'react-icons/fa6';

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
];

const LEADERS = [
	{
		name: 'Bruce Flatt',
		title: 'Chief Executive Officer',
		image: '/Assets/Images/b-flatt.avif',
		businessUnit: 'Corporate',
		role: 'Executive Officers',
	},
	{
		name: 'Connor Teskey',
		title: 'President, Renewable Power & Transition',
		image: '/Assets/Images/Connor_Teskey_v3.avif',
		businessUnit: 'Renewable Power & Transition',
		role: 'Senior Vice Presidents',
	},
	{
		name: 'Nicholas Goodman',
		title: 'Chief Financial Officer',
		image: '/Assets/Images/N_Goodman_Headshot_3.avif',
		businessUnit: 'Credit',
		role: 'Executive Officers',
	},
	{
		name: 'Hadley Peer',
		title: 'Managing Director',
		image: '/Assets/Images/HadleyPeerMarshall_2024_500x500 temp.avif',
		businessUnit: 'Infrastructure',
		role: 'Board of Directors',
	},
	{
		name: 'Brian Kingston',
		title: 'Managing Partner, Real Estate',
		image: '/Assets/Images/B_Kingston_Headshot.avif',
		businessUnit: 'Real Estate',
		role: 'Senior Vice Presidents',
	},
	{
		name: 'Cyrus Madon',
		title: 'Managing Partner, Private Equity',
		image: '/Assets/Images/C_Madon_Headshot_3.avif',
		businessUnit: 'Private Equity',
		role: 'Senior Vice Presidents',
	},
	{
		name: 'Craig Noble',
		title: 'CEO, Credit',
		image: '/Assets/Images/C_Noble_Headshot.avif',
		businessUnit: 'Credit',
		role: 'Executive Officers',
	},
	{
		name: 'Sam Pollock',
		title: 'CEO, Infrastructure',
		image: '/Assets/Images/Sam_Pollock.avif',
		businessUnit: 'Real Estate',
		role: 'Executive Officers',
	},
	{
		name: 'Anuj Ranjan',
		title: 'CEO, Private Equity',
		image: '/Assets/Images/Anuj-Ranjan_Web.avif',
		businessUnit: 'Private Equity',
		role: 'Executive Officers',
	},
	{
		name: 'Sachin Shah',
		title: 'CEO, Brookfield wealth Solutions',
		image: '/Assets/Images/S_Shah_Headshot_3.avif',
		businessUnit: 'Wealth Solutions',
		role: 'Executive Officers',
	},
	{
		name: 'Natalie Adomait',
		title: 'Managing Partner, Renewable Power & Transition',
		image: '/Assets/Images/Natalie-Adomait_Web.avif',
		businessUnit: 'Renewable Power & Transition',
		role: 'Senior Vice Presidents',
	},
	{
		name: 'Arpit Agrawal',
		title: 'Managing Partner, Infrastructure',
		image: '/Assets/Images/Arpit_Agrawal_Leadership_550x480_0.avif',
		businessUnit: 'Infrastructure',
		role: 'Senior Vice Presidents',
	},
	// ... add as many as you need
];

/**
 * Renders a group of checkbox filters.
 */
const FilterCheckboxGroup = ({
	options,
	groupTitle,
	selectedOptions,
	onCheckboxChange,
}) => {
	return (
		<div className='mt-6'>
			{groupTitle && (
				<div className='border-b-2 border-[#0f3557]  mb-4'>
					<p className='font-semibold text-sm text-gray-700 mb-2 uppercase tracking-wide'>
						{groupTitle}
					</p>
				</div>
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
							checked={selectedOptions.includes(option)}
							onChange={() => onCheckboxChange(groupTitle, option)}
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
 * Renders the filter section along with "Apply Filter" and "Clear Filter" buttons.
 */
const FilterSection = ({
	searchTerm,
	onSearchChange,
	selectedBusinessUnits,
	selectedRoles,
	onCheckboxChange,
	onClearFilter,
}) => {
	return (
		<div className='w-full md:w-1/4'>
			<div>
				<input
					type='text'
					placeholder='Search'
					value={searchTerm}
					onChange={(e) => onSearchChange(e.target.value)}
					className='border border-gray-300 rounded-full px-4 py-2 w-full outline-none focus:border-black focus:ring-0 mb-6'
				/>
				<h2 className='text-gray-700 text-base font-bold mb-4 uppercase tracking-wide'>
					Filter
				</h2>
			</div>
			<FilterCheckboxGroup
				options={BUSINESS_UNITS}
				groupTitle='Business'
				selectedOptions={selectedBusinessUnits}
				onCheckboxChange={onCheckboxChange}
			/>
			<FilterCheckboxGroup
				options={LEADERSHIP_ROLES}
				groupTitle='Leadership Role'
				selectedOptions={selectedRoles}
				onCheckboxChange={onCheckboxChange}
			/>
			<button
				onClick={onClearFilter}
				className='mt-6 px-4 py-2 bg-[#efefef]  hover:bg-[#efefef] transition-all text-black border-1'>
				Clear All
			</button>
		</div>
	);
};

/**
 * Renders a single leader card.
 */
const LeadershipCard = ({ name, title, image }) => {
	return (
		<div className='bg-white shadow-sm rounded-md overflow-hidden border border-[#0f3557]'>
			<img
				src={image}
				alt={name}
				className='w-full object-cover h-60'
			/>
			<div className='p-4 '>
				<h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
				<p className='text-sm text-gray-600 mt-1'>{title}</p>

				{/* Circular arrow icon (initially angled) that rotates on hover */}
				<div className='mt-4 flex justify-end'>
					<Link
						to='#'
						className='group flex items-center justify-center
                       w-12 h-12 border-2 border-gray-300 rounded-full
                       transition-transform duration-300 hover:border-gray-400 '>
						<div className=' text-gray-700 transform rotate-45 group-hover:rotate-0 transition duration-300'>
							<FaArrowUpLong />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

/**
 * Renders the grid of leadership cards.
 */
const LeadershipGrid = ({
	searchTerm,
	selectedBusinessUnits,
	selectedRoles,
}) => {
	const filteredLeaders = LEADERS.filter((leader) => {
		if (
			searchTerm &&
			!leader.name.toLowerCase().includes(searchTerm.toLowerCase())
		) {
			return false;
		}
		if (
			selectedBusinessUnits.length > 0 &&
			!selectedBusinessUnits.includes(leader.businessUnit)
		) {
			return false;
		}
		if (selectedRoles.length > 0 && !selectedRoles.includes(leader.role)) {
			return false;
		}
		return true;
	});

	return (
		<div className='w-full md:w-3/4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredLeaders.map((leader, idx) => (
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
 * Main Leadership Page.
 */
const Leadership = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedBusinessUnits, setSelectedBusinessUnits] = useState([]);
	const [selectedRoles, setSelectedRoles] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleCheckboxChange = (group, option) => {
		setLoading(true);
		if (group === 'Business') {
			setSelectedBusinessUnits((prev) =>
				prev.includes(option)
					? prev.filter((item) => item !== option)
					: [...prev, option]
			);
		} else if (group === 'Leadership Role') {
			setSelectedRoles((prev) =>
				prev.includes(option)
					? prev.filter((item) => item !== option)
					: [...prev, option]
			);
		}
		// Simulate a loading delay
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const handleSearchChange = (term) => {
		setSearchTerm(term);
	};

	const handleApplyFilter = () => {
		setLoading(true);
		// Simulate processing/filtering delay
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const handleClearFilter = () => {
		setLoading(true);
		setSearchTerm('');
		setSelectedBusinessUnits([]);
		setSelectedRoles([]);
		// Simulate processing/clearing delay
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<PagesLayout
			heroImage='/Assets/Images/brookfield-leadership_employee-hero-revised.avif'
			heroHeading='Leadership'>
			{/* Full‑screen loader overlay */}
			{loading && <LoadingSpinner />}
			<div className='bg-white flex flex-col md:flex-row gap-20 px-4 md:px-34 py-8 md:py-16'>
				<FilterSection
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
					selectedBusinessUnits={selectedBusinessUnits}
					selectedRoles={selectedRoles}
					onCheckboxChange={handleCheckboxChange}
					onApplyFilter={handleApplyFilter}
					onClearFilter={handleClearFilter}
				/>
				<LeadershipGrid
					searchTerm={searchTerm}
					selectedBusinessUnits={selectedBusinessUnits}
					selectedRoles={selectedRoles}
				/>
			</div>
		</PagesLayout>
	);
};

export default Leadership;
