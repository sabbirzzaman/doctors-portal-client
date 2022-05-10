module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3A4256",
          secondary: "#19D3AE",
          accent: "#0FCFEC",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
