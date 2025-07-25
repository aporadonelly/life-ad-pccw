import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: theme.palette.common.white,
  },
  adornment: {
    position: "absolute",
    right: theme.spacing(3),
  },
}));

export { useStyles };
