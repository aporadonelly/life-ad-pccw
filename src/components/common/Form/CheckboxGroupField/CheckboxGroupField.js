import PropTypes from "prop-types";
import { defaultsDeep, isArray, xor } from "lodash";
import { withField } from "@hocs";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

const CheckboxGroupField = (props) => {
  const {
    FormGroupProps,
    helpers,
    helperText,
    error,
    label,
    data,
    delimiter,
    ...rest
  } = defaultsDeep(props, CheckboxGroupField.defaultProps);

  const isChecked = (option) =>
    (isArray(props.value) ? props.value : props.value.split(delimiter)).some(
      (v) => v === data.value(option).toString()
    );

  const handleChange = (e) => {
    if (isArray(props.value)) {
      const newValue = xor(props.value, [e.target.value]);
      helpers.setValue(newValue);
    } else {
      const toArray = props.value.split(delimiter);
      const newValue = xor(toArray, [e.target.value]);
      helpers.setValue(newValue.join(delimiter));
    }
  };

  return (
    <FormControl error={error}>
      <FormLabel>{label}</FormLabel>
      <FormGroup {...FormGroupProps}>
        {data.options.map((option) => (
          <FormControlLabel
            key={data.value(option)}
            control={
              <Checkbox
                {...rest}
                checked={isChecked(option)}
                value={data.value(option).toString()}
                onChange={handleChange}
              />
            }
            label={data.label(option)}
          />
        ))}
      </FormGroup>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

CheckboxGroupField.defaultProps = {
  data: {
    options: [],
    value: (option) => option.value ?? "",
    label: (option) => option.label ?? "",
  },
  delimiter: ";",
};

CheckboxGroupField.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.array,
    value: PropTypes.func,
    label: PropTypes.func,
  }),
  delimiter: PropTypes.string,
};

export default withField(CheckboxGroupField);
