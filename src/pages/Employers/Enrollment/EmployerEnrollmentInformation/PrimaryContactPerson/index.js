import { connect } from "react-redux";
import { enrCompanyInfoSelector } from "@redux/features/enrollmentEmployer/selectors";
import PrimaryContactPerson from "./PrimaryContactPerson";

const mapStateToProps = (state) => ({
  enrCompanyInfo: enrCompanyInfoSelector(state),
});

export default connect(mapStateToProps, null)(PrimaryContactPerson);
