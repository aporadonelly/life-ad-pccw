import { useAppState } from "@contexts/AppProvider";
import { useStyles } from "./styles";
import { Drawer } from "@material-ui/core";
import LanguageSwitcher from "./LanguageSwitcher";

const Settings = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppState();

  return (
    <Drawer
      anchor="right"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={state.settingsOpen}
      onClose={() => dispatch({ type: "settingsToggled" })}
    >
      <div className={classes.drawerContainer}>
        <LanguageSwitcher />
      </div>
    </Drawer>
  );
};

export default Settings;
