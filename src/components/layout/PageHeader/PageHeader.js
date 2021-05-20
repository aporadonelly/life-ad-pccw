import { AppBar, Toolbar } from "@material-ui/core";
import SubjectInfo from "./SubjectInfo";
import NavTabs from "./NavTabs";

const PageHeader = (props) => {
  const { routes } = props;
  return (
    <AppBar position="relative">
      <Toolbar>
        <SubjectInfo />
      </Toolbar>
      <NavTabs routes={routes} />
    </AppBar>
  );
};

export default PageHeader;
