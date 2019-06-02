import React from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../Menu';

function Stocks() {
  return (
    <>
      <Helmet>
        <title>Акции</title>
      </Helmet>
      <Menu />
    </>
  );
}

export default Stocks;
