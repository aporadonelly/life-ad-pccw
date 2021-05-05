import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  auth: state.userAccounts.userAuthDetails,
});

function createPrivateRoute({ component }) {
  const PrivateRoute = ({ auth, ...rest }) => {
    if (auth) {
      return React.createElement(component, rest);
    }

    return (
      <Redirect to={{ pathname: "/signin", state: { from: rest.location } }} />
    );
  };

  const ConnectedComponent = connect(mapStateToProps)(PrivateRoute);

  return {
    render: (props) => <ConnectedComponent {...props} />,
  };
}

export default createPrivateRoute;
