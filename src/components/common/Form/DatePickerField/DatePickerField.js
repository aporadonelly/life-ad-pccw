import { useState, useEffect } from "react";
import { withField } from "@hocs";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePickerField = (props) => {
  const { helpers, helperText, format, KeyboardButtonProps, ...rest } = props;
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    if (date) {
      setSelectedDate(date);
      try {
        const fdate = moment(date).format(format);
        helpers.setValue(fdate);
      } catch {
        helpers.setValue(date);
      }
    } else {
      helpers.setValue(date);
    }
  };

  useEffect(() => {
    if (rest.value) {
      const date = new Date(rest.value);
      setSelectedDate(date);
    } else {
      setSelectedDate(null);
    }
  }, [rest.value]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...rest}
        format={format}
        value={selectedDate}
        onChange={handleChange}
        invalidDateMessage={helperText}
        helperText={helperText}
        KeyboardButtonProps={{
          ...KeyboardButtonProps,
          edge: "end",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePickerField.defaultProps = {
  format: "dd/MM/yyyy",
  placeholder: "Please Input",
};

export default withField(DatePickerField);
