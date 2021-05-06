import { useRef, useState, useEffect } from "react";
import { useAppState } from "@contexts/AppProvider";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { UserPlaceholder as UserPlaceholderIcon } from "@components/icons";
import Panel from "./Panel";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(0, 1.5, 0, 1),
  },
  itemAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(4.25),
    height: theme.spacing(4.25),
  },
}));

const UserMenu = () => {
  const classes = useStyles();
  const {
    user: { displayName },
  } = useAppState();
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
      <List disablePadding>
        <ListItem
          className={classes.item}
          ref={anchorRef}
          onClick={handleToggle}
          button
        >
          <ListItemAvatar className={classes.itemAvatar}>
            <UserPlaceholderIcon className={classes.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={displayName}
            secondary="Admin Operator"
            primaryTypographyProps={{ variant: "body2" }}
            secondaryTypographyProps={{ variant: "caption", color: "inherit" }}
          />
        </ListItem>
      </List>
      <Panel
        ref={anchorRef}
        open={open}
        onClose={handleClose}
        onListKeyDown={handleListKeyDown}
      />
    </>
  );
};

export default UserMenu;
