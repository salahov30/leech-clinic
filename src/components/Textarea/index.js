import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./textarea.css";

const Textarea = ({ id, className, label, error, children, ...attrs }) => {
  const classes = classNames("input textarea", className, { error });
  return (
    <div className="inputWrapper">
      <div className="labelsWrapper">
        {label && (
          <label className="inputLabel" htmlFor={id}>
            {label}
          </label>
        )}
        {attrs.required && (
          <span className="inputRequired">Заполните поле</span>
        )}
      </div>
      <textarea name={id} id={id} className={classes} {...attrs}>
        {children}
      </textarea>
      {error && <span className="inputError">{error}</span>}
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
};

Textarea.defaultProps = {
  className: "",
  label: "",
  error: ""
};

export default Textarea;
