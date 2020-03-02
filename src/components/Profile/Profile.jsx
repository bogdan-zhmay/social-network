import React, { Component } from "react";
import style from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts
        dataPosts={props.data.dataPosts}
        dispatch={props.dispatch}
        newPostText={props.data.newPostText}
      />
    </div>
  );
};

export default Profile;
