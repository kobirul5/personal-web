/** @type {import('tailwindcss').Config} */
 const  tailwindConfig= {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors:{
			background: "#1E1E1E",
			primary: "#3d3d3d",
			primaryColor: "#ff6421",
			accent: "#00FF00",
			textColor: "#CCCCCC "
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default tailwindConfig;