import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const StyledListItem = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0.75, 1.5),
    borderRadius: theme.spacing(0.5),
    color: theme.palette.grey[600],
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
    "&$selected": {
      backgroundColor: "transparent",
      color: theme.palette.secondary.main,
      "& .MuiListItemIcon-root": {
        color: theme.palette.secondary.main,
      },
    },
    "&$selected:hover": {
      backgroundColor: "transparent",
      color: theme.palette.secondary.main,
      "& .MuiListItemIcon-root": {
        color: theme.palette.secondary.main,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      "& .MuiListItemIcon-root": {
        color: theme.palette.common.white,
      },
    },
  },
  selected: {},
}))(ListItem);

export default StyledListItem;
