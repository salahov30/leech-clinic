import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import MenuList from '../MenuList';
import './Toolbar.css';

const toolbar = props => (
  <div className="container">
    <div className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/" aria-label="Логотип">
            Leech clinick
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <MenuList />
        </div>
      </nav>
    </div>
  </div>
);

export default toolbar;
