import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#0D6A88",
  },
  project: {
    fontStyle: "italic",
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
  },
  framework: {
    maxWidth: 100,
    marginRight: theme.spacing(11.5),
    textTransform: "uppercase",
  },
  grow: {
    flexGrow: 1,
  },
  cycleDate: {
    textTransform: "uppercase",
  },
  translateIcon: {
    marginRight: theme.spacing(0.5),
  },
  settingsIcon: {
    marginLeft: theme.spacing(0.5),
  },
}));

export { useStyles };
