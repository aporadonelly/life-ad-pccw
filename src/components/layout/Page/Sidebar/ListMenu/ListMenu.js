import { useAppState } from "@contexts/AppProvider";
import clsx from "clsx";
import { useStyles } from "./styles";
import { List, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import {
  HomeOutlined as HomeOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon,
  BusinessOutlined as BusinessOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  BusinessCenterOutlined as BusinessCenterOutlinedIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  History as HistoryIcon,
  InfoOutlined as InfoOutlinedIcon,
} from "@material-ui/icons";
import StyledListItem from "./StyledListItem";

const ListMenu = () => {
  const { state } = useAppState();
  const classes = useStyles();

  return (
    <List className={classes.list} dense>
      <StyledListItem button selected disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Task"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <Divider className={classes.divider} />
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <PeopleOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Member"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <PersonOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Individual"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <Divider className={classes.divider} />
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <BusinessCenterOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Employer"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <BusinessOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Company"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <Divider className={classes.divider} />
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <AccountBalanceOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Trustee"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText
          primary="Transaction History"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <InfoOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Instruction"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
      <StyledListItem button disableRipple>
        <ListItemIcon className={classes.listItemIcon}>
          <BusinessOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Configuration"
          primaryTypographyProps={{
            className: clsx(classes.listItemText, {
              [classes.show]: state.collapsed,
              [classes.hide]: !state.collapsed,
            }),
            color: "inherit",
          }}
        />
      </StyledListItem>
    </List>
  );
};

export default ListMenu;
