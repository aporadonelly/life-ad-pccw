import { useFormikContext } from "formik";
import FormikErrorFocus from "formik-error-focus";
import CheckboxGroupField from "./CheckboxGroupField";
import DatePickerField from "./DatePickerField";
import InputField from "./InputField";
import RadioGroupField from "./RadioGroupField";
import SelectField from "./SelectField";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

const Form = (props) => {
  const { children, ...rest } = props;
  const { handleSubmit, handleReset } = useFormikContext();

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} {...rest}>
      {children}
      <FormikErrorFocus
        offset={0}
        align="middle"
        focusDelay={200}
        ease="linear"
        duration={200}
      />
    </form>
  );
};

Form.CheckboxGroup = CheckboxGroupField;
Form.DatePicker = DatePickerField;
Form.Input = InputField;
Form.RadioGroup = RadioGroupField;
Form.Select = SelectField;
Form.Submit = SubmitButton;
Form.Reset = ResetButton;

export default Form;
