import React, { Component } from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={style.postsContent}>
      <h1>My post</h1>
      <form className={style.postsContent__form}>
        <textarea className={style.postsContent__message} placeholder="your news..."></textarea>
        <button className={style.postsContent__btn}>Send</button>
      </form>
      <div className={style.posts}>
        <Post message="Hi, how are you?" likes="1"/>
        <Post message="It's my first post" likes="20"/>
      </div>
    </div>
  );
};

export default MyPosts;
