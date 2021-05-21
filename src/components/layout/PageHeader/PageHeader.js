import { useMemo, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import SubjectInfo from "./SubjectInfo";
import NavTabs from "./NavTabs";

const PageHeader = (props) => {
  const { subjectInfo, routes } = props;
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

  const tabs = useMemo(
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

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("resize"));
  }, []);

  return (
    <AppBar position="relative">
      <Toolbar>
        <SubjectInfo data={subjectInfo} />
      </Toolbar>
      <NavTabs tabs={tabs} activeTabs={activeTabs} />
    </AppBar>
  );
};

PageHeader.defaultProps = {
  subjectInfo: [],
  routes: [],
};

export default PageHeader;
