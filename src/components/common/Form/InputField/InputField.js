import { withField } from "@hocs";
import { TextField } from "@material-ui/core";

const InputField = (props) => (
  <TextField
    margin="none"
    fullWidth
    variant="outlined"
    size="small"
    {...props}
  />
);

export default withField()(InputField);
