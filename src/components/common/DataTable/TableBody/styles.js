import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: "nowrap",
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      paddingRight: 0,
    },
  },
}));
