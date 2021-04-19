import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
  const { name, value, onChange } = props;

  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy/MM/dd"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultPara(name, date))}
        helperText="YYYY/MM/DD"
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}
