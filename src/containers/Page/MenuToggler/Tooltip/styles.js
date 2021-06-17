import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "0px 3px 6px #00000029",
    color: theme.palette.common.black,
    fontSize: theme.spacing(1.5),
  },
}));
