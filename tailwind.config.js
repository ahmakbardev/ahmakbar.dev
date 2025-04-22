/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        sniglet: ["var(--font-sniglet)", "cursive"],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      transitionProperty: {
        'z': 'z-index',
      },
    },
  },
  plugins: [],
};
