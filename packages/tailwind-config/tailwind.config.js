/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./**/*.{js,ts,jsx,tsx}",
    // app content + docs workspace
    `src/**/*.{js,ts,jsx,tsx}`,
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    //packages context
    "../../packages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
