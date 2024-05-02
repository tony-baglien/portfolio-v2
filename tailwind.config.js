/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      rubix: ["Rubix", "sans-serif"]
    },
    fontSize: {
      h1: '3.815rem',
      h2: '3.052rem',
      h3: '2.441rem',
      h4: '1.953rem',
      h5: '1.563rem',
      p: '1rem',
      sm: '0.8rem',
    },
    extend: {
      colors: {
        'text': '#2F1217',
        'background': '#71638e',
        'primary': '#3724DD',
        'secondary': '#EE8ECE',
        'accent': '#E44F6A'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

