import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D6A88",
    },
    secondary: {
      main: "#2D9FC3",
    },
    common: {
      fiord: "#42526E",
      orange: "#EF841F",
      highlighted: "'#FFD748'",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
});

theme.overrides = {
  MuiAppBar: {
    colorPrimary: {
      color: theme.palette.common.white,
    },
  },
  MuiToolbar: {
    dense: {
      minHeight: 51,
    },
  },
  MuiContainer: {
    root: {
      padding: theme.spacing(2),
    },
  },
  MuiPaper: {
    elevation1: {
      width: "calc(100% - 50px) !important",
      top: "0 !important",
      float: "none !important",
      margin: "0 !important",
      padding: "24px !important",
      boxShadow: "0px 3px 6px #00000029 !important",
    },
  },
};

theme.props = {
  MuiToolbar: {
    variant: "dense",
  },
};

export default theme;
