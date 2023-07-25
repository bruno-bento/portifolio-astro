/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
				  "0%": {
					width: "0%",
					visibility: "hidden"
				  },
				  "100%": {
					width: "100%"
				  }  
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
			  },
			  animation: {
				blink: "blink 0.8s infinite"
			}
		},
	},
	plugins: [],
}
