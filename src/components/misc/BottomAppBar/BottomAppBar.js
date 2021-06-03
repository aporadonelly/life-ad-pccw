import { useStyles } from "./styles";
import { AppBar, Toolbar } from "@material-ui/core";

const BottomAppBar = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="inherit">
      <Toolbar className={classes.toolbar} variant="regular">
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
