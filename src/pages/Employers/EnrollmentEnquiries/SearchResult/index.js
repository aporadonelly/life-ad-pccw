import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  employersSelector,
  isLoadingSelector,
  errorSelector,
  enquirySelector,
} from "@redux/features/employers/selectors";
import { getEmployers, saveEnquiry } from "@redux/features/employers/actions";

import SearchResult from "./SearchResult";

const mapStateToProps = (state) => ({
  employers: employersSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  enquiry: enquirySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getEmployers, saveEnquiry }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
