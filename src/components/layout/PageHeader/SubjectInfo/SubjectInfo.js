import { reduce } from "lodash";
import clsx from "clsx";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const SubjectInfo = (props) => {
  const { subject, info } = props;
  const classes = useStyles();

  return (
    <Box
      className={classes.divider}
      display="flex"
      flexDirection="column"
      fontWeight="fontWeightMedium"
    >
      <Typography
        className={classes.typography}
        variant="body1"
        color="inherit"
      >
        {subject}
      </Typography>
      <Box display="flex" flexWrap="wrap" fontWeight="fontWeightLight">
        {reduce(
          info,
          (result, value, key) => [
            ...result,
            <Typography
              className={clsx(
                classes.typography,
                classes.divider,
                classes.spacing
              )}
              variant="body2"
              color="inherit"
            >
              {key} {value}
            </Typography>,
          ],
          []
        )}
      </Box>
    </Box>
  );
};

export default SubjectInfo;
