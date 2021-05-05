import { forwardRef } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  ClickAwayListener,
  Grow,
  Popper,
  Paper,
  MenuList,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      marginRight: theme.spacing(2),
      minWidth: 150,
    },
    divider: {
      margin: theme.spacing(0.25, 0),
    },
    status: {
      position: "relative",
      paddingLeft: theme.spacing(2.5),
      "&::before": {
        content: "''",
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
        borderRadius: theme.spacing(0.75),
        backgroundColor: theme.palette.success.main,
      },
    },
  })
);

function Panel(props, ref) {
  const { open, onClose, onListKeyDown } = props;
  const classes = useStyles();

  return (
    <Popper
      open={open}
      anchorEl={ref.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper className={classes.paper} variant="outlined">
            <ClickAwayListener onClickAway={onClose}>
              <MenuList onKeyDown={onListKeyDown}>
                <MenuItem
                  dense
                  onClick={() => {
                    window.localStorage.clear();
                    window.location.href = "/signin";
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default forwardRef(Panel);
