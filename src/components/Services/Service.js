import React from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

import Menu from "../Menu";

import "./services.css";

export default withRouter(({ match }) => (
  <>
    <Helmet>
      <title>Акции</title>
    </Helmet>
    <Menu />
  </>
));
