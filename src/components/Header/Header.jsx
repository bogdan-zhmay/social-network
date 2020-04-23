import React from "react";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className="container">

        <div className={style.header__holder}>
          <figure className={style.header__logo}>
            <img
              src="https://www.dvec.ru/design2019/img/upload/card-slide-big-img.png"
              alt="logo"
            />
          </figure>
          <div className={style.header__login}>
              {props.isAuth ? props.login
                :
                <NavLink to={'/login'}>login</NavLink>}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
