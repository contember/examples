/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Contember Admin
		'./admin/**/*.{html,js,tsx,ts}',

		// Next.js
		'./website/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./website/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./website/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
