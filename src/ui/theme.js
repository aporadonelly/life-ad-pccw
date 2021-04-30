import { createMuiTheme } from "@material-ui/core/styles";

//color
const eMPFdarkCyan = "#0D6A88";
const eMPFlightCyan = "#008B8B";
const gray98 = "#FAFAFA";
const fiord = "#42526E";
const orange = "#EF841F";
const white = "#FFFFFF";

//fontsize
const fontFam = ["Roboto", "Helvetica", "Arial", "sans-serif"];
const fontSizeMedium = "1rem";
const fontSizeSmall = "0.875rem";

export default createMuiTheme({
  palette: {
    common: {
      darkCyan: `${eMPFdarkCyan}`,
      gray98: `${gray98}`,
      fiord: `${fiord}`,
      orange: `${orange}`,
      white: `${white}`,
      highlighted: "#FFD748",
    },
    primary: {
      main: `${eMPFdarkCyan}`,
    },
    secondary: {
      main: `${eMPFlightCyan}`,
    },
  },
  typography: {
    tab: {
      fontFamily: fontFam,
      textTransform: "none",
      fontSize: "1rem",
    },
  },
});
