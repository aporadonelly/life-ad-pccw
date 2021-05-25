import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: theme.custom.drawer.width,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: theme.custom.drawer.width,
    border: 0,
    boxShadow: "0px 3px 6px #00000029",
  },
  drawerContainer: {
    overflowY: "auto",
    padding: theme.spacing(2),
  },
}));

export { useStyles };
