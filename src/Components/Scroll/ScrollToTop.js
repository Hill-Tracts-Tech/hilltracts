import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ScrollToTopComponent = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTopComponent;

ScrollToTopComponent.propTypes = {
  children: PropTypes.string,
};
