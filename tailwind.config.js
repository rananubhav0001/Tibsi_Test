// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // to deal with conflict with ant d
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(31,60,136)",
        grey: "#f2f3f5",
        white: "white",
        heading: "#42505C",
        kiran: "red",
        anubhav: "rgb(245,245,245)",
        darkblue: "rgb(31,60,136)",
        greytext: "#C3C3C3",
        box1: "rgb(220,252,231)",
        box2: "rgb(241,223,159)",
        box3: "rgb(218,226,215)",
        box4: "rgb(253,237,222)",
        completed: "#008FFB",
        pending: "#FEAF1A",
        inprogress: "#00E396",
        rdt_primary: "rgb(0,143,251,0.85)",
      },
      fontSize: {
        extralargetext: "3.375rem",
        heading1: "2.4rem",
        heading2: "1.75rem",
        heading3: "5.7rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
