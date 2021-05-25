import AppProvider from "@contexts/AppProvider";
import { useStyles } from "./styles";
import { Toolbar } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuToggler from "./MenuToggler";
import Settings from "./Settings";

const Page = (props) => {
  const { user, cycleDate, logout, children } = props;
  const classes = useStyles();

  return (
    <AppProvider>
      <div className={classes.root}>
        <Header
          displayName={user?.displayName}
          cycleDate={cycleDate}
          onLogout={logout}
        />
        <Sidebar />
        <MenuToggler />
        <main className={classes.content}>
          <Toolbar />
          {children}
        </main>
      </div>
      <Settings />
    </AppProvider>
  );
};

export default Page;
