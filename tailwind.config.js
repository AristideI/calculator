/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdark: "#17181A",
        bglight: "#F7F8FB",
        sign: "#ADD8FF",
        mainblue: "#005DB2",
        lightblue: "#1991FF",
        noon: "#A0D7FF",
      },
    },
  },
  plugins: [],
};
