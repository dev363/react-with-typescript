import React from "react";

export type ThemeContextTypes = {
  color: boolean;
  setColor: (e: boolean) => void;
  themeColors: {
    color: string;
    background: string;
  };
};

export const ThemeContext = React.createContext<ThemeContextTypes>(
  {} as ThemeContextTypes
);

export const themeColors:any = {
  Light: {
    color: "#000000",
    background: "#ffffff",
  },
  Dark: {
    background: "#000000",
    color: "#ffffff",
  },
};
