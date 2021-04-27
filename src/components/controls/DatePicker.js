import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
  const { name, value, onChange, label, format } = props;

  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={value}
        onChange={date => onChange(convertToDefaultPara(name, date))}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        // disableToolbar
        // variant="inline"
        // format={format}
        // label={label}
        // name={name}
        // value={value}
        // onChange={date => onChange(convertToDefaultPara(name, date))}
        // helperText="YYYY/MM/DD"
        // KeyboardButtonProps={{
        //   'aria-label': 'change date',
        // }}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}
