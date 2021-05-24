// import { useState, useEffect } from "react";
// import { withField } from "@hocs";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// import { useTranslation } from "react-i18next";

// const DatePickerField = ({ helpers, helperText, ...props }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const { t } = useTranslation(["form"]);

//   const handleChange = (date) => {
//     if (date) {
//       setSelectedDate(date);
//       try {
//         const ISODateString = date.toISOString();
//         helpers.setValue(ISODateString);
//       } catch (error) {
//         helpers.setValue(date);
//       }
//     } else {
//       helpers.setValue(date);
//     }
//   };

//   useEffect(() => {
//     if (props.value) {
//       const date = new Date(props.value);
//       setSelectedDate(date);
//     }
//   }, [props.value]);

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker
//         {...props}
//         value={selectedDate}
//         onChange={handleChange}
//         invalidDateMessage={helperText}
//         helperText={helperText}
//         placeholder={t("form:placeholder.custom.pleaseInput")}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };

// DatePickerField.defaultProps = {
//   size: "small",
//   format: "yyyy/MM/dd",
// };

// export default withField(DatePickerField);
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
        const fdate = moment(date).format("YYYY/MM/DD");
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
