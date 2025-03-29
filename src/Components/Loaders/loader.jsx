/**
 * A full‑screen loading spinner with a darker overlay and increased size.
 */
const LoadingSpinner = () => {
	return (
		<div className='loader-overlay'>
			<div className='loader'></div>
			<style jsx>{`
				.loader-overlay {
					position: fixed;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					background: rgba(0, 0, 0, 0.7);
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 9999;
				}
				.loader {
					width: 100px;
					height: 100px;
					border: 10px solid #fff;
					border-top: 10px solid transparent;
					border-radius: 50%;
					animation: spin 1s linear infinite;
				}
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
};

export default LoadingSpinner;
