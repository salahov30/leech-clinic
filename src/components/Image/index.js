import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "../Image/image.css";

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  circle,
  angle,
  ...attrs
}) => {
  const classes = classNames(className, { circle, angle });

  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}?text=Placeholder`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      {...attrs}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
  angle: PropTypes.bool,
  className: PropTypes.string
};

Image.defaultProps = {
  src: "",
  alt: "image",
  circle: false,
  angle: false,
  className: "",
  width: 300,
  height: 300
};

export default Image;
