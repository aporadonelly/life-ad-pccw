import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, type, id, placeholder, value, onChange } = props;
  return (
    <TextField
      fullWidth
      onChange={onChange}
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
    />
  );
}
