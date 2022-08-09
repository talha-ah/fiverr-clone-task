import { ThemeMode } from "@utils/types"

import { colors } from "./colors"

const Palette = (mode: ThemeMode) => {
  const white = "#ffffff"
  const black = "#000000"
  const contrastText = "#fff"

  return {
    mode,
    common: {
      white,
      black,
    },
    primary: {
      main: "#f16232",
      contrastText,
    },
    secondary: {
      main: "#4387f4",
      contrastText,
    },
    // background: {
    // paper: white,
    // default: colors.grey[0],
    // ...(mode === "dark"
    //   ? {
    //       paper: colors.dark[7],
    //       default: colors.dark[7],
    //     }
    //   : {}),
    // },
  }
}

export default Palette
