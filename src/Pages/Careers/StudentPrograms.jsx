import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import PagesLayout from '../../Components/Layout/PagesLayout';
import { Link } from 'react-router-dom';

const StudentPrograms = () => {
	// Reusable header component
	const SectionHeader = ({
		title,
		textColor = 'text-white',
		fontSize = 'text-3xl md:text-4xl',
	}) => (
		<div className='text-left mb-10'>
			<h1 className={`${fontSize} ${textColor} playscript`}>{title}</h1>
			<div className='w-16 h-1 bg-[#ff8200] mt-4'></div>
		</div>
	);

	// Reusable student program card component
	const StudentProgramCard = ({ imageSrc, altText, title, titleHeader }) => {
		return (
			<div className='bg-white shadow overflow-hidden rounded'>
				<img
					src={imageSrc}
					alt={altText}
					className='w-full h-48 object-cover' // fixed height ensures uniformity
				/>
				<div className='p-4'>
					<SectionHeader
						title={titleHeader}
						textColor='text-[#0f3557]'
						fontSize='text-xl md:text-2xl'
					/>
					<p className='text-gray-700 text-sm md:text-base leading-6'>
						{title}
					</p>
				</div>
			</div>
		);
	};

	// Reusable ReportCard component with fixed image container for uniform size
	const ReportCard = ({
		imageSrc,
		altText,
		reportTitle,
		reportDescription,
		linkHref = '#',
	}) => {
		return (
			<div className='flex-1'>
				<div className='w-full h-48 overflow-hidden'>
					<img
						src={imageSrc}
						alt={altText}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='flex flex-col gap-4 mt-5'>
					<p className='font-bold text-[12px] text-[#417094] leading-3'>
						{reportTitle}
					</p>
					<Link
						to={linkHref}
						className='hover:underline hover:text-[#2a5f9a] font-semibold text-lg'>
						{reportDescription}
					</Link>
				</div>
			</div>
		);
	};

	// Testimonial state and data
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const testimonials = [
		{
			image:
				'/Assets/Images/brookfield-internships-carousel-krista-desktop.avif',
			quote:
				'I’ve had the opportunity to learn one-on-one, which has created an incredibly thorough and personal learning experience.',
			name: 'Krista Kigan, Real Estate Finance',
		},
		{
			image:
				'/Assets/Images/brookfield-internships-carousel-fremgen-desktop.avif',
			quote:
				'There were countless times during my internship when individuals went out of their way to meet me or include me on a call, giving me insight into the work they do.',
			name: 'Richard Fremgen, Public Securities Risk Management',
		},
		{
			image:
				'/Assets/Images/brookfield-internships-carousel-bagga-desktop-1.avif',
			quote:
				'You get to learn not only from your immediate team but from anyone you reach out to. Everyone here really enjoys talking about their experiences and wants to support both your career and personal growth.',
			name: 'Naval Bagga, Infrastructure Finance',
		},
	];

	// Configure swipe handlers for testimonial section
	const swipeHandlers = useSwipeable({
		onSwipedLeft: () =>
			setCurrentTestimonial((prev) =>
				prev === testimonials.length - 1 ? 0 : prev + 1
			),
		onSwipedRight: () =>
			setCurrentTestimonial((prev) =>
				prev === 0 ? testimonials.length - 1 : prev - 1
			),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<PagesLayout
			heroImage='/Assets/Images/brookfield-internships-header-office-1.png'
			heroHeading='Student Programs at Brookfield'>
			<section>
				{/* Intro Section */}
				<div className='bg-[rgb(219,228,236)] py-10 px-4 sm:px-8 md:px-16 lg:px-20'>
					<p className='text-center text-base sm:text-lg md:text-2xl leading-6 md:leading-[30px]'>
						Whether you’re just starting to build your career, or you’re ready
						to try a different approach to your career path, we’ve got
						opportunities that challenge the status quo. Our various programs
						span our global businesses and roles, offering unparalleled
						opportunities to participate in our entrepreneurial, collaborative
						culture.
					</p>
				</div>

				{/* Student Programs Cards Section */}
				<div className='bg-[#0f3557] py-10 px-4 sm:px-8 md:px-16 lg:px-20'>
					<SectionHeader title='Student Programs' />
					<div className='flex flex-wrap gap-5 justify-center'>
						<div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
							<StudentProgramCard
								titleHeader='CPA Internship'
								imageSrc='/Assets/Images/brookfield-internships-card-3.avif'
								altText='CPA Internship'
								title='From understanding financial planning and analysis to learning the ins and outs of corporate finance or treasury, get a jump start on your CPA qualification and intern with our finance teams. Our internship program offers participants a wide range of interesting projects, mentors, and development opportunities to help grow your professional experience.'
							/>
						</div>
						<div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
							<StudentProgramCard
								titleHeader='Rotational Accounting Program'
								imageSrc='/Assets/Images/brookfield-internships-card-conference.avif'
								altText='Rotational Accounting Program'
								title='Why join the Rotational Accounting Program? Because you’re not just ready for anything—you’re ready for everything. You’ll get a comprehensive look at accounting, auditing, and finance across the firm. There will be plenty of support along the way, from mentorships to internal networking events, to help you fulfill your potential, with opportunities to apply for a full-time role.'
							/>
						</div>
						<div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
							<StudentProgramCard
								titleHeader='MBA Program'
								imageSrc='/Assets/Images/brookfield-internships-card-group-hall_0.avif'
								altText='MBA Program'
								title="Interested in learning how to source investment opportunities and build long-term value? At Brookfield, you’ve got options. From private equity deals in London to data infrastructure in India, from transition opportunities in Australia to insurance capital allocation in North America—you'll get a front-row seat to some of the largest and most interesting investment deals in the world."
							/>
						</div>
					</div>
				</div>

				{/* Testimonial Section (Image & Quote with Dots) */}
				<section className='py-10 px-4 sm:px-8 md:px-16 lg:px-20 bg-white'>
					<div className='relative bg-[#0f3557] text-white'>
						<div className='flex flex-col md:flex-row items-center justify-center gap-8'>
							{/* Image on the left */}
							<div className='w-full md:w-1/2'>
								<img
									src={testimonials[currentTestimonial].image}
									alt='Testimonial'
									className='w-full object-cover rounded'
								/>
							</div>
							{/* Quote and name on the right with swipe support */}
							<div
								className='w-full md:w-1/2 text-center md:text-left'
								{...swipeHandlers}>
								<p className='text-xl md:text-2xl italic mb-4'>
									“{testimonials[currentTestimonial].quote}”
								</p>
								<p className='font-bold'>
									{testimonials[currentTestimonial].name}
								</p>
							</div>
						</div>
						{/* Navigation Dots always at Bottom Right */}
						<div className='absolute bottom-5 right-5 flex gap-2'>
							{testimonials.map((_, index) => (
								<span
									key={index}
									onClick={() => setCurrentTestimonial(index)}
									className={`cursor-pointer w-3 h-3 rounded-full ${
										index === currentTestimonial
											? 'bg-[#ff8200]'
											: 'bg-gray-300'
									}`}
								/>
							))}
						</div>
					</div>
				</section>

				{/* ESG Commitments Section */}
				<section className='py-10 px-4 sm:px-8 md:px-16 lg:px-20'>
					<div className='text-center'>
						<h1 className='text-xl md:text-2xl font-bold mb-4'>
							Our ESG Commitments
						</h1>
						<p className='text-base sm:text-[18px] md:text-lg'>
							Learn more about some of the measures we are taking and the
							positive impact we have made.
						</p>
					</div>
					<div className='mt-10 flex flex-wrap gap-4 justify-center'>
						<ReportCard
							imageSrc='/Assets/Images/Report-Cover-Photo.avif'
							altText='Sustainability report'
							reportTitle='2023 SUSTAINABILITY REPORT'
							reportDescription='Our ambition is to achieve net zero emissions by 2050 across the assets we manage.'
							linkHref='/responsibility/2023-sustainability-report'
						/>
						<ReportCard
							imageSrc='/Assets/Images/Internal-Mobility-1600.avif'
							altText='Sustainability report'
							reportTitle='Diversity & Inclusion: Our People'
							reportDescription='At Brookfield, women comprise of 46% of our overall workforce and 29% of senior vice presidents and above.'
							linkHref='/responsibility/diversity-inclusion'
						/>
						<ReportCard
							imageSrc='/Assets/Images/brookfield-perspectives-season-1-podcast-episode-thumbnail-wind-farm_0.avif'
							altText='Sustainability report'
							reportTitle='Brookfield Perspectives: Podcast'
							reportDescription='Our podcast provides expert insights from key decision-makers across the Brookfield Ecosystem.'
							linkHref='/news-insights/podcasts/brookfield-perspectives'
						/>
					</div>
				</section>

				{/* Resources Section */}
				<section className='bg-[#0f3557] py-16 px-4 sm:px-8 md:px-16 lg:px-20'>
					<div className='max-w-4xl mr-auto flex flex-wrap justify-between items-center'>
						<h1 className='text-white playscript text-4xl mb-4'>Resources</h1>
						<div className='flex flex-col gap-6'>
							<Link
								to='/internships'
								className='flex gap-6 items-center'>
								<img
									src='/Assets/Images/resource-link-arrow.svg'
									alt='Resource arrow'
								/>
								<p className='text-white font-semibold text-lg leading-[27px]'>
									View our Internship Opening
								</p>
							</Link>
							<Link
								to='/responsibility/diversity-equity-inclusion'
								className='flex gap-6 items-center'>
								<img
									src='/Assets/Images/resource-link-arrow.svg'
									alt='Resource arrow'
								/>
								<p className='text-white font-semibold text-lg leading-[27px]'>
									Learn about our commitment to Diversity and Inclusion
								</p>
							</Link>
							<Link
								to='/'
								className='flex gap-6 items-center'>
								<img
									src='/Assets/Images/resource-link-arrow.svg'
									alt='Resource arrow'
								/>
								<p className='text-white font-semibold text-lg leading-[27px]'>
									Learn more about our firm
								</p>
							</Link>
						</div>
					</div>
				</section>
			</section>
		</PagesLayout>
	);
};

export default StudentPrograms;
