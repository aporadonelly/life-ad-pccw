import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    "& [data-sticky-td]": {
      position: "sticky",
    },
    "& [data-sticky-last-left-td]": {
      backgroundColor: theme.palette.common.white,
    },
    "& [data-sticky-first-right-td]": {
      backgroundColor: theme.palette.common.white,
    },
  },
}));
