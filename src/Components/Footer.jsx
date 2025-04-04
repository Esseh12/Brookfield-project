import { IoLogoYoutube } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='bg-[#0f3557] text-white py-14'>
			<div className='max-w-7xl mx-auto px-4'>
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
						<h2 className='font-semibold text-[14px] mb-4 text-gray-400'>
							About Us
						</h2>
						<ul className='space-y-2'>
							<li>
								<Link
									to='/about-us/who-we-are'
									className='hover:text-[#ff8200] transition-colors'>
									Who We Are
								</Link>
							</li>
							<li>
								<Link
									to='/about-us/global-presence'
									className='hover:text-[#ff8200] transition-colors'>
									Global Presence
								</Link>
							</li>
							<li>
								<Link
									to='/about-us/leadership'
									className='hover:text-[#ff8200] transition-colors'>
									Leadership
								</Link>
							</li>
							<li>
								<Link
									to='/careers/student-programs'
									className='hover:text-[#ff8200] transition-colors'>
									Careers
								</Link>
							</li>
							<li>
								<Link
									to='/institutional-investors'
									className='hover:text-[#ff8200] transition-colors'>
									Investor Relations
								</Link>
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
								<Link
									to='/responsibility'
									className='hover:text-[#ff8200] transition-colors'>
									Overview
								</Link>
							</li>
							<li>
								<Link
									to='/responsibility/2023-sustainability-report'
									className='hover:text-[#ff8200] transition-colors'>
									Sustainability Report
								</Link>
							</li>
							<li>
								<Link
									to='/responsibility/tamseys-net-zero-commitment'
									className='hover:text-[#ff8200] transition-colors'>
									Our Net-Zero Commitment
								</Link>
							</li>
							<li>
								<Link
									to='/responsibility/our-workplace'
									className='hover:text-[#ff8200] transition-colors'>
									Our Workplace
								</Link>
							</li>
							<li>
								<Link
									to='/responsibility'
									className='hover:text-[#ff8200] transition-colors'>
									Corporate Responsibility
								</Link>
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
								<Link
									to='/our-businesses/renewable-power-transition'
									className='hover:text-[#ff8200] transition-colors'>
									Renewable Power & Transition
								</Link>
							</li>
							<li>
								<Link
									to='/our-businesses/infrastructure'
									className='hover:text-[#ff8200] transition-colors'>
									Infrastructure
								</Link>
							</li>
							<li>
								<Link
									to='#'
									className='hover:text-[#ff8200] transition-colors'>
									Private Equity
								</Link>
							</li>
							<li>
								<Link
									to='#'
									className='hover:text-[#ff8200] transition-colors'>
									Credit
								</Link>
							</li>
							<p>Tamsley Wealth solutions</p>
							<li>
								<Link
									to='#'
									className='hover:text-[#ff8200] transition-colors'>
									Retirement Services
								</Link>
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
								<Link
									to='/our-businesses/renewable-power-transition'
									className='hover:text-[#ff8200] transition-colors'>
									Renewable Power & Transition
								</Link>
							</li>
							<li>
								<Link
									to='/our-businesses/infrastructure'
									className='hover:text-[#ff8200] transition-colors'>
									Infrastructure
								</Link>
							</li>
							<li>
								<Link
									to='/our-businesses/private-equity'
									className='hover:text-[#ff8200] transition-colors'>
									Private Equity
								</Link>
							</li>
							<li>
								<Link
									to='/our-businesses/real-estate'
									className='hover:text-[#ff8200] transition-colors'>
									Real Estate
								</Link>
							</li>
							<li>
								<Link
									to='/our-businesses/credit'
									className='hover:text-[#ff8200] transition-colors'>
									Credit
								</Link>
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
								<Link
									to='#'
									className='hover:text-[#ff8200] transition-colors'>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to='#'
									className='hover:text-[#ff8200] transition-colors'>
									Newsroom
								</Link>
							</li>
							<li>
								<Link
									to='/news-insights/insights'
									className='hover:text-[#ff8200] transition-colors'>
									Publications
								</Link>
							</li>
							<li>
								<Link
									to='#'
									className='hover:text-[#ff8200] transition-colors'>
									Investor FAQs
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className='border-t border-gray-600 mt-8 pt-4 '>
					<ul className='flex flex-wrap gap-4 text-sm'>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Sitemap
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Terms of Use
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Accessibility Notice
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Cookie Policy
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Data Protection & Privacy Notice
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Web Fraud and Phishing Notice
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='hover:text-[#ff8200] transition-colors'>
								Complaint Policy - Australia
							</Link>
						</li>
					</ul>
					<p className='text-sm mt-4'>
						&copy; {new Date().getFullYear()} Brookfield. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
