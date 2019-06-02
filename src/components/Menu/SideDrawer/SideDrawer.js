import React from 'react';

import MenuList from '../MenuList';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <MenuList />
    </nav>
  );
};

export default sideDrawer;
