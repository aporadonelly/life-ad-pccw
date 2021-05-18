import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(1, 2),
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
}));

export { useStyles };
