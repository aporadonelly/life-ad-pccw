import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2D9FC3",
    },
    secondary: {
      main: "#EF841F",
    },
    common: {
      highlighted: "#FFD748",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h6: {
      fontWeight: "bold",
    },
    caption: {
      fontSize: "0.65rem",
      lineHeight: 1,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 50,
    },
  },
  custom: {
    drawer: {
      width: 230,
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
      },
    },
  },
  MuiCard: {
    root: {
      boxShadow: "0px 3px 6px #00000029",
      borderRadius: 15,
    },
  },
  MuiFormLabel: {
    root: {
      color: theme.palette.grey[700],
      fontSize: 13,
    },
  },
  MuiInputLabel: {
    shrink: {
      transform: "translate(0, 1.5px) scale(1)",
    },
  },
  MuiInputBase: {
    input: {
      "&::placeholder": {
        fontStyle: "italic",
        fontSize: 16,
      },
    },
  },
  MuiFormHelperText: {
    root: {
      marginTop: 5,
      "&$error": {
        fontSize: "0.75rem",
      },
    },
  },
  MuiButton: {
    root: {
      minWidth: 120,
    },
    outlined: {
      borderWidth: 2,
      borderRadius: 40,
      borderColor: theme.palette.common.white,
      color: theme.palette.common.white,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      height: 38,
      transition: "none",
      "&:hover": {
        borderWidth: 2,
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
      },
    },
    outlinedSecondary: {
      borderWidth: 2,
      borderRadius: 40,
      borderColor: theme.palette.secondary.main,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      height: 38,
      transition: "none",
      "&:hover": {
        borderWidth: 2,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
      },
    },
    containedPrimary: {
      borderWidth: 2,
      borderRadius: 40,
    },
    containedSecondary: {
      color: theme.palette.common.white,
      borderRadius: 40,
      height: 38,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  MuiTabPanel: {
    root: {
      padding: 0,
      width: "100%",
    },
  },
  MuiTableRow: {
    root: {
      "&:last-child td": {
        borderBottom: 0,
      },
    },
  },
  MuiCheckbox: {
    root: { marginTop: -1 },
  },
};

theme.props = {
  MuiAppBar: {
    position: "fixed",
    elevation: 0,
  },
  MuiFormControl: {
    fullWidth: true,
  },
  MuiTextField: {
    InputLabelProps: {
      shrink: true,
    },
    fullWidth: true,
  },
  MuiCheckbox: {
    color: "primary",
  },
  MuiButton: {
    variant: "contained",
    color: "secondary",
    disableElevation: true,
  },
};

export default theme;
