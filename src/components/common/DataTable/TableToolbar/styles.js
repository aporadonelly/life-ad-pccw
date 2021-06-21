import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
    padding: 0,
    "& > :not(:last-child)": {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
  },
}));
