import React, { Component } from "react";
import style from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile__bg}>
        <img
          src="https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-1.2.1&w=1000&q=80"
          alt="img"
        />
      </div>
      <div className={style.profile__info}>
        <div className={style.profile__info_img}>
          <img src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"/>
        </div>
        <div className={style.profile__info_content}>
          text
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
