/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary:'#776B5D',
        white:'#fff',
        card:'#f6f6f6',
        secondary:'#EBE3D5',
        primeLight:'#B0A695',
        
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}

