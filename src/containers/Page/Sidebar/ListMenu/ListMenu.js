import { useTranslation } from "react-i18next";
import { useRouteMatch, Link } from "react-router-dom";
import { useAppState } from "@contexts/AppProvider";
import { nanoid } from "@reduxjs/toolkit";
import { map, compact } from "lodash";
import clsx from "clsx";
import { useStyles } from "./styles";
import { List, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import ListItem from "./ListItem";
import { sidebarRoutes } from "@routes/";

const ListMenu = () => {
  const { state } = useAppState();
  const { t } = useTranslation(["sider"]);
  const match = useRouteMatch(compact(map(sidebarRoutes, "path")));
  const classes = useStyles();

  return (
    <List className={classes.list} dense>
      {sidebarRoutes.map((route) =>
        route.divider ? (
          <Divider key={nanoid()} className={classes.divider} />
        ) : (
          <ListItem
            key={route.name}
            component={Link}
            to={route.redirect ?? route.path}
            selected={route.path === match?.path}
            button
            disableRipple
          >
            <ListItemIcon className={classes.listItemIcon}>
              {route.icon}
            </ListItemIcon>
            <ListItemText
              primary={t(`sider:menu.${route.name}`)}
              primaryTypographyProps={{
                className: clsx(classes.listItemText, {
                  [classes.show]: !state.collapsed,
                  [classes.hide]: state.collapsed,
                }),
                color: "inherit",
              }}
            />
          </ListItem>
        )
      )}
    </List>
  );
};

export default ListMenu;
