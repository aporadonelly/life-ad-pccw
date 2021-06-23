import PropTypes from "prop-types";
import { useState } from "react";
import { useDebounce } from "react-use";
import { useDataTableState } from "@contexts/DataTableProvider";
import { useStyles } from "./styles";
import { InputBase, InputAdornment } from "@material-ui/core";
import { Search as SearchIcon, Close as CloseIcon } from "@material-ui/icons";

const TableQuickSearch = (props) => {
  const { globalFilter, setGlobalFilter } = useDataTableState();
  const [value, setValue] = useState(globalFilter ?? "");
  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  useDebounce(
    () => {
      setGlobalFilter(value);
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
        <CloseIcon fontSize="small" onClick={handleClear} />
      </div>
    </div>
  );
};

TableQuickSearch.defaultProps = {
  globalFilter: "",
};

// TableQuickSearch.defaultProps = {
//   onChange: () => {},
// };

// TableQuickSearch.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

export default TableQuickSearch;
