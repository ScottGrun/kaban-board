/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          body: "var(--black-700)",
          heading: "var(--black-900)",
          "secondary-all": "var('--gray-900')",
        },
        "primary-interactive": {
          DEFAULT: "var('--purple-900')",
          hover: "var('--light-purple-800')",
          text: "var('--white')",
        },
        "secondary-interactive": {
          DEFAULT: "var('--purple-600')",
          hover: "var('--purple-700')",
          text: "var('--purple-900')",
        },
        warning: {
          DEFAULT: "var('--red')",
          hover: "var('--light-red')",
          text: "var('--white')",
        },
        white: "var('--white')",
      },
    },
  },
  plugins: [],
};
