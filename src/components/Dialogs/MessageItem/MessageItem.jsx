import React from "react";
import style from "./../Dialogs.module.scss"

const MessageItem = (props) => {

  return (
    <div className={style.dialogs__message} id={props.id}>
      <div className={style.dialogs__message_user}>
        <div className={style.dialogs__message_img}>
          <img src={props.src} alt="user"/>
        </div>
        <span className={style.dialogs__message_name}>{props.name}</span>
      </div>
      <div className={style.dialogs__message_text}>{props.message}</div>
    </div>
  )
};


export default MessageItem;