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
      orange: "#EF841F",
    },
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
  MuiPaper: {
    elevation1: {
      top: "0 !important",
      float: "none !important",
      margin: "16px !important",
    },
  },
};

theme.props = {
  MuiToolbar: {
    variant: "dense",
  },
};

export default theme;
