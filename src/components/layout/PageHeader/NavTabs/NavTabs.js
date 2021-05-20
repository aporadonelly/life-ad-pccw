import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Box, Tabs, Tab } from "@material-ui/core";

const Lvl1Tabs = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "auto",
    // transition: "none",
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
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

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
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

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
  const { tabs, activeTabs } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
    >
      <Lvl1Tabs value={activeTabs[0]}>
        {tabs.lvl1.map((route) => (
          <Lvl1Tab
            key={route.path}
            component={Link}
            to={route.redirect ?? route.path}
            label={route.name}
            value={route.path}
          />
        ))}
      </Lvl1Tabs>
      {tabs.lvl2.map(({ path, tabs }) => {
        if (path === activeTabs[0])
          return (
            <Lvl2Tabs key={path} value={activeTabs[1]}>
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
          );
        return null;
      })}
    </Box>
  );
};

export default NavTabs;
