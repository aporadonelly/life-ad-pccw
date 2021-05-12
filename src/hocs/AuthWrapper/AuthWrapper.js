import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { userSelector } from "@redux/features/user/selectors";

const AuthWrapper = (WrappedComponent) => {
  const Wrapper = ({ user, ...props }) => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (!user && pathname !== process.env.REACT_APP_REDIRECT_URL) {
        window.location.href = process.env.REACT_APP_REDIRECT_URL;
      }
    }, [user, pathname]);

    if (!user) return null;

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    user: userSelector(state),
  });

  return connect(mapStateToProps)(Wrapper);
};

export default AuthWrapper;
