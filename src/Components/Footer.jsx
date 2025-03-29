import { IoLogoYoutube } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-[#0f3557] text-white py-10'>
			{/* Main container */}
			<div className='max-w-7xl mx-auto px-4'>
				{/* Top section: multiple columns */}
				<div className='grid grid-cols-1 md:grid-cols-6 gap-8'>
					{/* social links  */}
					<div>
						<h2 className='text-[18px] leading-[18px] font-bold'>
							Tamsey Finance Inc
						</h2>
						<div className='flex gap-4 mt-4'>
							<FaLinkedin className='text-2xl' />
							<FaXTwitter className='text-2xl' />
							<IoLogoYoutube className='text-2xl' />
						</div>
					</div>
					{/* Column 1 */}
					<div>
						<h3 className='font-semibold text-[14px] mb-4 text-gray-400'>
							About Us
						</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Who We Are
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Global Presence
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Leadership
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Careers
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Investor Relations
								</a>
							</li>
						</ul>
					</div>

					{/* Column 2 */}
					<div>
						<h3 className='font-semibold text-[14px] mb-4 text-gray-400'>
							RESPONSIBILITY
						</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Overview
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Sustainability Report
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Our Net-Zero Commitment
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Our Workplace
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Corporate Responsibility
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3 */}
					<div>
						<h3 className='font-semibold text-[14px] mb-4 text-gray-400'>
							Business
						</h3>
						<ul className='space-y-2'>
							<p>Tamsley Asset Management</p>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Renewable Power & Transition
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Infrastructure
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Private Equity
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Credit
								</a>
							</li>
							<p>Tamsley Wealth solutions</p>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Retirement Services
								</a>
							</li>
						</ul>
					</div>

					{/* Column 4 */}
					<div>
						<h3 className='font-semibold text-[14px] mb-4 text-gray-400'>
							Investments
						</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Renewable Power & Transition
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Infrastructure
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Private Equity
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Real Estate
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Credit
								</a>
							</li>
						</ul>
					</div>

					{/* Column 5 */}
					<div>
						<h3 className='font-semibold text-[14px] mb-4 text-gray-400'>
							News & Insights
						</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Projects
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Newsroom
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Publications
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-[#ff8200] transition-colors'>
									Investor FAQs
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section: legal links, disclaimers, etc. */}
				<div className='border-t border-gray-600 mt-8 pt-4 '>
					<ul className='flex flex-wrap gap-4 text-sm'>
						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Sitemap
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Terms of Use
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Accessibility Notice
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Cookie Policy
							</a>
						</li>

						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Data Protection & Privacy Notice
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Web Fraud and Phishing Notice
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-[#ff8200] transition-colors'>
								Complaint Policy - Australia
							</a>
						</li>
						{/* Add or remove any other links you need */}
					</ul>

					{/* Optional copyright or trademark */}
					<p className='text-sm mt-4'>
						&copy; {new Date().getFullYear()} Brookfield. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
