import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <nav className="menu">
      <NavLink
        exact
        className="menu__item"
        activeClassName="menu__item_active"
        to="/"
      >
        Поиск
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item_active"
        to="/create"
      >
        Создание товара
      </NavLink>
    </nav>
  );
}

export default Menu;
