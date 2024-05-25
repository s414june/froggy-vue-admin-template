/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				secondary: "rgb(107 114 128)",
			},
		},
	},
	plugins: [],
}
