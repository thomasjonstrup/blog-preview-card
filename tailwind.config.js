/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			 boxShadow: {
				'3xl': '9px 8px 0px 0px hsl(0, 0%, 7%)',
			},
			fontFamily: {
				figtree: ['Figtree Variable', 'sans-serif'],
			},
			colors: {
				yellow: 'hsl(47, 88%, 63%)',
				'grey': ' hsl(0, 0%, 50%)',
				white: '#ffffff',
				black: 'hsl(0, 0%, 7%)'

			}
		},
	},
	plugins: [],
};
