import React from 'react';
import { MenuItem, Select as MuiSelect } from '@material-ui/core';

export default function Select(props) {
  const { name, value, onChange, options } = props;
  return (
    <MuiSelect
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      style={{ color: '#EF841F', fontSize: '14px' }}
    >
      <MenuItem value="" disabled>
        Please Input
      </MenuItem>
      {options.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
}
