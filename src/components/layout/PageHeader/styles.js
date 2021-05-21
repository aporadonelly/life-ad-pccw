import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spacing: {
    "& > *": {
      padding: theme.spacing(0, 3),
    },
    "& > :first-child": {
      paddingLeft: 0,
    },
    "& > :last-child": {
      paddingRight: 0,
    },
  },
}));

export { useStyles };
