/* eslint-disable default-case */
import { useEffect } from "react";
import TableCustomized from "@components/common/TableCustomized";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  Tooltip,
  Chip,
} from "@material-ui/core";
import { PageInner } from "@components/layout";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import viewEnrollActive from "../../../assets/icons/enroll-active.PNG";
import viewEnrollInActive from "../../../assets/icons/enroll-inactive.PNG";
import viewRegistration from "../../../assets/icons/view_reg.PNG";

const Members = ({ employees, isLoading, getSpecificMember, enquiry }) => {
  const history = useHistory();
  const { t } = useTranslation(["typography", "form", "button", "table"]);
  let valueLabel;

  const columns = [
    { label: t("table:thead.mpfId"), name: "pnsnIdTxt" },
    { label: t("table:thead.displayName"), name: "fullname" },
    { label: t("table:thead.idType"), name: "idTypeId" },
    { label: t("table:thead.idNumber"), name: "idNoTxt" },
    { label: t("table:thead.mobileNumber"), name: "clntPhones[0].phoneNumber" },
    { label: t("table:thead.email"), name: "cntcts[0].emailAddrTxt" },
    { label: t("table:thead.status"), name: "statusTypId" },
  ];

  useEffect(() => {}, [employees, enquiry]);

  const handleDelete = (chipToDelete) => () => {
    Object.entries(enquiry).filter(([key, value]) => key !== chipToDelete);
  };
  const getChipDropDownValue = (value) => {
    switch (value) {
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
    return Object.entries(enquiry).map(([key, value], i) => {
      console.log(key, value);
      // eslint-disable-next-line default-case
      switch (key) {
        case "idType":
          // eslint-disable-next-line no-unused-vars
          key = "ID Type";
          break;
        case "gender":
          // eslint-disable-next-line no-unused-vars
          key = "Gender";
          break;
        case "mpfID":
          key = "MPF ID";
          break;
        case "fullName":
          key = "Full Name";
          break;
        case "chineseName":
          key = "Chinese Name";
          break;
        case "idNumber":
          key = "ID Number";
          break;
        case "dateOfBirth":
          key = "Date of Birth";
          break;
        case "nationality":
          key = "Nationality";
          break;
        case "placeOfBirth":
          key = "Place of Birth";
          break;
        case "mobileNumber":
          key = "Mobile Number";
          break;
        case "address":
          key = "Address";
          break;
        case "email":
          key = "Email Address";
          break;
        case "dateOfEmployment":
          key = "Date of Employment";
          break;
        case "employeeType":
          key = "Employmee Type";
          break;
        case "reportedIndustryType":
          key = "Reported Industry Type";
          break;
        case "occupation":
          key = "Occupation";
          break;
        case "schemeUuid":
          key = "Scheme Type";
          break;
        case "taxResidency":
          key = "Tax Residency";
          break;
        case "tin":
          key = "TIN";
          break;
        case "status":
          key = "Status";
          break;
      }

      getChipDropDownValue(value);
      let label = `${key}: ${valueLabel}`;

      const randomColor = [
        "#6E55E2",
        "#EA5F63",
        "#EF841F",
        "#2D9FC3",
        "#707070",
        "#42526E",
        "#3E84B5",
        "#009CCD",
        "#6E6E6E",
        "#FF0000",
        "#0D6A88",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#02A0CF",
        "#EB6063",
        "#009CCD",
        "#6E55E2",
        "#0D6A88",
      ];

      if (valueLabel)
        return (
          <Chip
            style={{
              backgroundColor: randomColor[i],
              color: "white",
              margin: "1px",
            }}
            onDelete={handleDelete(key)}
            label={label}
            key={key}
            // className={classes.chips}
          />
        );
    });
  };

  const viewMembersDetails = (id) => {
    getSpecificMember(id);
  };

  const handleEditSearch = () => {
    history.push("/members/enquiry");
  };

  return (
    <PageInner>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress alignItems="center" />
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid item xs={12}>
                  <Typography variant="h6" color="primary">
                    {t("typography:heading.memberEnquiry")}
                  </Typography>
                </Grid>
                <Grid
                  container
                  component="dl"
                  xs={12}
                  style={{ marginTop: "5px" }}
                >
                  <Grid xs={8}>{renderObject()}</Grid>
                  <Grid
                    container
                    component="dl"
                    spacing={1}
                    display="flex"
                    justify="flex-end"
                    xs={4}
                  >
                    <Button
                      data-testid="back-btn"
                      variant="outlined"
                      onClick={handleEditSearch}
                    >
                      {t("button:editSearch")}
                    </Button>
                    &emsp;
                    <Button
                      data-testid="back-btn"
                      onClick={() => history.push("/members/enquiry")}
                    >
                      {t("button:newSearch")}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid
                  container
                  component="dl"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <TableCustomized
                      title={t("typography:heading.searchResult")}
                      rows={employees}
                      columns={columns}
                      stickyLabel={t("table:thead.custom.action")}
                      renderStickyCell={(row) => {
                        return (
                          <>
                            <Tooltip title="View Registration">
                              <img
                                src={viewRegistration}
                                alt="View Registration"
                                onClick={() =>
                                  viewMembersDetails(row.pnsnIdTxt)
                                }
                                variant="contained"
                                style={{
                                  margin: "0 5px",
                                  background: "#EF841F",
                                  color: "#fff",
                                  cursor: "pointer",
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="View Enrollment">
                              <img
                                src={
                                  row.vwEnrFlg
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
                              />
                            </Tooltip>
                          </>
                        );
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </PageInner>
  );
};
export default Members;
