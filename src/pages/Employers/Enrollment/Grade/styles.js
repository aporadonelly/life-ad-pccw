import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  typograhpy: {
    fontWeight: theme.typography.fontWeightBold,
  },
  label: {
    alignItems: "flex-start",
    marginTop: theme.spacing(1.25),
  },
  checkbox: {
    paddingTop: 0,
  },
  roman: {
    margin: 0,
    padding: 0,
    counterReset: "roman",
    "& > li": {
      listStyle: "none",
      position: "relative",
      "&::before": {
        counterIncrement: "roman",
        content: '"( " counter(roman, lower-roman)" ) "',
      },
    },
  },
}));
