import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(3, 2),
    "& > *": {
      margin: theme.spacing(0.5, 0),
    },
  },
  listItemIcon: {
    minWidth: 40,
  },
  listItemText: {
    fontWeight: theme.typography.fontWeightMedium,
    whiteSpace: "pre-wrap",
  },
  divider: {
    height: 2,
    margin: theme.spacing(1, 0.5),
  },
  show: {
    visibility: "visible",
    transition: theme.transitions.create("visibility", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    visibility: "hidden",
    transition: theme.transitions.create("visibility", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export { useStyles };
