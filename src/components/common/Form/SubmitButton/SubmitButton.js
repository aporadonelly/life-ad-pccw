import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";

const SubmitButton = (props) => {
  const { handleSubmit } = useFormikContext();

  return <Button type="submit" onClick={handleSubmit} {...props} />;
};

export default SubmitButton;
