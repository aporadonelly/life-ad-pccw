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
}));

export { useStyles };
