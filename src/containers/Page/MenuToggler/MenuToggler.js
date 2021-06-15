import { useState } from "react";
import { useDebounce } from "react-use";
import { useAppState } from "@contexts/AppProvider";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import { ButtonBase, Tooltip } from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "0px 3px 6px #00000029",
    fontSize: 11,
  },
}))(Tooltip);

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
    <LightTooltip title={title} placement="right">
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
    </LightTooltip>
  );
};

export default MenuToggler;
