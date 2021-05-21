import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spacing: {
    "&:nth-child(odd)": {
      paddingRight: theme.spacing(2),
    },
    "&:nth-child(even)": {
      paddingLeft: theme.spacing(2),
    },
  },
  divider: {
    position: "relative",
    "&:not(:last-child)::after": {
      content: "''",
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: 2,
      height: "90%",
      backgroundColor: theme.palette.common.white,
    },
  },
  typography: {
    fontWeight: "inherit",
  },
}));

export { useStyles };
