import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MemberSearch from "./MemberSearch";

import {
  isLoadingSelector,
  errorSelector,
  genderSelector,
  idTypeSelector,
  nationalitySelector,
  placeOfBirthSelector,
  employeeTypeSelector,
  industryTypeSelector,
  occupationSelector,
  schemeTypeSelector,
  statusSelector,
  employeesSelector,
} from "@redux/features/members/selectors";
import {
  getGender,
  getIdType,
  getNationality,
  getPlaceOfBirth,
  getEmployeeType,
  getIndustryType,
  getOccupation,
  getSchemeType,
  getStatus,
  getAllMembers,
  saveEnquiry,
} from "@redux/features/members/actions";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  gender: genderSelector(state),
  idType: idTypeSelector(state),
  nationality: nationalitySelector(state),
  placeOfBirth: placeOfBirthSelector(state),
  employeeType: employeeTypeSelector(state),
  industryType: industryTypeSelector(state),
  occupation: occupationSelector(state),
  schemeType: schemeTypeSelector(state),
  status: statusSelector(state),
  employees: employeesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      getGender,
      getIdType,
      getNationality,
      getPlaceOfBirth,
      getEmployeeType,
      getIndustryType,
      getOccupation,
      getSchemeType,
      getStatus,
      getAllMembers,
      saveEnquiry,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberSearch);
