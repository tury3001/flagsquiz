module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './components/**/*.{html,js,jsx}',],
  theme: {   
    extend: {
      colors: {
        'fqwhite': '#E7ECEF',
        'fqgreen': '#2CA58D',
        'fqblack': '#172121',
        'fqtopo': '#444554',
        'fqgray': '#7F7B82',
        'fqred': '#dd1155'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};