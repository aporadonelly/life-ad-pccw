import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  auth: state.userAccounts.userAuthDetails,
});

function createPublicRoute({ component }) {
  const PublicRoute = ({ auth, ...rest }) => {
    if (!auth) {
      return React.createElement(component, rest);
    }

    return (
      <Redirect
        to={{ pathname: "/dashboard", state: { from: rest.location } }}
      />
    );
  };

  const ConnectedComponent = connect(mapStateToProps)(PublicRoute);

  return {
    render: (props) => <ConnectedComponent {...props} />,
  };
}

export default createPublicRoute;
