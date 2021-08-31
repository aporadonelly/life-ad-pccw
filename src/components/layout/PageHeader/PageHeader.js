import { AppBar, Box } from "@material-ui/core";
import { useStyles } from "./styles";
import SubjectInfo from "./SubjectInfo";
import NavTabs from "./NavTabs";

const PageHeader = (props) => {
  const { routes, children } = props;
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Box
        className={classes.spacing}
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        py={2}
        px={5}
      >
        {children}
      </Box>
      {routes && <NavTabs routes={routes} />}
    </AppBar>
  );
};

PageHeader.SubjectInfo = SubjectInfo;

export default PageHeader;
