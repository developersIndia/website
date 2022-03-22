// This file handles whole theme and brand colors that gets applied to the website
// and also handles dark mode theme

import { createTheme, Theme } from "@nextui-org/react";

const fonts = {
  sans: "Inter, sans-serif",
  mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
};

const sharedTheme: Theme = {
  theme: {
    fonts,
  },
};

export const lightTheme = createTheme({
  ...sharedTheme,
  type: "light",
  theme: {
    colors: {
      // brand colors
      background: "#fff",
      primaryDark: "#7F56D9",
      primary: "#9B51E0",
      primaryLight: "#F4EBFF",
      // Currently being used for hero page buttons
      btnColor: "#574F97",

      //TODO: gradient needs to be finalised
      // gradient: '141deg, rgba(242,119,80,0.8) 0%, rgba(57,72,179,0.4) 24%, rgba(17,35,153,0.6) 28%, rgba(6,182,34,0.5) 54%',

      // you can also create your own color
      // myColor: '#ff4ecd'
      myGradient: "90deg, #F27750 32.43%, #3948B2 42.93%, #06B622 66.91%",
      // ...  more colors
    },
    space: {},
  },
});

export const darkTheme = createTheme({
  ...sharedTheme,
  type: "dark",
  theme: {
    colors: {
      //TODO: needs to be finalised yet
      // brand colors
      background: "#111",
      primaryDark: "#7F56D9",
      primary: "#9B51E0",
      primaryLight: "#F4EBFF",
      // Currently being used for hero page buttons
      btnColor: "#574F97",

      //TODO: gradient needs to be finalised
      // gradient: '141deg, rgba(242,119,80,0.8) 0%, rgba(57,72,179,0.4) 24%, rgba(17,35,153,0.6) 28%, rgba(6,182,34,0.5) 54%',

      // you can also create your own color
      // myColor: '#ff4ecd'
      myGradient: "90deg, #F27750 28.43%, #3948B2 52.93%, #06B622 76.91%",
      // ...  more colors
    },
    space: {},
  },
});
