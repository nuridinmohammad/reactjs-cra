import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, variant, action }) => {
  return (
    <>
      <button className={`btn btn-${variant}`} onClick={action}>
        {name}
      </button>
    </>
  );
};

export default Button;
Button.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
  delById: PropTypes.func,
};
