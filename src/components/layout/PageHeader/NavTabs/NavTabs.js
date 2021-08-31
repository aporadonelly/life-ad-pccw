import { useMemo, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { map } from "lodash";
import { Box, Tab } from "@material-ui/core";
import {
  TabContext as MuiTabContext,
  TabPanel,
  TabList,
} from "@material-ui/lab";
import {
  useLvl1TabsStyles,
  useLvl1TabStyles,
  useLvl2TabsStyles,
  useLvl2TabStyles,
} from "./styles";

const TabContext = (props) => {
  const { tabs, children } = props;
  const match = useRouteMatch(map(tabs, "path"));

  return <MuiTabContext value={match?.path}>{children}</MuiTabContext>;
};

const NavTabs = (props) => {
  const { routes } = props;
  const lvl1TabsClasses = useLvl1TabsStyles();
  const lvl1TabClasses = useLvl1TabStyles();
  const lvl2TabsClasses = useLvl2TabsStyles();
  const lvl2TabClasses = useLvl2TabStyles();

  const tabs = useMemo(
    () =>
      routes.reduce(
        (result, { children, ...route }) => {
          if (children && children.length) {
            result["lvl2"].push({
              path: route.path,
              tabs: children.filter((tab) => tab.tab),
            });
          }
          route.tab && result["lvl1"].push(route);
          return result;
        },
        { lvl1: [], lvl2: [] }
      ),
    [routes]
  );

  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new CustomEvent("resize")), 500);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
    >
      <TabContext tabs={tabs.lvl1}>
        <TabList
          classes={lvl1TabsClasses}
          TabIndicatorProps={{ children: <span /> }}
        >
          {tabs.lvl1.map((tab) => (
            <Tab
              key={tab.name}
              classes={lvl1TabClasses}
              component={Link}
              to={tab.redirect ?? tab.path}
              label={tab.name}
              value={tab.path}
              disableRipple
            />
          ))}
        </TabList>
        {tabs.lvl2.map(
          (tab) =>
            tab.tabs.length > 0 && (
              <TabPanel key={tab.path} value={tab.path}>
                <TabContext tabs={tab.tabs}>
                  <TabList
                    classes={lvl2TabsClasses}
                    TabIndicatorProps={{ children: <span /> }}
                  >
                    {tab.tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        classes={lvl2TabClasses}
                        component={Link}
                        to={tab.redirect ?? tab.path}
                        label={tab.name}
                        value={tab.path}
                        disableRipple
                      />
                    ))}
                  </TabList>
                </TabContext>
              </TabPanel>
            )
        )}
      </TabContext>
    </Box>
  );
};

export default NavTabs;
