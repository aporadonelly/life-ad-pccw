import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.custom.drawer.width,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    border: 0,
    boxShadow: "0px 3px 6px #00000029",
  },
  drawerOpen: {
    width: theme.custom.drawer.width,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(10),
  },
}));

export { useStyles };
