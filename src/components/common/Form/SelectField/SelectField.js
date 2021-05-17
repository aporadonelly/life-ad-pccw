import PropTypes from "prop-types";
import { defaultsDeep } from "lodash";
import { useStyles } from "./styles";
import { Box, MenuItem } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import InputField from "../InputField";

const SelectField = (props) => {
  const { helpers, data, placeholder, ...rest } = defaultsDeep(
    props,
    SelectField.defaultProps
  );
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
      {...rest}
    >
      {data.options.map((option) => (
        <MenuItem key={data.value(option)} value={data.value(option)}>
          {data.label(option)}
        </MenuItem>
      ))}
    </InputField>
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

export default SelectField;
