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
      highlighted: "#FFD748",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 51,
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
  MuiDrawer: {
    paper: {
      [theme.breakpoints.up("sm")]: {
        paddingTop: 30, // Temporary fix for system env
      },
    },
  },
  MuiPaper: {
    elevation1: {
      width: "100% !important",
      top: "0 !important",
      float: "none !important",
      margin: "0 !important",
      "&:not(:first-child)": {
        marginTop: "24px !important",
      },
      padding: "24px !important",
      boxShadow: "0px 3px 6px #00000029 !important",
    },
  },
  MuiTable: {
    root: {
      [theme.breakpoints.down("sm")]: {
        display: "block",
        width: "100%",
        overflowX: "auto",
      },
    },
  },
  MuiTablePagination: {
    root: {
      overflow: "hidden",
    },
    spacer: {
      display: "none",
    },
    action: {
      flexGrow: 1,
    },
    toolbar: {
      flexDirection: "row-reverse",
    },
    selectRoot: {
      display: "none",
    },
  },
  MuiBreadcrumbs: {
    root: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(2, 3),
      marginTop: 30, // Temporary fix for system env
    },
  },
};

theme.props = {};

export default theme;
