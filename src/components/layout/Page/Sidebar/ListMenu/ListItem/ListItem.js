import { useStyles } from "./styles";
import { ListItem as MuiListItem } from "@material-ui/core";

const ListItem = (props) => {
  const classes = useStyles();

  return <MuiListItem classes={classes} {...props} />;
};

export default ListItem;
