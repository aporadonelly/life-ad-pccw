import PropTypes from "prop-types";
import { useState } from "react";
import { useDebounce } from "react-use";
import { useDataTableState } from "@contexts/DataTableProvider";
import { InputBase, InputAdornment } from "@material-ui/core";
import { Search as SearchIcon, Close as CloseIcon } from "@material-ui/icons";
import { useStyles } from "./styles";

const TableQuickSearch = () => {
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

export default TableQuickSearch;
