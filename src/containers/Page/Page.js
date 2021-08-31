import AppProvider from "@contexts/AppProvider";
import { Toolbar } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuToggler from "./MenuToggler";
import Settings from "./Settings";
import { useStyles } from "./styles";

const Page = (props) => {
  const { user, cycleDate, logout, children } = props;
  const classes = useStyles();

  return (
    <AppProvider>
      <div className={classes.root}>
        <Header user={user} cycleDate={cycleDate} onLogout={logout} />
        {user && <Sidebar />}
        {user && <MenuToggler />}
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
