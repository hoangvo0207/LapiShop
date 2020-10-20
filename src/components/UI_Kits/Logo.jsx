import PropTypes from "prop-types";
import React from "react";

const Logo = (props) => {
  const { className, height } = props;

  return (
    <img
      className={className}
      src="/images/logo.png"
      alt="logo"
      height={height}
    />
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
};

Logo.defaultProps = {
  className: "",
  height: 96,
};

export default Logo;
