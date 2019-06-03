import React from "react";

import "./style.css";

export default function Preloader() {
  return (
    <div className="preloader-btn">
      {" "}
      <svg
        height="20px"
        width="20px"
        className="__react-svg-spinner_circle"
        role="img"
        aria-labelledby="title desc"
        viewBox="0 0 32 32"
      >
        {" "}
        <circle
          role="presentation"
          cx="16"
          cy="16"
          r="12.5"
          stroke="#da1b60"
          fill="none"
          strokeWidth="3"
          strokeDasharray="43.982297150257104"
          strokeLinecap="round"
        />{" "}
      </svg>{" "}
    </div>
  );
}
