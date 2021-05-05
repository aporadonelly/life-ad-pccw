import { useField } from "formik";

const withField = (options) => (WrappedComponent) => (props) => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;

  return (
    <WrappedComponent
      error={touched && error && true}
      helperText={touched && error}
      {...field}
      {...props}
    />
  );
};

export default withField;
