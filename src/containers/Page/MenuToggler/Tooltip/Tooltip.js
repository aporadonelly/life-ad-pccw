import { useState } from "react";
import { useDebounce } from "react-use";
import { useAppState } from "@contexts/AppProvider";
import { useTheme } from "@material-ui/core/styles";
import { Tooltip as MuiTooltip } from "@material-ui/core";
import { useStyles } from "./styles";

const getTitle = (state) => (state.collapsed ? "Expand" : "Collapse");

const Tooltip = (props) => {
  const { children } = props;
  const { state } = useAppState();
  const [title, setTitle] = useState(() => getTitle(state));
  const theme = useTheme();
  const classes = useStyles();

  useDebounce(
    () => setTitle(getTitle(state)),
    theme.transitions.duration.shorter,
    [state.collapsed]
  );

  return (
    <MuiTooltip classes={classes} title={title} placement="right">
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
