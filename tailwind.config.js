// const boxShadows = require("tailboxshadow/boxShadow");
const colors = {
  rose: {
    300: "#fda4af",
    600: "#e11d48",
    900: "#881337",
  },
  purple: {
    300: "#d8b4fe",
    600: "#9333ea",
    900: "#581c87",
  },
  indigo: {
    300: "#a5b4fc",
    600: "#4f46e5",
    900: "#312e81",
  },
  blue: {
    300: "#93c5fd",
    600: "#2563eb",
    900: "#1e3a8a",
  },
  emerald: {
    300: "#6ee7b7",
    600: "#059669",
    900: "#064e3b",
  },
  lime: {
    300: "#bef264",
    600: "#65a30d",
    900: "#365314",
  },
  yellow: {
    300: "#fde047",
    600: "#ca8a04",
    900: "#713f12",
  },
  orange: {
    300: "#fdba74",
    600: "#ea580c",
    900: "#7c2d12",
  },
  red: {
    300: "#fca5a5",
    600: "#dc2626",
    900: "#7f1d1d",
  },
  blueGray: {
    300: "#cbd5e1",
    600: "#475569",
    900: "#0f172a",
  },
};

function createBtnBoxes(colors) {
  let storage = [];
  Object.keys(colors).forEach((color) => {
    storage = [
      `before:shadow-${color}-600-${color}-300 shadow-${color}-600-${color}-300 text-${color}-900 border-${color}-600 `,
      ...storage,
    ];
  });
  return storage;
}

module.exports = {
  mode: "jit",
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [
      ...createBtnBoxes(colors)
        .join()
        .split(" ")
        .filter((e) => e !== "")
        .filter((e) => e !== ","),
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // => @media (min-width: XXXXpx) { ... }
        xsss: "350px",
        xss: "400px",
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        ...colors,
      },
      boxShadow: {
        // ...boxShadows,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailboxshadow")],
};
