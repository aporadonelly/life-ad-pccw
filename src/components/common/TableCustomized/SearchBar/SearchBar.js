import PropTypes from "prop-types";
import { useState } from "react";
import { useDebounce } from "react-use";
import { InputBase } from "@material-ui/core";

const SearchBar = (props) => {
  const { placeholder, onChange } = props;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useDebounce(
    () => {
      onChange(value);
    },
    700,
    [value]
  );

  return (
    <InputBase
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

SearchBar.defaultProps = {
  placeholder: "Search",
  onChange: () => {},
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
