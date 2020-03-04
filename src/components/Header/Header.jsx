import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <figure className={style.header__logo}>
          <img
            src="https://www.dvec.ru/design2019/img/upload/card-slide-big-img.png"
            alt="logo"
          />
        </figure>
      </div>
    </header>
  );
};

export default Header;
