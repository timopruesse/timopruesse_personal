/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					1: '#170e05'
				},
				accent: {
					0: '#cab38c',
					1: '#e4ca9e',
					2: '#f0d7a1'
				}
			}
		}
	},

	plugins: []
};
