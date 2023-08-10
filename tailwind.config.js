/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(to right,rgb(242, 162, 162),rgb(232, 217, 190),rgb(243, 243, 174),rgb(141, 203, 141),rgb(178, 223, 248),rgb(237, 161, 237),rgb(242, 162, 162))",
      },
      backgroundSize: {
        "200%": { backgroundSize: "200%" },
      },
      colors: {
        background: "#EBEEF4",
        secondary: "#455B87",
        accent: "#456AB5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        durusans: ["Duru Sans", "sans-serif"],
        dancingscript: ["Dancing Script", "sans-serif"],
        josefinsans: ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        rtl: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "-200%" },
        },
      },
    },
  },
  plugins: [],
};
