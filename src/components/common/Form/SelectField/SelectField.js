import PropTypes from "prop-types";
import { defaultsDeep } from "lodash";
import { withField } from "@hocs";
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
import { useStyles } from "./styles";

const SelectField = (props) => {
  const { helpers, data, placeholder, clearButton, ...rest } = defaultsDeep(
    props,
    SelectField.defaultProps
  );
  const classes = useStyles();

  const handleClear = () => {
    helpers.setValue("");
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
        endAdornment: rest.value && clearButton && (
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
  clearButton: false,
  placeholder: "Please Select",
  data: {
    options: [],
    value: (option) => option.value ?? "",
    label: (option) => option.label ?? "",
  },
};

SelectField.propTypes = {
  clearButton: PropTypes.bool,
  data: PropTypes.shape({
    options: PropTypes.array,
    value: PropTypes.func,
    label: PropTypes.func,
  }),
};

export default withField(SelectField);
