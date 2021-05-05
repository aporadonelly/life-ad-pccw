import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import InputField from "../InputField";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: theme.palette.common.white,
  },
}));

const SelectField = ({ options, ...props }) => {
  const classes = useStyles();

  return (
    <InputField
      select
      SelectProps={{
        MenuProps: {
          classes: {
            paper: classes.paper,
            list: classes.list,
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        },
        IconComponent: ExpandMoreIcon,
        displayEmpty: true,
      }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </InputField>
  );
};

export default SelectField;
