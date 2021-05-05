import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userSelector } from "@redux/features/user/selectors";

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

function createPrivateRoute({ component }) {
  const PrivateRoute = ({ user, ...rest }) => {
    if (user) {
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
