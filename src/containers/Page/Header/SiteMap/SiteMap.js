import { withTranslation } from "react-i18next";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import { Breadcrumbs, Typography, ButtonBase } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";

const SiteMap = ({ routes }) => {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch(Object.keys(routes));

  if (match) {
    return (
      <div className={classes.root}>
        <ButtonBase className={classes.buttonBase} onClick={history.goBack}>
          <ChevronLeftIcon />
        </ButtonBase>
        <Breadcrumbs
          color="inherit"
          separator={<Typography variant="body2">/</Typography>}
        >
          {routes[match.path].split("/").map((breadcrumb) => (
            <Typography key={breadcrumb} variant="body2">
              {breadcrumb}
            </Typography>
          ))}
        </Breadcrumbs>
      </div>
    );
  }

  return null;
};

export default withTranslation("breadcrumbs")(({ t }) => (
  <SiteMap routes={t("siteMap", { returnObjects: true })} />
));
