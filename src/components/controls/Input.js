import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const {
    name,
    type,
    id,
    placeholder,
    value,
    onChange,
    error = null,
    label,
  } = props;
  return (
    <TextField
      label={label}
      fullWidth
      onChange={onChange}
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      {...(error && { error: true, helperText: error })}
    />
  );
}
