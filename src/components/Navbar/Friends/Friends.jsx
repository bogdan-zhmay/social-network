import React, { Component } from "react";
import style from "./Friends.module.scss";
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

  let friendsItems = props.friends
    .map( (item, index) => <FriendItem key={index} id={item.id} src={item.src} name={item.name}/>
    );

  return (
    <div className={style.friends}>
      <span className={style.friends__title}>Friends</span>
      <div className={style.friends__list}>
        {friendsItems}
      </div>
    </div>
  );
};

export default Friends;