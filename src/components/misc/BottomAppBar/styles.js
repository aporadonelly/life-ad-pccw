import { makeStyles, darken } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.common.white, 0.5),
  },
  toolbar: {
    justifyContent: "flex-end",
    minHeight: 60,
  },
}));

export { useStyles };
