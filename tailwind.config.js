/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

          sandtan : '#FBEEC1',
          nightblue: '#659dbd',
          leafgreen: '#8d8741',
          otherblue: '#2d545e',
          othertan: '#e1b382',
          cosmicPurple: '#4B0082', 
          nebulaBlue: '#4169E1',    
          galacticGarnet: '#C0C0C0', 


      },
    },
  },
  plugins: [],
};
