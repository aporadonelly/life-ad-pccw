import { useFormikContext } from "formik";
import FormikErrorFocus from "formik-error-focus";
import CheckboxGroupField from "./CheckboxGroupField";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DatePickerField from "./DatePickerField";
import SubmitButton from "./SubmitButton";
import RadioGroupField from "./RadioGroupField";
import SelectOption from "./SelectOption/SelectOption";
import Dropzone from "./Dropzone";
import FloatingButton from "./FloatingButton";
import ResetButton from "./ResetButton";

const Form = ({ children, ...props }) => {
  const { handleSubmit, handleReset } = useFormikContext();

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      autoComplete="off"
      {...props}
    >
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

Form.CheckboxGroupField = CheckboxGroupField;
Form.Input = InputField;
Form.Select = SelectField;
Form.DatePicker = DatePickerField;
Form.Dropzone = Dropzone;
Form.Submit = SubmitButton;
Form.RadioGroupField = RadioGroupField;
Form.SelectOption = SelectOption;
Form.FloatingButton = FloatingButton;
Form.Reset = ResetButton;

export default Form;
