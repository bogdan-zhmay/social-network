import React from "react";
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink to="/dialogs" activeClassName={style.active}>Message</NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </li>
      </ul>
      <Friends friends={props.friends}/>
    </nav>
  );
};

export default Navbar;