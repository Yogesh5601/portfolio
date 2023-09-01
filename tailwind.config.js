/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",
        md: "640px",
        lg: "940px",
      },
    },
  },
  plugins: [],
};

