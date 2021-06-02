/* eslint-disable default-case */
import { useEffect } from "react";
import { _without } from "lodash";
import { Chip } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const MembersEnquiryChip = ({ enquiry }) => {
  const { t } = useTranslation(["typography", "form", "button", "table"]);
  let valueLabel;

  useEffect(() => {}, [enquiry]);

  const handleDelete = (key) => () => {
    console.log("clicked delete");
    Object.entries((current) => _without(current, key));
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
      case "PH":
        valueLabel = "Philippines";
        break;
      case "100":
        valueLabel = "Hong Kong";
        break;
      case "1":
        valueLabel = "Test";
        break;
      case "CH":
        valueLabel = "China";
        break;
      case "ID_SO":
        valueLabel = "ID SO";
        break;
      case "ID_BR":
        valueLabel = "ID BR";
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
        valueLabel = value;
        break;
    }
  };

  const renderObject = () => {
    return Object.entries(enquiry).map(([key, value], i) => {
      console.log(key, "key");
      getChipDropDownValue(value);
      let label = ` ${valueLabel}`;

      if (valueLabel)
        return (
          <Chip
            style={{
              backgroundColor: getColor(),
              color: "white",
              margin: "1px",
            }}
            // onDelete={handleDelete(key)}
            label={`${t(`form:label.${key}`)} : ${label}`}
            key={key}
          />
        );
    });
  };

  return renderObject();
};
export default MembersEnquiryChip;

const getColor = roundrobin([
  "#6E55E2",
  "#EA5F63",
  "#EF841F",
  "#2D9FC3",
  "#707070",
  "#42526E",
]);

export function roundrobin(array, index = 0) {
  if (array === undefined || array === null) array = [];
  else if (!Array.isArray(array))
    throw new Error("Expecting argument to RoundRound to be an Array");

  return function () {
    if (index >= array.length) index = 0;
    return array[index++];
  };
}
