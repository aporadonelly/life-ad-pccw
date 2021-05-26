import { forwardRef } from "react";
import {
  ClickAwayListener,
  Grow,
  Popper,
  Paper,
  MenuList,
} from "@material-ui/core";

const PopoverMenu = (props, ref) => {
  const { open, onClose, onListKeyDown, PaperProps, children } = props;

  return (
    <Popper open={open} anchorEl={ref.current} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper {...PaperProps}>
            <ClickAwayListener onClickAway={onClose}>
              <MenuList onKeyDown={onListKeyDown}>{children}</MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default forwardRef(PopoverMenu);
