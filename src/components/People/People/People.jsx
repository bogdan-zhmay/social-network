import React from "react";
import style from "./People.module.scss";
import userIcon from "../../../assets/images/user-icon.png"
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../api/api";


const People = (props) => {

  let pagesCount = Math.ceil(props.totalPeopleCount / props.pageSize / 90);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul className={style.pagination}>

        {pages.map((item, index) => {
          return <li
            key={index}
            className={props.currentPage === item ? style.selected : ''}
            onClick={(e) => {
              props.onPageChanged(item)
            }}
          >{item}</li>
        })}

      </ul>
      <div className={style.row}>
        {
          props.people.map((people, index) => (
            <div key={index} className={style.col}>
              <div className={style.item}>
                <div>
                  <div className={style.item__img}>
                    <NavLink to={ '/profile/' + people.id}>
                      <img src={people.photos.small != null ? people.photos.small : userIcon} alt="user"/>
                    </NavLink>
                  </div>
                  <span className={style.item__name}>{people.name}</span>
                  <span className={style.item__status}>{people.status}</span>
                </div>
                <div>
                  <span className={style.item__country}>{"people.location.country"}</span>
                  <span className={style.item__city}>{"people.location.city"}</span>
                  <div>
                    {people.followed
                      ? <button onClick={() => {

                        followAPI.unfollowPeople(people.id)
                          .then(data => {
                            if (data.resultCode === 0) {
                              props.unfollow(people.id)
                            }
                          });

                      }} className={`${style.btn} ${style.item__btn} ${style.item__btn_unfollow}`}>Unfollow</button>
                      : <button onClick={() => {

                        followAPI.followPeople(people.id)
                          .then(data => {
                            if (data.resultCode === 0) {
                              props.follow(people.id)
                            }
                          });

                      }} className={`${style.btn} ${style.item__btn}`}>Follow</button>}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default People;