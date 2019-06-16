import React from "react";
import { NavLink } from "react-router-dom";

import { getJwt } from "../../../helpers/jwt";
import Image from "../../Image";

const MenuList = () => (
  <>
    <ul>
      <li>
        <NavLink exact to="/">
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink to="/specialists">Специалисты</NavLink>
      </li>
      <li>
        <NavLink to="/services">Услуги</NavLink>
      </li>
      <li>
        <NavLink to="/about">О клинике</NavLink>
      </li>
      {/* <li>
        <NavLink to="/rewies">Отзывы</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/contacts">Контакты</NavLink>
      </li> */}
      <li>
        <NavLink to="/appointment">Записаться на прием</NavLink>
      </li>
      <li>
        {getJwt() ? (
          <NavLink to="/profile" aria-label="Профиль">
            <Image
              src={process.env.PUBLIC_URL + "/image/user.png"}
              width={15}
              height={15}
            />
          </NavLink>
        ) : (
          <NavLink to="/login" aria-label="Вход в личный кабинет">
            <Image
              src={process.env.PUBLIC_URL + "/image/user.png"}
              width={15}
              height={15}
            />
          </NavLink>
        )}
      </li>
    </ul>
  </>
);

export default MenuList;
