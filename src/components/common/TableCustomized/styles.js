import { makeStyles } from "@material-ui/core/styles";

export const usePaginationStyles = makeStyles((theme) => ({
  root: {
    border: 0,
  },
  toolbar: {
    flexDirection: "row-reverse",
  },
  selectRoot: {
    display: "none",
  },
  spacer: {
    display: "none",
  },
}));

export const usePaginationActionsStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: theme.spacing(0, 1),
    width: 100,
  },
  page: {
    fontSize: "0.75rem",
    borderRadius: theme.spacing(0.5),
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.grey[400],
    padding: theme.spacing(0.35, 1.5),
    lineHeight: 1,
  },
  buttonBase: {
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.white,
    "&:first-child": {
      padding: theme.spacing(0.5, 1.25, 0.5, 1),
      "&:after": {
        content: "''",
        width: 0,
        height: 0,
        borderTopWidth: theme.spacing(0.75),
        borderTopStyle: "solid",
        borderTopColor: "transparent",
        borderRightWidth: theme.spacing(1.5),
        borderRightStyle: "solid",
        borderRightColor: theme.palette.common.white,
        borderBottomWidth: theme.spacing(0.75),
        borderBottomStyle: "solid",
        borderBottomColor: "transparent",
      },
    },
    "&:last-child": {
      padding: theme.spacing(0.5, 1, 0.5, 1.25),
      "&:after": {
        content: "''",
        width: 0,
        height: 0,
        borderTopWidth: theme.spacing(0.75),
        borderTopStyle: "solid",
        borderTopColor: "transparent",
        borderLeftWidth: theme.spacing(1.5),
        borderLeftStyle: "solid",
        borderLeftColor: theme.palette.common.white,
        borderBottomWidth: theme.spacing(0.75),
        borderBottomStyle: "solid",
        borderBottomColor: "transparent",
      },
    },
  },
  rotate: {
    transform: "rotate(-180deg)",
  },
}));

export const useContainerStyles = makeStyles((theme) => ({
  root: {
    border: 0,
  },
}));

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
  },
}));

export const useScrollbarStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    paddingBottom: theme.spacing(3),
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

export const useTableStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "block",
  },
}));

export const useHeadStyles = makeStyles((theme) => ({
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

export const useCellStyles = makeStyles((theme) => ({
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

export const useStickyStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    right: 0,
    backgroundColor: theme.palette.common.white,
    whiteSpace: "nowrap",
  },
}));
