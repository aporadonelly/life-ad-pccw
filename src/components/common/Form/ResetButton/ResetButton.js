import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";

const ResetButton = (props) => {
  const { handleReset } = useFormikContext();

  return <Button type="reset" onClick={handleReset} {...props} />;
};

export default ResetButton;
