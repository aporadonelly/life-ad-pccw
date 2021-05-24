import { Grid, Divider, Icon, Tooltip } from "@material-ui/core";
import PropTypes from 'prop-types';
import { ViewButton } from "../../../assets/icons";

const CompanySupportingDocs = ({ item, classes }) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="center" >
        <Grid item key={item.id} className={classes.supportingDocsValue}>{item.fileName}</Grid>
        <Grid item>
          <Tooltip title="View" placement="top" arrow>
            <Icon style={{ cursor: "pointer" }}>
              <img src={ViewButton} width="32px" />
            </Icon>
          </Tooltip>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

CompanySupportingDocs.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.object
};

export default CompanySupportingDocs;
