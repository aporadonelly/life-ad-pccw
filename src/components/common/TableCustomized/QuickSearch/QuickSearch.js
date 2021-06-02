import PropTypes from "prop-types";
import { useState } from "react";
import { useDebounce } from "react-use";
import { useStyles } from "./styles";
import { InputBase, InputAdornment } from "@material-ui/core";
import { Search as SearchIcon, Close as CloseIcon } from "@material-ui/icons";

const QuickSearch = (props) => {
  const { onChange } = props;
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onClear = (e) => {
    setValue("");
  };

  useDebounce(
    () => {
      onChange(value);
    },
    500,
    [value]
  );

  return (
    <div className={classes.root}>
      <InputBase
        classes={{
          root: classes.inputBase,
        }}
        value={value}
        placeholder="Quick Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" color="inherit" />
          </InputAdornment>
        }
        onChange={handleChange}
      />
      <div className={classes.closeIcon}>
        <CloseIcon fontSize="small" onClick={onClear} />
      </div>
    </div>
  );
};

QuickSearch.defaultProps = {
  onChange: () => {},
};

QuickSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default QuickSearch;
