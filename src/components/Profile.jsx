import React, { Component } from "react";


import style from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile__img}>
        <img
          src="https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-1.2.1&w=1000&q=80"
          alt="img"
        />
      </div>

    </div>
  );
};

export default Profile;
