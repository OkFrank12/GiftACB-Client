/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins-Bold",
      },
      screens: {
        miniLapTop: { max: "1300px" },
        tablet: { max: "1000px" },
        minTablet: { max: "800px" },
        phone: { max: "500px" },
        maxPhone: {max: "650px"}
      },
    },
  },
  plugins: [],
};
