/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#875ba6',
        'new-white': '#e7ddf1',
        'secondry': '#2d1939',
        'steel-gray': '#58595B',
        'off-white': '#fff3fe',
        'dark': '#3d3d3d',
      },
    },
  },
  plugins: [],
}