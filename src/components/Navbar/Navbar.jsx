import React, { Component } from "react";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={ `${style.nav__item} ${style.active}` }>
          <a href="#">Profile</a>
        </li>
        <li className={style.nav__item}>
          <a href="#">Message</a>
        </li>
        <li className={style.nav__item}>
          <a href="#">News</a>
        </li>
        <li className={style.nav__item}>
          <a href="#">Music</a>
        </li>
        <li className={style.nav__item}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;