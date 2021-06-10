import AppProvider from "@contexts/AppProvider";
import { useStyles } from "./styles";
import { Toolbar } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuToggler from "./MenuToggler";
import Settings from "./Settings";
import React, { useEffect } from "react";

const Page = (props) => {
  const { user, cycleDate, logout, children, reissue } = props;
  const classes = useStyles();
  const MinuteMilisecs = 1000 * 6 * 1; /// per minute

  useEffect(() => {
    const interval = setInterval(() => {
      reissue();
    }, MinuteMilisecs);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

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
