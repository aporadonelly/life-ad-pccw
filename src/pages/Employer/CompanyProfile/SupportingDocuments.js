import { Grid, Divider, Icon } from "@material-ui/core";
import { BusinessCenter } from "../../../assets/icons";

const CompanySupportingDocs = ({ item, classes }) => {
  return (
    <>
      <Grid container justify="space-between" alignItems="center" >
        <Grid item key={item.id} className={classes.supportingDocsValue}>{item.fileName}</Grid>
        <Grid item>
          <Icon><img src={BusinessCenter} width="100%" /></Icon>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default CompanySupportingDocs;
