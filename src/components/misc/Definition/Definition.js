import DefinitionProvider, {
  useDefinitionState,
} from "@contexts/DefinitionProvider";
import { useStyles } from "./styles";
import { Grid, Typography } from "@material-ui/core";

const Definition = (props) => <DefinitionProvider {...props} />;

const DefinitionList = (props) => {
  const { container } = useDefinitionState();

  return (
    <Grid
      component="dl"
      container
      alignItems="flex-start"
      {...container}
      {...props}
    />
  );
};

const DefinitionItem = (props) => {
  const { dt, dd, ...rest } = props;
  const classes = useStyles();
  const { item } = useDefinitionState();

  return (
    <Grid item {...item} {...rest}>
      <Typography component="dt" variant="body2" color="textSecondary">
        {dt}
      </Typography>
      <Typography className={classes.fontWeight} component="dd" variant="body1">
        {dd}
      </Typography>
    </Grid>
  );
};

Definition.List = DefinitionList;
Definition.Item = DefinitionItem;

export default Definition;
