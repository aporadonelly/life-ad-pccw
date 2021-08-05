import { connect } from "react-redux";
import { enrCompanyInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import { customTypesEntitiesSelector } from "@redux/features/system/selectors";
import EmployerEnrollmentInfo from "./EmployerEnrollmentInfo";

const mapStateToProps = (state) => ({
  enrCompanyInfo: enrCompanyInfoSelector(state),
  customTypes: customTypesEntitiesSelector(state),
});

export default connect(mapStateToProps, null)(EmployerEnrollmentInfo);
