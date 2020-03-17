import React from "react";
import style from "./PeopleItem.module.scss"

const PeopleItem = (props) => {
  return (
    <div className={style.col}>
      <div className={style.item}>
        <div>
          <div className={style.item__img}>
            <img src={props.photo} alt="user"/>
          </div>
          <span className={style.item__name}>{props.fullName}</span>
          <span className={style.item__status}>{props.status}</span>
        </div>
        <div>
          <span className={style.item__country}>{props.location.country}</span>
          <span className={style.item__city}>{props.location.city}</span>
          <div>
            {props.followed
              ? <button onClick={() => {props.unfollow(props.id)}} className={`${style.btn} ${style.item__btn}`}>Follow</button>
              : <button onClick={() => {props.follow(props.id)}} className={`${style.btn} ${style.item__btn}`}>Unfollow</button>}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PeopleItem;