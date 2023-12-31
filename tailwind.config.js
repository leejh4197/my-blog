/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // blockquote: [],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customYellow: "#FFDB58",
        customGreen: "#98FF98",
        customBlue: "#0047AB",
        customPink: "#F88379",
        mainColor: "#FF7F50",
        grayLine: "#CCCCCC",
        bgDarkColor: "#3CB371",
        textDarkColor: "#F5F5F5",
        bgLightColor: "#F5F5F5",
        textLightColor: "#3CB371",
      },
      fontFamily: {
        sans: ["GangwonEdu_OTFBoldA", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
