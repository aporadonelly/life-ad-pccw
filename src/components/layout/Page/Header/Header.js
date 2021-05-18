import { useAppState } from "@contexts/AppProvider";
import { useStyles } from "./styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import {
  Translate as TranslateIcon,
  Settings as SettingsIcon,
} from "@components/icons";
import UserMenu from "./UserMenu";
import SiteMap from "./SiteMap";

const Header = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppState();

  return (
    <AppBar component="header" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h5">
          eMPF
        </Typography>
        <Typography
          className={classes.caption}
          component="div"
          variant="caption"
        >
          ADMINISTRATION PORTAL
        </Typography>
        <SiteMap />
        <div className={classes.grow} />
        <UserMenu />
        <IconButton
          className={classes.translateIcon}
          edge="end"
          onClick={() => dispatch({ type: "languageSwitcherOpen" })}
        >
          <TranslateIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2" color="inherit">
          12 JAN 2021
        </Typography>
        <IconButton className={classes.settingsIcon} edge="end">
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
