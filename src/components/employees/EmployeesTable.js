import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { get } from "lodash";
import Tooltip from '@material-ui/core/Tooltip';

import {
  Box,
  makeStyles,
  TableRow,
  Grid,
  TableBody,
  TableCell,
  Typography,
} from "@material-ui/core";
import useTable from "../useTable";
import { viewMember, saveQuery } from "../../actions/employeesActions";
import EmployeeItem from "./EmployeeItem";
import reactStringReplace from "@utils/reactStringReplace";
import AnimatedSearchBar from "@components/AnimatedSearchBar";
import viewEnrollActive from "../../assets/icons/enroll-active.PNG";
import viewEnrollInActive from "../../assets/icons/enroll-inactive.PNG";
import EmployeeStyles from "./styles/EmployeeStyles";
import viewReg from "../../assets/icons/view_reg.PNG";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fdfdff",
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
  },
  pageTitle: {
    paddingLeft: theme.spacing(1),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
      fontSize: "26px",
    },
    color: "#009CCD",
    fontSize: "26px",
    fontFamily: "Roboto",
  },
}));

const EmployeesTable = ({ employees: { employees, employee }, viewMember }) => {

  const history = useHistory();
  const classes = { ...useStyles(), ...EmployeeStyles() };
  const { t } = useTranslation(["typography", "table"]);

  const [viewMemberState, setViewMemberState] = useState(false);
  const [tableView, setTableView] = useState(true);

  const [filterFn, setfilterFn] = useState({
    fn: items => {
      return items;
    },
  });
  const [search, setSearch] = useState();

  const headCells = [
    { id: "pnsnIdTxt", label: t("table:thead.mpfId") },
    { id: "fullname", label: t("table:thead.displayName") },
    { id: "idTypeId", label: t("table:thead.idType") },
    { id: "idNoTxt", label: t("table:thead.idNumber") },
    { id: "phoneNumber", label: t("table:thead.mobileNumber") },
    { id: "emailAddrTxt", label: t("table:thead.email") },
    { id: "statusTypId", label: t("table:thead.status") },
    {
      id: "action",
      label: t("table:thead.custom.action"),
      disableSorting: true,
    },
  ];

  const {
    TblContainer,
    TblHead,
    TblPagination,
    employeesAfterPagingAndSorting,
  } = useTable(employees, headCells, filterFn);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleClear = e => {
    setSearch("");
  };

  const employeeView = id => {
    viewMember(id);
    setViewMemberState(true);
    setTableView(false);
    saveQuery();
    history.push("/employee-view");
  };

  const highligtedText = (source, match) =>
    reactStringReplace(source, match, (match, i) => (
      <Box display="inline" bgcolor="common.highlighted">
        {match}
      </Box>
    ));

  return (
    <>
      <Grid container alignItems="center" style={{ marginBottom: "-10px" }}>
        <Grid className={classes.pageTitle} item lg={2} sm={3} xs={12}>
          <Typography variant="h6" component="div">
            {t("typography:heading.searchResult")}
          </Typography>
        </Grid>
        <Grid className={classes.pageTitle} item lg={8} sm={6} xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <AnimatedSearchBar
              placeholder="Quick Search"
              value={search}
              onChange={handleSearch}
              onClear={handleClear}
            />
          </Box>
        </Grid>
        <Grid className={classes.pageTitle} item lg={2} sm={3} xs={12}>
          <TblPagination />
        </Grid>
      </Grid>
      <TblContainer>
        <TblHead />
        <TableBody>
          {employeesAfterPagingAndSorting().map(emp => (
            <TableRow key={emp.pnsnIdTxt}>
              <TableCell style={{ color: "#2D9FC3"}}>
                {highligtedText(emp.pnsnIdTxt, search)}
              </TableCell>
              <TableCell>{highligtedText(emp.fullname, search)}</TableCell>
              <TableCell>
                {highligtedText(emp.idTypeId,
                  search
                )}
              </TableCell>
              <TableCell>{highligtedText(emp.idNoTxt, search)}</TableCell>
              <TableCell>
                {highligtedText(
                  get(
                    emp.clntPhones.filter(v => v.phnTypId === "TP_MB"),
                    "[0].phoneNumber"
                  ),
                  search
                )}
              </TableCell>
              <TableCell>
                {highligtedText(get(emp.cntcts, "[0].emailAddrTxt"), search)}
              </TableCell>
              <TableCell
                style={{
                  textTransform: "capitalize",
                }}
              >
                {highligtedText(emp.statusTypId,
                  search
                )}
              </TableCell>
              <TableCell style={{ padding: "0 1px"}}>
              <Tooltip title="View Registration">
                <img
                  src={viewReg}
                  alt="View Registration"
                  onClick={() => employeeView(emp.pnsnIdTxt)}
                  variant="contained"
                  style={{
                    margin: "0 5px",
                    background: "#EF841F",
                    color: "#fff",
                    cursor: 'pointer',
                  }}
                /></Tooltip>
                <Tooltip title="View Enrollment">
                <img
                  src={
                    emp.vwEnrFlg
                      ? viewEnrollActive
                      : viewEnrollInActive
                  }
                  alt="View Enrollment"
                  variant="contained"
                  style={{
                    margin: "0 5px",                    
                    background: "#EF841F",
                    color: "#fff",
                    
                  }}
                /></Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
      {viewMemberState && <EmployeeItem employee={employee} />}
    </>
  );
};

EmployeesTable.propTypes = {
  employees: PropTypes.object.isRequired,
  viewMember: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { viewMember, saveQuery })(
  EmployeesTable
);
