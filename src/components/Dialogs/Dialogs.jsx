import React from "react";
import style from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

  let dialogItems = props.dialogsPage.dataDialogs
    .map( (item, index) => <DialogItem key={index} name={item.name} id={item.id}/> );

  let messageItems = props.dialogsPage.dataMessages
    .map( (item, index) => {
        return <MessageItem key={index} name={item.name} id={item.id} src={item.src} message={item.message}/>
      }
    );

  let newMessageBody = props.dialogsPage.newMessageText;

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  };

  return (
    <div className={style.dialogs}>
      <span className={style.dialogs__title}>Dialogs</span>
      <div className={style.dialogs__holder}>
        <div className={style.dialogs__list}>
          {dialogItems}
        </div>
        <div className={style.dialogs__content}>
          {messageItems}
          <form className={style.dialogs__form}>
            <textarea onChange={onMessageChange} value={newMessageBody} className={style.dialogs__textarea} placeholder='Write your message'></textarea>
            <button type='button' onClick={ onAddMessage } className={ `${style.btn} ${style.dialogs__btn}` }>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;