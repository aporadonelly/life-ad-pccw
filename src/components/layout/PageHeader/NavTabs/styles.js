import { makeStyles } from "@material-ui/core/styles";

const useLvl1TabsStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 5),
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "auto",
    "& > span": {
      borderLeftWidth: 10,
      borderLeftStyle: "solid",
      borderLeftColor: "transparent",
      borderRightWidth: 10,
      borderRightStyle: "solid",
      borderRightColor: "transparent",
      borderBottomWidth: 10,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.common.white,
    },
  },
}));

const useLvl1TabStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.body1.fontSize,
    minWidth: "fit-content",
    padding: 0,
    marginRight: theme.spacing(3),
  },
}));

const useLvl2TabsStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    padding: theme.spacing(0, 5),
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 3,
    "& > span": {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const useLvl2TabStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.body2.fontSize,
    minWidth: "fit-content",
    padding: 0,
    marginRight: theme.spacing(3),
    "&$selected": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  selected: {},
}));

export {
  useLvl1TabsStyles,
  useLvl1TabStyles,
  useLvl2TabsStyles,
  useLvl2TabStyles,
};
