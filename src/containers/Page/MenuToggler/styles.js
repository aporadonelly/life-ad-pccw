import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menuToggler: {
    zIndex: theme.zIndex.drawer + 1,
    position: "fixed",
    top: theme.spacing(8),
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: theme.spacing(-2),
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    boxShadow: "0px 3px 6px #00000029",
  },
  slideIn: {
    left: theme.custom.drawer.width,
    transition: theme.transitions.create("left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  slideOut: {
    transition: theme.transitions.create("left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    left: theme.spacing(10),
  },
}));
