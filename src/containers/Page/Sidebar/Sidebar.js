import { useAppState } from "@contexts/AppProvider";
import clsx from "clsx";
import { Drawer, Toolbar } from "@material-ui/core";
import ListMenu from "./ListMenu";
import { useStyles } from "./styles";

const Sidebar = () => {
  const { state } = useAppState();
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: !state.collapsed,
        [classes.drawerClose]: state.collapsed,
      })}
      classes={{
        paper: clsx(classes.drawerPaper, {
          [classes.drawerOpen]: !state.collapsed,
          [classes.drawerClose]: state.collapsed,
        }),
      }}
      PaperProps={{
        component: "aside",
      }}
    >
      <Toolbar />
      <ListMenu />
    </Drawer>
  );
};

export default Sidebar;
