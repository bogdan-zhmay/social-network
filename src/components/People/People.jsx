import React from "react";
import PeopleItem from "./PeopleItem/PeopleItem";
import style from "./PeopleItem/PeopleItem.module.scss"

const People = (props) => {

  if(props.people.length === 0) {
    props.setPeople([
      {
        id: 1,
        followed: true,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ88r6xoZrzc089TrdvE1tOfM7sCbdCdMRpl_eZT5BlgHOE9T2-',
        fullName: 'Sergey K.',
        status: 'I like music',
        location: {
          country: 'Ukraine',
          city: 'Kharkov'
        }
      },
      {
        id: 2,
        followed: false,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP8o-T9YKgkqxdkRm5MiC6jGcZR6H9shwTa7jdwoybtc7Ao0PU',
        fullName: 'Dmitry',
        status: 'Wordpress it\'s so hard work...',
        location: {
          country: 'Ukraine',
          city: 'Kharkov'
        }
      },
      {
        id: 3,
        followed: true,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3YFC0HcLtuf03TlGIwNSkaqW51T--OJyEelSIEnuc6nkfx_kn',
        fullName: 'Maria',
        status: 'Where is my mind?!',
        location: {
          country: 'Ukraine',
          city: 'Kharkov'
        }
      }
    ]);
  }

  return (
    <div className={style.row}>
      {
        props.people.map((people, index) => (

          <PeopleItem
            key={index}
            id={people.id}
            photo={people.photo}
            fullName={people.fullName}
            status={people.status}
            location={people.location}
            followed={people.followed}
            follow={props.follow}
            unfollow={props.unfollow}
          />

        ))
      }
    </div>
  )
};

export default People;