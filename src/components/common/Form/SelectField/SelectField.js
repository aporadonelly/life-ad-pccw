import PropTypes from "prop-types";
import { defaultsDeep } from "lodash";
import { withField } from "@hocs";
import { useStyles } from "./styles";
import {
  TextField,
  Box,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  Cancel as CancelIcon,
} from "@material-ui/icons";

const SelectField = (props) => {
  const { helpers, initialValue, data, placeholder, ...rest } = defaultsDeep(
    props,
    SelectField.defaultProps
  );
  const classes = useStyles();

  const handleClear = () => {
    helpers.setValue(initialValue);
  };

  return (
    <TextField
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
        renderValue: (value) => {
          const option = data.options.find(
            (option) => data.value(option) === value
          );

          if (option) return data.label(option);
          return (
            <Box color="grey.400" fontStyle="italic">
              {placeholder}
            </Box>
          );
        },
        displayEmpty: true,
      }}
      InputProps={{
        endAdornment: rest.value && (
          <InputAdornment className={classes.adornment}>
            <IconButton size="small" onClick={handleClear}>
              <CancelIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    >
      {data.options.map((option) => (
        <MenuItem key={data.value(option)} value={data.value(option)}>
          {data.label(option)}
        </MenuItem>
      ))}
    </TextField>
  );
};

SelectField.defaultProps = {
  placeholder: "Please Select",
  data: {
    options: [],
    value: (option) => option.value ?? "",
    label: (option) => option.label ?? "",
  },
};

SelectField.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.array,
    value: PropTypes.func,
    label: PropTypes.func,
  }),
};

export default withField(SelectField);
