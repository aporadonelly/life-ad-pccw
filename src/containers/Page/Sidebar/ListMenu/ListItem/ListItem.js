import { ListItem as MuiListItem } from "@material-ui/core";
import { useStyles } from "./styles";

const ListItem = (props) => {
  const classes = useStyles();

  return <MuiListItem classes={classes} {...props} />;
};

export default ListItem;
