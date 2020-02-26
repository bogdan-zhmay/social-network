import React, { Component } from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsData = [
    {id: 1, message: 'Hi, how are you?', likes: "1"},
    {id: 2, message: 'It\'s my first post', likes: "25"},
  ];

  let postItems = postsData
    .map( (item, index) => <Post key={index} id={item.id} message={item.message} likes={item.likes}/>
  );

  return (
    <div className={style.postsContent}>
      <h1>My post</h1>
      <form className={style.postsContent__form}>
        <textarea className={style.postsContent__message} placeholder="your news..."></textarea>
        <button className={`${style.btn} ${style.postsContent__btn}`}>Send</button>
      </form>
      <div className={style.posts}>
        {postItems}
      </div>
    </div>
  );
};

export default MyPosts;
