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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    },
  },
  plugins: [],
};
