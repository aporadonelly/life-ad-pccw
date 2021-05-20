import PropTypes from "prop-types";
import { defaultsDeep } from "lodash";
import { withField } from "@hocs";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const RadioGroupField = (props) => {
  const { helpers, helperText, error, label, data, ...rest } = defaultsDeep(
    props,
    RadioGroupField.defaultProps
  );

  return (
    <FormControl {...rest}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...rest}>
        {/* {data.options.map((option) => ( */}
        {data.map((option) => (
          <FormControlLabel
            key={data.value(option)}
            control={<Radio value={data.value(option).toString()} />}
            label={data.label(option)}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

RadioGroupField.defaultProps = {
  data: {
    options: [],
    value: (option) => option.value ?? "",
    label: (option) => option.label ?? "",
  },
};

RadioGroupField.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.array,
    value: PropTypes.func,
    label: PropTypes.func,
  }),
};

export default withField(RadioGroupField);
