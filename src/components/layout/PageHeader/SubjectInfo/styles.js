import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2, 0),
    "& > :not(:first-child):not(:last-child)": {
      margin: "0 auto",
    },
  },
  spacing: {
    "&:nth-child(odd)": {
      paddingLeft: theme.spacing(2),
    },
    "&:nth-child(even)": {
      paddingRight: theme.spacing(2),
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
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightLight: {
    fontWeight: theme.typography.fontWeightLight,
  },
}));

export { useStyles };
