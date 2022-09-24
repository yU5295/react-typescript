import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { useIsDarkMode } from "state/user/hooks";

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    footer?: string;
    transparent?: string;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useIsDarkMode();
  console.log("darkMode", darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#707AED" : "#707AED",
        light: darkMode ? "#21BEE2" : "#21BEE2",
        dark: darkMode ? "#6A9FEF" : "#6A9FEF",
      },
      secondary: {
        main: darkMode ? "#DB1DFB" : "#DB1DFB",
        light: darkMode ? "#816AEF" : "#816AEF",
        dark: darkMode ? "#4D69CD" : "#4D69CD",
      },
      background: {
        default: darkMode ? "#231D24" : "#ffffff",
        footer: darkMode ? "#383039" : "#eeeeee",
        transparent: "transparent",
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
