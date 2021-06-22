import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  closeIcon: {
    color: theme.palette.grey[700],
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: 0,
    pointerEvents: "all",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  inputBase: {
    padding: theme.spacing(0, 2),
    color: "#707070",
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#707070",
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex,
    }),
    width: theme.spacing(25),
    "&:hover": {
      width: "100%",
    },
  },
}));
