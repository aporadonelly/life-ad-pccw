import { useAppState } from "@contexts/AppProvider";
import clsx from "clsx";
import { useStyles } from "./styles";
import { ButtonBase } from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";

const MenuToggler = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppState();

  return (
    <ButtonBase
      className={clsx("offset", classes.menuToggler, {
        [classes.slideIn]: state.collapsed,
        [classes.slideOut]: !state.collapsed,
      })}
      id="app-menu-toggler"
      onClick={() => dispatch({ type: "sidebarCollapsed" })}
    >
      {state.collapsed ? (
        <ChevronLeftIcon color="primary" />
      ) : (
        <ChevronRightIcon color="primary" />
      )}
    </ButtonBase>
  );
};

export default MenuToggler;
