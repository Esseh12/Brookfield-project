/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0f3557',
				light: '#FFFFFF',
				orange: '#ffa629',
			},
		},
	},
	plugins: [],
};
