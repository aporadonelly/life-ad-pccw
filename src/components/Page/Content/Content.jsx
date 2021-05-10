import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#F3F9F9",
  },
}));

const Content = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.main}>{children}</main>;
};

export default Content;
