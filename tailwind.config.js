module.exports = {
  content: ["*.html", "./src/js/*.js"],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
    extend: {
      colors: {
        "green": "#00C865",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: "1em",
              marginBottom: "1em",
              lineHeight: "1.55",
            },
            strong: {
              fontWeight: "500",
            },
            a: {
              color: "#00C865",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: "#26d07c",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
