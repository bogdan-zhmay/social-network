import React from "react";
import {connect} from "react-redux";
import People from "./People";
import {followCreator, setPeopleCreator, unfollowCreator} from "../../redux/people-reducer";

const mapStateToProps = (state) => {
  return {
    people: state.peoplePage.people
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowCreator(userId));
    },
    setPeople: (people) => {
      dispatch(setPeopleCreator(people));
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(People);