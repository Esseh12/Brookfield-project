import { useState } from 'react';
import PagesLayout from '../../Components/Layout/PagesLayout';

// Dummy job listings array with sample data
const jobListings = [
	{
		position: 'Software Engineer',
		city: 'New York',
		businessGroup: 'Technology',
		department: 'Engineering',
	},
	{
		position: 'Senior Product Manager',
		city: 'San Francisco',
		businessGroup: 'Product',
		department: 'Product Management',
	},
	{
		position: 'UX Designer',
		city: 'Los Angeles',
		businessGroup: 'Design',
		department: 'Design',
	},
	{
		position: 'Financial Analyst',
		city: 'Chicago',
		businessGroup: 'Finance',
		department: 'Finance',
	},
	{
		position: 'Marketing Coordinator',
		city: 'Austin',
		businessGroup: 'Marketing',
		department: 'Marketing',
	},
	{
		position: 'HR Specialist',
		city: 'Boston',
		businessGroup: 'Human Resources',
		department: 'HR',
	},
	{
		position: 'Operations Manager',
		city: 'Seattle',
		businessGroup: 'Operations',
		department: 'Operations',
	},
	{
		position: 'DevOps Engineer',
		city: 'New York',
		businessGroup: 'Technology',
		department: 'Engineering',
	},
	{
		position: 'Sales Representative',
		city: 'San Francisco',
		businessGroup: 'Sales',
		department: 'Sales',
	},
	{
		position: 'Data Scientist',
		city: 'Chicago',
		businessGroup: 'Technology',
		department: 'Data Science',
	},
	{
		position: 'Junior Software Engineer',
		city: 'Los Angeles',
		businessGroup: 'Technology',
		department: 'Engineering',
	},
	{
		position: 'Content Strategist',
		city: 'Austin',
		businessGroup: 'Marketing',
		department: 'Content',
	},
	{
		position: 'Recruitment Specialist',
		city: 'Boston',
		businessGroup: 'Human Resources',
		department: 'HR',
	},
	{
		position: 'Project Manager',
		city: 'Seattle',
		businessGroup: 'Operations',
		department: 'Project Management',
	},
];

// Predefined list of locations
const locationsList = [
	'Any',
	'New York',
	'San Francisco',
	'Los Angeles',
	'Chicago',
	'Austin',
	'Boston',
	'Seattle',
];

// Reusable component for filter select dropdowns
const FilterSelect = ({ label, name, value, onChange, options }) => (
	<div className='mb-4 md:mb-0'>
		<label className='block font-semibold text-[#4d4d4d] mb-2'>{label}</label>
		<select
			name={name}
			value={value}
			onChange={onChange}
			className='w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500'>
			{options.map((option) => (
				<option
					key={option}
					value={option}>
					{option}
				</option>
			))}
		</select>
	</div>
);

const Opportunities = () => {
	const [filters, setFilters] = useState({
		location: 'Any',
		businessGroup: 'Any',
		department: 'Any',
	});

	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	// Filter jobs based on the selected filters
	const filteredJobs = jobListings.filter((job) => {
		const matchesLocation =
			filters.location === 'Any' || job.city === filters.location;
		const matchesBusinessGroup =
			filters.businessGroup === 'Any' ||
			job.businessGroup === filters.businessGroup;
		const matchesDepartment =
			filters.department === 'Any' || job.department === filters.department;

		return matchesLocation && matchesBusinessGroup && matchesDepartment;
	});

	// Group filtered jobs by city
	const groupedByCity = filteredJobs.reduce((acc, job) => {
		if (!acc[job.city]) {
			acc[job.city] = [];
		}
		acc[job.city].push(job);
		return acc;
	}, {});

	// Dynamic filter options for business groups and departments
	const businessGroups = [
		'Any',
		...new Set(jobListings.map((job) => job.businessGroup)),
	];
	const departments = [
		'Any',
		...new Set(jobListings.map((job) => job.department)),
	];

	return (
		<PagesLayout
			heroImage='/Assets/Images/1.5.1_abstract_2.avif'
			heroHeading='Career Opportunities'>
			<div className='container mx-auto px-4 md:px-6 py-8'>
				{/* Warning Section */}
				<div className='p-4 mb-20'>
					<h2 className='font-bold mb-4 leading-6 text-[#4d4d4d]'>
						Phishing and Fraudulent Websites Warning
					</h2>
					<p className='text-[#4d4d4d] leading-6 mb-6'>
						Please be aware of the misuse of the Brookfield name and brand by
						individuals and groups fraudulently publishing fake websites and
						engaging in “phishing” scams that seek personal or confidential
						information from potential job candidates. This includes the posting
						of fake Brookfield job offers on LinkedIn and other career sites.
					</p>
					<p>
						You can find more details on what to look out for and how to report
						potentially fraudulent activity{' '}
						<a
							href='#'
							className='text-[#153E66] underline ml-1'>
							here
						</a>
					</p>
				</div>

				{/* Filters */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-20'>
					<FilterSelect
						label='Location'
						name='location'
						value={filters.location}
						onChange={handleFilterChange}
						options={locationsList}
					/>
					<FilterSelect
						label='Business Group'
						name='businessGroup'
						value={filters.businessGroup}
						onChange={handleFilterChange}
						options={businessGroups}
					/>
					<FilterSelect
						label='Department'
						name='department'
						value={filters.department}
						onChange={handleFilterChange}
						options={departments}
					/>
				</div>

				{/*
          If no filtered jobs, show the "No positions" message.
          Otherwise, render a separate table for each city.
        */}
				{filteredJobs.length === 0 ? (
					<div className='text-center py-12 text-gray-500'>
						No positions match your current filters
					</div>
				) : (
					Object.keys(groupedByCity).map((city) => (
						<div
							key={city}
							className='mb-8'>
							<table className='w-full text-left'>
								<thead className='bg-[#0f3557] text-white'>
									<tr>
										<th className='py-2 px-4'>Position Title</th>
										<th className='py-2 px-4'>Department</th>
										<th className='py-2 px-4'>Business Group</th>
										<th className='py-2 px-4'>City</th>
									</tr>
								</thead>
								<tbody>
									{groupedByCity[city].map((job, index) => (
										<tr
											key={index}
											className='hover:bg-gray-50 transition-colors duration-150'>
											<td className='py-2 px-4'>
												<a
													href='#'
													className='text-blue-600 hover:underline'>
													{job.position}
												</a>
											</td>
											<td className='py-2 px-4'>{job.department}</td>
											<td className='py-2 px-4'>{job.businessGroup}</td>
											<td className='py-2 px-4'>{job.city}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					))
				)}
			</div>
		</PagesLayout>
	);
};

export default Opportunities;
