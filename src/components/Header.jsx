import React, { Component } from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <figure className={style.header__logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMbm6JTUYc5DkzrzBffprtqBfNHAF7S0hsen4Igajjhrf3uuU4"
          alt="logo"
        />
      </figure>
    </header>
  );
};

export default Header;
