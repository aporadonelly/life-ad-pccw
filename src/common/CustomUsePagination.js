import { useState } from "react";
import { usePagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Box, ButtonBase, Icon, Typography } from "@material-ui/core";
import { LeftTriangleIcon, RightTriangleIcon } from "../assets/icons";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  box: {
    ...theme.typography.body2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.grey["400"],
    textAlign: "center",
    minWidth: 40,
    borderRadius: "4px",
    marginRight: "9px",
  },
  boxArrow: {
    ...theme.typography.body2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.grey["400"],
    backgroundColor: "#BCBCBC",
    textAlign: "center",
    minWidth: 40,
    height: 22,
    borderRadius: "4px",
    marginRight: "9px",
  },
}));

const CustomUsePagination = ({ employees: { employees } }) => {
  console.log("count", employees);
  const pageSize = 10;
  const totalItems = employees.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { items } = usePagination({
    employees: totalPages,
    siblingCount: 0,
    boundaryCount: 0,
    defaultPage: 0,
    onChange: (_event, page) => {
      setPage(page);
    },
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="flex-end"
      maxWidth="100%"
    >
      <ButtonBase {...items.shift()} className={classes.boxArrow}>
        <Icon style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={LeftTriangleIcon}
            style={{ width: "16PX" }}
            alt="caret left icon"
          />
        </Icon>
      </ButtonBase>
      <Box className={classes.box}>{page}</Box>
      <ButtonBase {...items.pop()} className={classes.boxArrow}>
        <Icon style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={RightTriangleIcon}
            style={{ width: "16PX" }}
            alt="caret left icon"
          />
        </Icon>
      </ButtonBase>
      <Box>
        <Typography>{`${page} of ${totalItems}`}</Typography>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, {})(CustomUsePagination);
