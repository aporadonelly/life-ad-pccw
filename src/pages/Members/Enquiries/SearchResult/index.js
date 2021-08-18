import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "@redux/helpers";
import {
  employeesSelector,
  draftEnquirySelector,
} from "@redux/features/registrationEmployee/selectors";
import {
  draftEnquiry,
  ldSrchRegInd,
} from "@redux/features/registrationEmployee/actions";
import SearchResult from "./SearchResult";

const mapStateToProps = (state) => ({
  employees: employeesSelector(state),
  enquiry: draftEnquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      draftEnquiry,
      ldSrchRegInd,
      push,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
