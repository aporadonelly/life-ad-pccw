import React from "react";
import { MenuItem, Select as MuiSelect } from "@material-ui/core";

export default function Select(props) {
  const { name, value, onChange, options } = props;

  return (
    <MuiSelect
      displayEmpty
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      selectable
      deletable
      style={{
        color: value === "" ? "#9D9D9D" : "#EF841F",
        fontSize: "14px",
        marginTop: "2.5px",
      }}
    >
      <MenuItem value="" disabled>
        <em>Please Select</em>
      </MenuItem>
      {options.map((item) => (
        <MenuItem key={item.cstmTypId} value={item.cstmTypId}>
          {item.cstmTypDtlTxt}
        </MenuItem>
      ))}
    </MuiSelect>
  );
}
