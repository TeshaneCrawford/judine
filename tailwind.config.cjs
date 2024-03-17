/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const srcDir = ".";

module.exports = {
  darkMode: 'class',
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/nuxt.config.{js,ts}`,
  ],
  theme: {
    fontFamily: {
      display: ["Cormorant Garamond", "ui-serif", "Georgia"],
      body: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        "body-dark": "#121213",
      },
      opacity: {
        2: "0.02",
      },
      keyframes: {
        "pulse-once": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "pulse-once": "pulse-once 0.5s cubic-bezier(0.4, 0, 0.6, 1) 1s 2",
      },
    },
  },
  plugins: [
    plugin()
  ],
}

