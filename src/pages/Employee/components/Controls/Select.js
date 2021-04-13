import React from 'react';
import { FormControl, MenuItem } from '@material-ui/core';

export default function Select(props) {
  const { name, value, type, placeholder, onChange, items } = props;
  // console.log(name, 'name');
  return (
    <FormControl>
      <Select
        fullWidth
        name={name}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      >
        {/* {items.map((item, index) => (
          <MenuItem value="item.id" label={item.title}>
            {item.title}
          </MenuItem>
        ))} */}
      </Select>
    </FormControl>
  );
}
