import { useAppState } from "@contexts/AppProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import { BaseDrawer } from "@components/common";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("sm")]: {
      width: BaseDrawer.width,
      flexShrink: 0,
    },
  },
}));

const Sider = ({ children }) => {
  const classes = useStyles();
  const { user, siderOpen, siderToggled } = useAppState();

  if (user) {
    return (
      <nav className={classes.nav}>
        <Hidden smUp implementation="css">
          <BaseDrawer
            open={siderOpen}
            onClose={siderToggled}
            variant="temporary"
            ModalProps={{
              keepMounted: true,
            }}
          >
            {children}
          </BaseDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <BaseDrawer variant="permanent">{children}</BaseDrawer>
        </Hidden>
      </nav>
    );
  }

  return null;
};

export default Sider;
