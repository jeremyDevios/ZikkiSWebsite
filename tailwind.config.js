/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comic-yellow': '#FACC15', // Yellow-400
        'comic-red': '#EF4444',    // Red-500
        'comic-blue': '#3B82F6',   // Blue-500
        'comic-black': '#18181b',  // Zinc-900
        'comic-bg': '#FFFBEB',     // Amber-50
      },
      boxShadow: {
        'comic': '6px 6px 0px 0px #18181b',
        'comic-hover': '10px 10px 0px 0px #18181b',
        'comic-active': '2px 2px 0px 0px #18181b',
      },
      fontFamily: {
        'comic': ['"Bangers"', 'system-ui', 'cursive'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
