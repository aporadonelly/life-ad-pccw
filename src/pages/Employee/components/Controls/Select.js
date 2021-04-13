import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';
import EmployeeStyles from '../EmployeeSearch/Styles/EmployeeStyles';

export default function Select(props) {
  const classes = { ...EmployeeStyles() };
  const { name, value, onChange, items, label } = props;
  return (
    <MuiSelect fullWidth name={name} value={value} onChange={onChange}>
      {items.map((item, i) => (
        <MenuItem value={item.value}>{item.label}</MenuItem>
      ))}
    </MuiSelect>
  );
}
