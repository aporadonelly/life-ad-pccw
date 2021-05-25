import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import { Breadcrumbs, Typography, ButtonBase } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";

const SiteMap = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.buttonBase}>
        <ChevronLeftIcon />
      </ButtonBase>
      <Breadcrumbs
        color="inherit"
        separator={<Typography variant="body2">/</Typography>}
      >
        <Typography variant="body2">Member</Typography>
        <Typography variant="body2">Member Enquiry</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default SiteMap;
