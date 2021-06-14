import { useRef } from "react";
import { useHoverDirty, useDebounce } from "react-use";
import { useAppState } from "@contexts/AppProvider";
import clsx from "clsx";
import { useStyles } from "./styles";
import { Drawer, Toolbar } from "@material-ui/core";
import ListMenu from "./ListMenu";

const Sidebar = () => {
  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);
  const { state, dispatch } = useAppState();
  const classes = useStyles();

  useDebounce(
    () => dispatch({ type: "sidebarCollapsed", collapsed: isHovering }),
    150,
    [isHovering]
  );

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: state.collapsed,
        [classes.drawerClose]: !state.collapsed,
      })}
      classes={{
        paper: clsx(classes.drawerPaper, {
          [classes.drawerOpen]: state.collapsed,
          [classes.drawerClose]: !state.collapsed,
        }),
      }}
      PaperProps={{
        ref: ref,
        component: "aside",
      }}
    >
      <Toolbar />
      <ListMenu />
    </Drawer>
  );
};

export default Sidebar;
