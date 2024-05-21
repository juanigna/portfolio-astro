/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-purple': "#11071F",
				'light-purple': "#1A0B2E",
				'text-purple': "#7127BA"
			},
			backgroundImage: {
				'custom-linear-gradient': 'linear-gradient(to right, #693B93 0%, #693B93 50%, #693B93 100%)',
				'image-radial-gradient': `radial-gradient(circle, #763CAC 0%, #320F85 100%)`,
			},
		},
	},
	plugins: [],
}
