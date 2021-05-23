import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.common.white,
  },
  buttonBase: {
    marginRight: theme.spacing(1),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "inherit",
    borderRadius: "50%",
  },
}));

export { useStyles };
