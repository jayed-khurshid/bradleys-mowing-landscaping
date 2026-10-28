/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#075B1D',
          forestDark: '#053e14',
          deepDark: '#03260c',
          cta: '#24B80B',
          ctaHover: '#1fa009',
          lime: '#74DD3A',
          accent: '#6EDB5A',
          surface: '#FAFAF7',
          inputBg: '#F2FFEA',
          inputBorder: '#CDEBC0',
        }
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '28px',
      },
      boxShadow: {
        'glow-green': '0 0 25px rgba(36, 184, 11, 0.35)',
        'soft-card': '0 10px 30px -5px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
