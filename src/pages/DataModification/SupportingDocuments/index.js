import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadDocuments } from "@redux/features/dataModification/actions";
import SupportingDocuments from "./SupportingDocuments";
import {
  isLoadingSelector,
  errorSelector,
} from "@redux/features/dataModification/selectors";

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      uploadDocuments,
    },
    dispatch
  ),
});

// export { default } from "./SupportingDocuments";
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportingDocuments);
