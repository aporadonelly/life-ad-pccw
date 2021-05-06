import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Paper, Typography, Button, Grid, Chip } from "@material-ui/core";
import EmployeeStyles from "./styles/EmployeeStyles";
import EmployeesListStyles from "./styles/EmployeesListStyle";
import EmployeesTable from "./EmployeesTable";
import * as intl from "../../common/labels";

const EmployeesList = ({ employees: { employees, enquiry }, ...props }) => {
  let valueLabel;
  const classes = {
    ...EmployeeStyles(),
    ...EmployeesListStyles(),
  };

  const history = useHistory();
  const [chipData, setChipData] = useState({});
  console.log("enquire", chipData);

  useEffect(() => {
    setChipData(enquiry);
  }, []);

  const handleDelete = chipToDelete => () => {
    console.log("toDelete", chipToDelete);
    const asArray = Object.entries(chipData);
    const chips = asArray.filter(([key, value]) => key !== chipToDelete);
    // setChipData(chips);
    // props.dispatch({ type: 'CLEAR_FIELD_SEARCH_FORM', payload: chipToDelete });
  };

  const getChipDropDownValue = value => {
    switch (
      value // initial value
    ) {
      case "GT_M":
        valueLabel = "Male";
        break;
      case "GT_F":
        valueLabel = "Female";
        break;
      case "GT_B":
        valueLabel = "Both";
        break;
      case "ID_HK":
        valueLabel = "HKID";
        break;
      case "ID_PP":
        valueLabel = "Passport";
        break;
      case "Phil":
        valueLabel = "Philippines";
        break;
      case "MB_SVC":
        valueLabel = "SVC";
        break;
      case "EP_NW":
        valueLabel = "New Employee";
        break;
      case "EP_EXT":
        valueLabel = "Existing Employee";
        break;
      case "EP_IGT":
        valueLabel = "Intra-Group Transfer";
        break;
      case "EP_EXP":
        valueLabel = "Exempt Person";
        break;
      case "EP_EPT":
        valueLabel = "Expatriate Employee";
        break;
      case "NT_CT":
        valueLabel = "Catering";
        break;
      case "NT_BC":
        valueLabel = "Building Construction";
        break;
      case "NT_M":
        valueLabel = "Manufacturing / Factories / Engineering";
        break;
      case "NT_FN":
        valueLabel = "Finance / Insurance / Business Services";
        break;
      case "NT_RE":
        valueLabel = "Real Estate / Property Management / Cleaning";
        break;
      case "NT_ET":
        valueLabel = "Entertainment / Retail / Personal Services / Media";
        break;
      case "NT_IT":
        valueLabel = "Information Technology";
        break;
      case "NT_WH":
        valueLabel = "Wholesale / Import - Export Trades";
        break;
      case "NT_SO":
        valueLabel =
          "Social Services / Education / Charities / Government Agencies";
        break;
      case "NT_TR":
        valueLabel = "Transportation - Logistics Services";
        break;
      case "NT_OT":
        valueLabel = "Others";
        break;
      case "MB_RE":
        valueLabel = "Regular Employee";
        break;
      case "MB_CE":
        valueLabel = "Casual Employee";
        break;
      case "MB_SEP":
        valueLabel = "Self-Employed Person (SEP)";
        break;
      case "NT_PA":
        valueLabel = "Personal account holder (PAH)";
        break;
      case "NT_SVC":
        valueLabel = "SVC";
        break;
      case "MB_PA":
        valueLabel = "Personal Account Holder (PHA)";
        break;
      case "MB_TVC":
        valueLabel = "TVC";
        break;
      case "SC_IS":
        valueLabel = "Industry Scheme";
        break;
      case "SC_MT":
        valueLabel = "Master Trust Scheme";
        break;
      case "SC_ESS":
        valueLabel = "Employer Sponsor Scheme";
        break;
      case "NT_TVC":
        valueLabel = "TVC";
        break;
      case "ST_NW":
        valueLabel = "New";
        break;
      case "ST_SB":
        valueLabel = "Submitted";
        break;
      case "ST_AP":
        valueLabel = "Approved";
        break;
      case "ST_IP":
        valueLabel = "In Progress";
        break;
      case "ST_ST":
        valueLabel = "Settled";
        break;
      case "ST_CP":
        valueLabel = "Completed";
        break;
      case "ST_RJ":
        valueLabel = "Rejected";
        break;
      case "ST_RJT":
        valueLabel = "Rejected (By Trustee)";
        break;
      case "ST_AT":
        valueLabel = "Active";
        break;
      case "ST_CN":
        valueLabel = "Cancel";
        break;
      case "ST_SV":
        valueLabel = "Saved";
        break;
      case "ST_TG":
        valueLabel = "Terminating";
        break;
      case "ST_TD":
        valueLabel = "Terminated";
        break;
      case "ST_EE":
        valueLabel = "For EE to confirm";
        break;
      case "ST_EEC":
        valueLabel = "EE Confirm";
        break;
      case "ST_EENC":
        valueLabel = "EE Not Confirm";
        break;
      case "ST_PD_RW":
        valueLabel = "Pending for internal review";
        break;
      case "ST_RC":
        valueLabel = "Received";
        break;
      default:
        valueLabel = value; // initValue
        break;
    }
  };

  const renderObject = () => {
    return Object.entries(chipData).map(([key, value], i) => {
      console.log(value);
      let initKey =
        key === "id_type" ||
        key === "mpf_id" ||
        key === "first_name" ||
        key === "chinese_name" ||
        key === "id_number" ||
        key === "date_of_birth" ||
        key === "place_of_birth" ||
        key === "mobile_number" ||
        key === "date_of_employment" ||
        key === "employee_type" ||
        key === "reported_industry_type" ||
        key === "mpf_scheme_name" ||
        key === "tax_residency"
          ? key.replace(/_/g, " ")
          : key;

      // let initValue = value === 'ID_HK' ? value.replace(/_/g, ' ') : value;
      let finalKey = initKey === "tin" ? initKey.toUpperCase() : initKey;
      // let label = `${finalKey} :  ${initValue}`;
      getChipDropDownValue(value);
      let label = `${finalKey} : ${valueLabel}`;

      if (value)
        // initValue
        return (
          <Chip
            // style={{ textTransform: 'capitalize', margin: '2px' }}
            className={key !== "email" && classes.chips}
            key={key}
            label={label}
            onDelete={handleDelete(key)}
            color="primary"
          />
        );
    });
  };

  const handleEditSearch = () => {
    history.push("/employee-search");
  };

  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12} lg={12} sm={12}>
            <Grid className={classes.pageTitle} item xs={12} lg={12} sm={12}>
              <Typography variant="h6" component="div">
                {intl.labels.memberEnquiry}
              </Typography>
            </Grid>
            <Grid className={classes.root} item xs={12} lg={12} sm={12}>
              <Grid className={classes.root} item xs={12} lg={8} sm={12}>
                {chipData && renderObject()}
              </Grid>
              <Grid
                style={{
                  justifyContent: "flex-end",
                  display: "flex",
                }}
                item
                xs={12}
                lg={4}
                sm={12}
              >
                <Button
                  className={classes.formBtn}
                  style={{ width: "auto", top: "-8px" }}
                  variant="contained"
                  onClick={handleEditSearch}
                >
                  {intl.labels.editSearch}
                </Button>
                <Button
                  className={classes.formBtn}
                  variant="contained"
                  style={{
                    width: "auto",
                    top: "-8px",
                    background: "#EF841F",
                    color: "#fff",
                  }}
                  onClick={() => {
                    history.push("/employee-search");
                    props.dispatch({ type: "CLEAR_SEARCH_FORM" });
                  }}
                >
                  {intl.labels.newSearch}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.pageContentTable} style={{ top: "-25px" }}>
        <Grid className={classes.root} item xs={12} lg={12} sm={12}>
          <Grid className={classes.pageTitle} item xs={12} lg={12} sm={12}>
            {employees.length > 0 ? (
              <EmployeesTable employees={employees} />
            ) : (
              <p>NO DATA FOUND</p>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, null)(EmployeesList);
