import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  cell: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
  },
}));
