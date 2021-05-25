import { useRef, useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@material-ui/core";
import { UserPlaceholder as UserPlaceholderIcon } from "@components/icons";
import { PopoverMenu } from "@components/menus";

const UserMenu = (props) => {
  const { displayName, onLogout } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <List disablePadding dense>
        <ListItem ref={anchorRef} onClick={handleToggle} button>
          <ListItemIcon className={classes.avatar}>
            <UserPlaceholderIcon />
          </ListItemIcon>
          <ListItemText
            className={classes.info}
            primary={displayName}
            secondary="Admin Operator"
            secondaryTypographyProps={{ variant: "caption", color: "inherit" }}
          />
        </ListItem>
      </List>
      <PopoverMenu
        ref={anchorRef}
        open={open}
        onClose={handleClose}
        onListKeyDown={handleListKeyDown}
        PaperProps={{ className: classes.paper }}
      >
        <MenuItem dense onClick={onLogout}>
          Logout
        </MenuItem>
      </PopoverMenu>
    </>
  );
};

export default UserMenu;
