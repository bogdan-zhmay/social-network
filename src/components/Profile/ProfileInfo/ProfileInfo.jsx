import React, { Component } from "react";
import style from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={style.bg}>
        <img
          src="https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-1.2.1&w=1000&q=80"
          alt="img"
        />
      </div>
      <div className={style.info}>
        <div className={style.info__img}>
          <img src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"/>
        </div>
        <div className={style.info__content}>
          <h3>Bogdan Z.</h3>
          <ul>
            <li>Date of Birth: 28 august</li>
            <li>City: Kharkiv</li>
            <li>Education: KNAHU '14</li>
            <li>Web Site: https://my-site.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
