import { useStyles } from "./styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { UserPlaceholder as UserPlaceholderIcon } from "@components/icons";

const UserMenu = () => {
  const classes = useStyles();

  return (
    <List disablePadding dense>
      <ListItem>
        <ListItemIcon className={classes.avatar}>
          <UserPlaceholderIcon />
        </ListItemIcon>
        <ListItemText
          className={classes.info}
          primary="Rosetta Chan"
          secondary="Admin Operator"
          secondaryTypographyProps={{ variant: "caption", color: "inherit" }}
        />
      </ListItem>
    </List>
  );
};

export default UserMenu;
