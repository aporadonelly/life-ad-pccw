import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal,
  },
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(-1.5),
    right: theme.spacing(-1.5),
    color: theme.palette.error.main,
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    "& svg": {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  // imgDialog: {
  //   width: "4rem",
  //   height: "4rem",
  // },
  // btnContainer: {
  //   marginTop: "1rem",
  //   display: "flex",
  //   justifyContent: "center",
  // },
  // dialogContainer: {
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // dialogText: {
  //   marginLeft: "1rem",
  //   fontSize: "1.4rem",
  //   color: "grey",
  //   flexWrap: "wrap",
  // },
}));

export { useStyles };
