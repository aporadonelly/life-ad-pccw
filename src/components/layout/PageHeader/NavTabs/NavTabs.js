import { useMemo } from "react";
import { useLocation, useRouteMatch, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

const Lvl1Tabs = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "auto",
    transition: "none",
    "& > span": {
      borderLeftWidth: 10,
      borderLeftStyle: "solid",
      borderLeftColor: "transparent",
      borderRightWidth: 10,
      borderRightStyle: "solid",
      borderRightColor: "transparent",
      borderBottomWidth: 10,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.common.white,
    },
  },
}))((props) => (
  <TabList {...props} TabIndicatorProps={{ children: <span /> }} />
));

const Lvl1Tab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.body1.fontSize,
    minWidth: "fit-content",
    padding: 0,
    marginRight: theme.spacing(3),
  },
}))((props) => <Tab disableRipple {...props} />);

const Lvl2Tabs = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    padding: theme.spacing(0, 3),
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 3,
    "& > span": {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
}))((props) => (
  <TabList {...props} TabIndicatorProps={{ children: <span /> }} />
));

const Lvl2Tab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.body2.fontSize,
    minWidth: "fit-content",
    padding: 0,
    marginRight: theme.spacing(3),
    "&$selected": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const NavTabs = (props) => {
  const { routes } = props;
  const location = useLocation();
  const match = useRouteMatch(location.pathname);

  const activeTabs = useMemo(() => {
    const findActiveTab = (routes, tabs = []) => {
      return routes.reduce((result, route) => {
        if (match.path.indexOf(route.path) !== -1) {
          result.push(route.path);
        }
        if (route.children) {
          return findActiveTab(route.children, tabs);
        }
        return result;
      }, tabs);
    };

    return findActiveTab(routes);
  }, [match.path, routes]);

  const { lvl1, lvl2 } = useMemo(
    () =>
      routes.reduce(
        (result, { children, ...route }) => {
          if (children && children.length) {
            route.redirect = children[0].path;
            result["lvl2"].push({
              path: route.path,
              tabs: children,
            });
          }
          result["lvl1"].push(route);
          return result;
        },
        { lvl1: [], lvl2: [] }
      ),
    [routes]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
    >
      <TabContext value={activeTabs.shift()}>
        <Lvl1Tabs>
          {lvl1.map((route) => (
            <Lvl1Tab
              key={route.path}
              component={Link}
              to={route.redirect ?? route.path}
              label={route.name}
              value={route.path}
            />
          ))}
        </Lvl1Tabs>
        {lvl2.map(({ path, tabs }) => (
          <TabPanel
            key={path}
            value={path}
            style={{ width: "100%", padding: 0 }}
          >
            <TabContext value={activeTabs.pop()}>
              <Lvl2Tabs>
                {tabs.map((route) => (
                  <Lvl2Tab
                    key={route.path}
                    component={Link}
                    to={route.path}
                    label={route.name}
                    value={route.path}
                  />
                ))}
              </Lvl2Tabs>
            </TabContext>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default NavTabs;
