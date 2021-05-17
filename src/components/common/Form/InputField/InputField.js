import { withField } from "@hocs";
import { TextField } from "@material-ui/core";

const InputField = ({ helpers, ...props }) => {
  return <TextField {...props} />;
};

InputField.defaultProps = {
  placeholder: "Please Input",
};

export default withField(InputField);
