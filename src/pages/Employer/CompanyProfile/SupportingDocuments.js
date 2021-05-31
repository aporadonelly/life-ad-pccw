import { Grid, Divider, Icon, Tooltip } from "@material-ui/core";
import { PropTypes } from 'prop-types';
import { ViewButton } from "../../../assets/icons";

const CompanySupportingDocs = ({ item, classes }) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="center" >
        <Grid item key={item.id} className={classes.supportingDocsValue}>{item.fileName}</Grid>

        {/* <Grid item style={{ paddingTop: 10 }}>
          <Tooltip title="View" placement="top" arrow>
            <Icon style={{ cursor: "pointer" }}>
              <img src={ViewButton} width={32} />
            </Icon>
          </Tooltip>
        </Grid> */}

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
