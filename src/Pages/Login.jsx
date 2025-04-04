import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isBgLoaded, setIsBgLoaded] = useState(false);
	const bgRef = useRef(null);

	// Set up Intersection Observer to lazy load the background image
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsBgLoaded(true);
						observer.disconnect(); // Stop observing once loaded
					}
				});
			},
			{
				threshold: 0.1, // Trigger when 10% of the element is visible
			}
		);

		if (bgRef.current) {
			observer.observe(bgRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div className='min-h-screen flex flex-col'>
			{/* Background with gradient overlay */}
			<div
				ref={bgRef}
				className='fixed inset-0 bg-gradient-to-br from-black/40 to-black/60 z-0'
				style={{
					backgroundImage: isBgLoaded
						? `url('/Assets/Images/Background.jpeg')`
						: 'none',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundBlend: 'overlay',
				}}
			/>

			{/* Header */}
			<header className='relative z-10 p-4 sm:p-6'>
				<Link
					to='/'
					className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
					Tamsey Finance Inc
				</Link>
			</header>

			{/* Main Content */}
			<main className='relative z-10 flex-grow flex items-center justify-center px-4'>
				<div className='w-full max-w-xl'>
					{/* Login Box */}
					<div className='bg-black/20 backdrop-blur-sm rounded-lg p-6 sm:p-8'>
						{/* Title */}
						<div className='bg-gray-600/70 rounded py-2 mb-6'>
							<h2 className='text-white text-center text-xl sm:text-2xl md:text-3xl'>
								Client Login
							</h2>
						</div>

						{/* Login Form */}
						<form className='space-y-4'>
							{/* Email Field */}
							<div>
								<label
									htmlFor='email'
									className='block text-white text-sm sm:text-base mb-1'>
									Email
								</label>
								<input
									type='email'
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500'
								/>
							</div>

							{/* Password Field */}
							<div>
								<label
									htmlFor='password'
									className='block text-white text-sm sm:text-base mb-1'>
									Password
								</label>
								<input
									type='password'
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500'
								/>
							</div>

							{/* First-time login note */}
							<div className='text-white text-center text-xs sm:text-sm my-4'>
								If this is your first time logging into Digital Data Exchange,
								please leave the password blank and an email will be sent to you
								with instructions.
							</div>

							{/* Submit Button */}
							<div className='flex justify-center'>
								<button
									type='submit'
									className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-full transition-colors duration-200'>
									Submit
								</button>
							</div>
						</form>

						{/* Links */}
						<div className='mt-6 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm'>
							<a
								href='#'
								className='text-white'>
								Activate Your Account
							</a>
							<span className='text-white hidden sm:block'>|</span>
							<a
								href='#'
								className='text-white'>
								Client Login
							</a>
							<span className='text-white hidden sm:block'>|</span>
							<a
								href='#'
								className='text-white'>
								Technical Support
							</a>
							{/* Additional links for small screens */}
							<div className='flex flex-col sm:flex-row items-center gap-2'>
								<a
									href='#'
									className='text-white'>
									Forgot Your Password?
								</a>
								<span className='text-white hidden sm:block'>|</span>
								<a
									href='#'
									className='text-white'>
									Forgot Your Email?
								</a>
								<span className='text-white hidden sm:block'>|</span>
								<a
									href='#'
									className='text-white'>
									Unlock Account
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className='relative z-10 bg-blue-900/90 text-white py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center'>
				<div className='text-xs sm:text-sm'>© 2025 FIS All Rights Reserved</div>
				<div className='flex gap-4 mt-2 sm:mt-0 text-xs sm:text-sm'>
					<a
						href='#'
						className='text-white'>
						FAQ
					</a>
					<a
						href='#'
						className='text-white'>
						Privacy Policy
					</a>
					<a
						href='#'
						className='text-white'>
						Cookie Info
					</a>
					<a
						href='#'
						className='text-white'>
						FIS Digital Data Exchange Home
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Login;
