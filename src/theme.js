import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D7874",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
