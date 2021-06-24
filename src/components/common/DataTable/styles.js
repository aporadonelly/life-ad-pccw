import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  scrollbar: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    "&.ps--active-x": {
      paddingBottom: theme.spacing(3),
    },
    "& .ps__rail-x": {
      bottom: 0,
      position: "absolute",
    },
    "& .ps__thumb-x": {
      backgroundColor: "#E6E6E6",
      borderRadius: 14,
      height: 23,
      bottom: 0,
      position: "absolute",
    },
  },
}));
