import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userSelector } from "@redux/features/user/selectors";
import { Box } from "@material-ui/icons";

const createPrivateRoute = ({ component }) => {
  const PrivateRoute = (props) => {
    const { user, ...rest } = props;

    if (user) {
      return React.createElement(component ?? Box, rest);
    }

    return (
      <Redirect to={{ pathname: "/signin", state: { from: rest.location } }} />
    );
  };

  const mapStateToProps = (state) => ({
    user: userSelector(state),
  });

  const ConnectedComponent = connect(mapStateToProps)(PrivateRoute);

  return {
    render: (props) => <ConnectedComponent {...props} />,
  };
};

export default createPrivateRoute;
