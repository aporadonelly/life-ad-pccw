import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    width: "100%",
    overflow: "hidden",
    padding: theme.spacing(3),
    backgroundColor: "#F3F9F9",
  },
}));

const Content = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Toolbar />
      {children}
    </main>
  );
};

export default Content;
