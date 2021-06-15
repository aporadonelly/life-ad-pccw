import { useState } from "react";
import { useDebounce } from "react-use";
import { useAppState } from "@contexts/AppProvider";
import clsx from "clsx";
import { useStyles } from "./styles";
import { ButtonBase, Tooltip } from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";

const MenuToggler = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppState();
  const [title, setTitle] = useState();

  useDebounce(
    () => {
      const title = state.collapsed ? "Collapse" : "Expand";
      setTitle(title);
    },
    250,
    [state.collapsed, setTitle]
  );

  return (
    <Tooltip title={title} placement="right">
      <ButtonBase
        className={clsx("offset", classes.menuToggler, {
          [classes.slideIn]: state.collapsed,
          [classes.slideOut]: !state.collapsed,
        })}
        id="app-menu-toggler"
        onClick={() =>
          dispatch({ type: "sidebarCollapsed", collapsed: !state.collapsed })
        }
      >
        {state.collapsed ? (
          <ChevronLeftIcon color="primary" />
        ) : (
          <ChevronRightIcon color="primary" />
        )}
      </ButtonBase>
    </Tooltip>
  );
};

export default MenuToggler;
