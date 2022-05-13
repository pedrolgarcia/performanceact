import { Appearance } from "react-native";

export const theme = {
  colors:
    Appearance.getColorScheme() == "dark"
      ? {
          background: "#0c0c0c",
          text: "#c1c1c1",
          primary: "#00bcd4"
        }
      : {
          background: "#ffffff",
          text: "#0c0c0c",
          primary: "#00bcd4"
        }
};
