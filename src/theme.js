import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#212121",
      dark: "#181818",
    },
    secondary: {
      main: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#242424",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(145deg, #424242 30%, #616161 90%)",
          borderRadius: "8px",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
        },
      },
    },
  },
});

export default theme;
