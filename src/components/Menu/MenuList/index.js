import React from 'react';
import { NavLink } from 'react-router-dom';

import { getJwt } from '../../../helpers/jwt';
import Icon from '../../Icon';

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
        <NavLink to="/price">Услуги</NavLink>
      </li>
      <li>
        <NavLink to="/about">О клинике</NavLink>
      </li>
      <li>
        <NavLink to="/rewies">Отзывы</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Контакты</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Записаться на прием</NavLink>
      </li>
      <li>
        {getJwt() ? (
          <NavLink to="/profile" aria-label="Профиль">
            <Icon name="fa fa-user" />
          </NavLink>
        ) : (
          <NavLink to="/login" aria-label="Вход в личный кабинет">
            <Icon name="fa fa-user" />
          </NavLink>
        )}
      </li>
    </ul>
  </>
);

export default MenuList;
