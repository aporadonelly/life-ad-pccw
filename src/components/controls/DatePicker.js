import React from 'react';
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
  const { name, value, onChange, defaultValue } = props;

  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        placeholder="Please Input"
        defaultValue={defaultValue}
        error={false}
        variant="inline"
        format="yyyy/MM/dd"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultPara(name, date))}
        helperText="YYYYMMDD"
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}
