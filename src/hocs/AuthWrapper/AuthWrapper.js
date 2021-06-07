import { useEffect } from "react";
import { connect } from "react-redux";
import { userSelector } from "@redux/features/user/selectors";
import { isObject } from "lodash";

const AuthWrapper = (WrappedComponent) => {
  const Wrapper = ({ user, ...props }) => {
    useEffect(() => {
      if (!isObject(user)) {
        window.location.href = `${window.location.origin}${process.env.REACT_APP_REDIRECT_URL}`;
      }
    }, [user]);

    if (isObject(user)) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  const mapStateToProps = (state) => ({
    user: userSelector(state),
  });

  return connect(mapStateToProps)(Wrapper);
};

export default AuthWrapper;
