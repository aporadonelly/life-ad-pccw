import { useEffect } from "react";
import { connect } from "react-redux";
import { userSelector } from "@redux/features/user/selectors";

const AuthWrapper = (WrappedComponent) => {
  const Wrapper = ({ user, ...props }) => {
    useEffect(() => {
      if (!user) {
        window.location.href = process.env.REACT_APP_REDIRECT_URL;
      }
    }, [user]);

    if (!user) return null;

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    user: userSelector(state),
  });

  return connect(mapStateToProps)(Wrapper);
};

export default AuthWrapper;
