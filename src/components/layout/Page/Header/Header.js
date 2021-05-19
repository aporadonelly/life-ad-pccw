import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation(["header"]);
  const { dispatch } = useAppState();

  return (
    <AppBar component="header" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.project} variant="h5">
          {t("header:project")}
        </Typography>
        <Typography
          className={classes.framework}
          component="div"
          variant="caption"
        >
          {t("header:framework")}
        </Typography>
        <SiteMap />
        <div className={classes.grow} />
        <UserMenu />
        <IconButton
          className={classes.translateIcon}
          edge="end"
          onClick={() => dispatch({ type: "settingsToggled" })}
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
