import React from "react";

import "./preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="circle-preloader" />
        <div className="circle-preloader" />
      </div>
    </div>
  );
}

export default Preloader;
