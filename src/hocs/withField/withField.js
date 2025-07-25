import PropTypes from "prop-types";
import { useField } from "formik";

const withField = (WrappedComponent) => {
  const Field = (props) => {
    const [field, meta, helpers] = useField(props);
    const { touched, error } = meta;

    return (
      <WrappedComponent
        error={touched && error && true}
        helperText={touched && error}
        helpers={helpers}
        {...field}
        {...props}
      />
    );
  };

  Field.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return Field;
};

export default withField;
