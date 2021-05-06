import { useAppState } from "@contexts/AppProvider";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import {
  Translate as TranslateIcon,
  Settings as SettingsIcon,
} from "@components/icons";
import MenuToggler from "./MenuToggler";
import UserMenu from "./UserMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    fontStyle: "italic",
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 1, 0, 2),
  },
  subtitle: {
    flexGrow: 1,
  },
  cycleDate: {
    padding: theme.spacing(0, 0.5),
    textTransform: "uppercase",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { user, cycleDate, settingsToggled } = useAppState();
  const { t } = useTranslation(["header"]);

  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar>
        <MenuToggler />
        <Typography className={classes.title} variant="h6">
          {t("header:title")}
        </Typography>
        <Typography className={classes.subtitle} variant="body1">
          {t("header:subtitle")}
        </Typography>
        {user && <UserMenu />}
        <IconButton onClick={settingsToggled}>
          <TranslateIcon fontSize="small" />
        </IconButton>
        <Typography className={classes.cycleDate} variant="body2">
          {cycleDate}
        </Typography>
        <IconButton edge="end">
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
