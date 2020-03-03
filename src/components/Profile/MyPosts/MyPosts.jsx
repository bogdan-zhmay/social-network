import React, { Component } from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {


  let postItems = props.dataPosts
    .map( (item, index) => <Post key={index} id={item.id} message={item.message} likes={item.likes}/>
  );

  let newPostMessage = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let newMessage = newPostMessage.current.value;
    props.dispatch(updateNewPostTextCreator(newMessage));
  };

  return (
    <div className={style.postsContent}>
      <h1>My post</h1>
      <div className={style.postsContent__form}>
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostMessage} className={style.postsContent__message} placeholder="your news..."/>
        <button onClick={ addPost } className={`${style.btn} ${style.postsContent__btn}`}>Send</button>
      </div>
      <div className={style.posts}>
        {postItems}
      </div>
    </div>
  );
};

export default MyPosts;
