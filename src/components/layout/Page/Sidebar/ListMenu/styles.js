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
    transition: theme.transitions.create("visibility", {
      duration: theme.transitions.duration.shortest,
    }),
    visibility: (props) => (props.collapsed ? "visible" : "hidden"),
    fontWeight: theme.typography.fontWeightMedium,
    whiteSpace: "pre-wrap",
  },
  divider: {
    height: 2,
    margin: theme.spacing(1, 0.5),
  },
}));

export { useStyles };
