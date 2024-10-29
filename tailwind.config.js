/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgb(164, 121, 255)",
      },
      boxShadow: {
        "inner-purple-glow": "inset 0 0 8px 5px rgba(164, 121, 255, 0.3)",
        "inner-green-glow": "inset 0 0 8px 5px rgba(74, 222, 128, 0.3)",
        "inner-yellow-glow": "inset 0 0 8px 5px rgba(253, 224, 71, 0.3)",
        "inner-blue-glow": "inset 0 0 8px 5px rgba(96, 165, 250, 0.3)",
        "inner-pink-glow": "inset 0 0 8px 5px rgba(255, 20, 147, 0.3)",
      },
      backgroundColor: {
        "custom-yellow": "rgb(255, 193, 121)",
        "custom-purple": "rgb(164, 121, 255)",
      },
      background: {
        "reader-bg":
          "linear-gradient(267deg, rgba(99, 102, 241, 0.4) 13.23%, rgba(3, 0, 20, 0) 50%)",
      },
    },
  },
  plugins: [],
};
