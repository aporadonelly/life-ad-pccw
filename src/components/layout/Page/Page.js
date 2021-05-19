import AppProvider from "@contexts/AppProvider";
import { useStyles } from "./styles";
import { Toolbar } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MenuToggler from "./MenuToggler";
import Settings from "./Settings";

const Page = ({ children }) => {
  const classes = useStyles();

  return (
    <AppProvider>
      <div className={classes.root}>
        <Header />
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
