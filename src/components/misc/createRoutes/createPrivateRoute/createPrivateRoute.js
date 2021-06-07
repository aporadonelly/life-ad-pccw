import React from "react";
import { connect } from "react-redux";
import { userSelector } from "@redux/features/user/selectors";
import { Box } from "@material-ui/core";

const createPrivateRoute = ({ component }) => {
  const PrivateRoute = (props) => {
    const { user, ...rest } = props;

    if (user) {
      return React.createElement(component ?? Box, rest);
    }

    window.location.href = `${window.location.origin}${process.env.REACT_APP_REDIRECT_URL}`;

    return null;
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
