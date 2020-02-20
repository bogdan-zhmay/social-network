import React, { Component } from "react";
import style from "./Post.module.scss";



const Post = (props) => {

  return (
    <div className={style.item}>
      <div className={style.item__img}>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
      </div>
      <div className={style.item__content}>
        <span className={style.item__text}>
          {props.message}
        </span>
      <span className={style.ite__like}>like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
