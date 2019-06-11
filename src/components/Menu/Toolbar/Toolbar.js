import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import MenuList from "../MenuList";
// import Image from "../../Image/";
import "./Toolbar.css";

const toolbar = props => (
  <div className="container">
    <div className="toolbar">
      <nav aria-label="Главное меню" className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/" aria-label="Логотип">
            {/* <Image
              src={process.env.PUBLIC_URL + "/image/plus.png"}
              width={20}
              height={20}
            /> */}
            <span>Leech clinick</span>
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
