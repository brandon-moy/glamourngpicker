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
          "linear-gradient(to right,rgb(242, 182, 182),rgb(242, 227, 200),rgb(253, 253, 184),rgb(151, 213, 151),rgb(188, 233, 258),rgb(247, 181, 237),rgb(242, 162, 162))",
      },
      backgroundSize: {
        "200%": { backgroundSize: "200%" },
      },
      colors: {
        background: "#D4D5D7",
        darker: "#637086",
        secondary: "#455B87",
        accent: "#5BC2E1",
        extra: "#8DCB8D",
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
