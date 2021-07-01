import { Grid, Divider } from "@material-ui/core";
import { PropTypes } from "prop-types";

const CompanySupportingDocs = ({ item, classes }) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <Grid item key={item.id} className={classes.supportingDocsValue}>
          {item.fileName}
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

CompanySupportingDocs.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object,
};

export default CompanySupportingDocs;
