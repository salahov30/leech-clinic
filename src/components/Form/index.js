import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./form.css";

const Form = ({ method, children, className, ...attrs }) => {
  const classes = classNames("form", className);

  return (
    <form className={classes} {...attrs}>
      {children}
    </form>
  );
};

Form.propTypes = {
  method: PropTypes.string,
  className: PropTypes.string
};

Form.defaultProps = {
  method: "",
  className: ""
};

export default Form;
