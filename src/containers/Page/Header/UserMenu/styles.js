import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    minWidth: 40,
    "& > svg": {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  info: {
    marginTop: 4,
  },
  paper: {
    minWidth: 130,
    boxShadow: "0px 3px 6px #00000029",
  },
}));

export { useStyles };
