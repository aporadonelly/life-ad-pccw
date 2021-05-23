import { Grid, Divider, Icon, Tooltip } from "@material-ui/core";
import { BusinessCenter } from "../../../assets/icons";

const CompanySupportingDocs = ({ item, classes }) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="center" >
        <Grid item key={item.id} className={classes.supportingDocsValue}>{item.fileName}</Grid>
        <Grid item>
          <Tooltip title="View" placement="top" arrow>
            <Icon>
              <img src={BusinessCenter} width="32px" />
            </Icon>
          </Tooltip>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default CompanySupportingDocs;
