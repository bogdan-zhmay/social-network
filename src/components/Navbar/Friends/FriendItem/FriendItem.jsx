import React from "react";
import style from "./FriendItem.module.scss";



const FriendItem = (props) => {
  return (
    <div className={style.item}>
      <div className={style.item__img}>
        <img src={props.src} alt="user"/>
      </div>
      <span className={style.item__name}>{props.name}</span>
    </div>
  );
};

export default FriendItem;