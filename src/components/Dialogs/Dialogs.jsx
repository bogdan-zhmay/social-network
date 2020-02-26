import React from "react";
import style from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Sergey'},
    {id: 3, name: 'Sergey K.'},
    {id: 4, name: 'Lucy'},
    {id: 5, name: 'Maria'},
    {id: 6, name: 'Viktor'},
    {id: 7, name: 'Lera'},
  ];

  let messageData = [
    {
      id: 1,
      name: 'Me',
      src: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      message: 'Hi man! How are you?'
    },
    {
      id: 2,
      name: 'Sergey K.',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ88r6xoZrzc089TrdvE1tOfM7sCbdCdMRpl_eZT5BlgHOE9T2-',
      message: 'Hi, everything grate!'
    },
    {
      id: 3,
      name: 'Me',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ88r6xoZrzc089TrdvE1tOfM7sCbdCdMRpl_eZT5BlgHOE9T2-',
      message: 'You are already tested this project?'
    },
  ];

  let dialogItems = dialogsData
    .map( (item, index) => <DialogItem key={index} name={item.name} id={item.id}/> );
  let messageItems = messageData
    .map( (item, index) => {
        return <MessageItem key={index} name={item.name} id={item.id} src={item.src} message={item.message}/>
      }
    );

  return (
    <div className={style.dialogs}>
      <span className={style.dialogs__title}>Dialogs</span>
      <div className={style.dialogs__holder}>
        <div className={style.dialogs__list}>
          {dialogItems}
        </div>
        <div className={style.dialogs__content}>
          {messageItems}
        </div>
      </div>
    </div>
  )
};

export default Dialogs;