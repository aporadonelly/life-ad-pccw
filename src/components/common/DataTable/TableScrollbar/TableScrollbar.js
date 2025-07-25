import PerfectScrollbar from "react-perfect-scrollbar";
import { useStyles } from "./styles";

const TableScrollbar = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <PerfectScrollbar
      className={classes.scrollbar}
      options={{ maxScrollbarLength: 75 }}
    >
      {children}
    </PerfectScrollbar>
  );
};

export default TableScrollbar;
