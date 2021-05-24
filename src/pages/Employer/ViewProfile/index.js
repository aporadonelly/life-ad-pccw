import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  isLoadingSelector,
  errorSelector,
  employersSelector,
  authPersonSelector,
} from "@redux/features/employers/selectors";
import {
  getEmployers,
  viewAuthPerson,
} from "@redux/features/employers/actions";
import ViewAuthProfile from "./ViewAuthPersonProfile";

const ViewProfile = (props) => {
  const { viewAuthPerson, authPerson, employers } = props;

  useEffect(() => {
    getEmployers();
    viewAuthPerson();
  }, []);

  return <ViewAuthProfile authPerson={authPerson} employers={employers} />;
};

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  employers: employersSelector(state),
  authPerson: authPersonSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getEmployers, viewAuthPerson }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
