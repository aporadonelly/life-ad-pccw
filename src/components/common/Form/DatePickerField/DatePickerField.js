import { useState, useEffect } from "react";
import { withField } from "@hocs";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePickerField = ({ helpers, helperText, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        helpers.setValue(ISODateString);
      } catch (error) {
        helpers.setValue(date);
      }
    } else {
      helpers.setValue(date);
    }
  };

  useEffect(() => {
    if (props.value) {
      const date = new Date(props.value);
      setSelectedDate(date);
    }
  }, [props.value]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...props}
        value={selectedDate}
        onChange={handleChange}
        invalidDateMessage={helperText}
        helperText={helperText}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePickerField.defaultProps = {
  size: "small",
  format: "yyyy/MM/dd",
};

export default withField(DatePickerField);
