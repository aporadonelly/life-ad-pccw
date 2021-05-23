import { useFormikContext } from "formik";
import FormikErrorFocus from "formik-error-focus";
import InputField from "./InputField";
import SelectField from "./SelectField";
import DatePickerField from "./DatePickerField";
import SubmitButton from "./SubmitButton";
import RadioGroup from "./RadioGroup";
import SelectOption from "./SelectOption/SelectOption";
import FloatingButton from "./FloatingButton";
import SelectField2 from "./SelectField2";
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

Form.Input = InputField;
Form.Select = SelectField;
Form.DatePicker = DatePickerField;
Form.Submit = SubmitButton;
Form.RadioGroup = RadioGroup;
//Form.SelectOption = SelectOption;
Form.FloatingButton = FloatingButton;
//Form.Select2 = SelectField2;
Form.Reset = ResetButton;

export default Form;
