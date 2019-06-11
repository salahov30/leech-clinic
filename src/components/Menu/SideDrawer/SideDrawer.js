import React from "react";

import MenuList from "../MenuList";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav aria-label="Мобильная версия главного меню" className={drawerClasses}>
      <MenuList />
    </nav>
  );
};

export default sideDrawer;
