import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setPeople,
  setTotalPeopleCount,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/people-reducer";
import People from "./People/People";
import preloader from "../../assets/images/preloader.svg";
import style from "../People/People/People.module.scss";
import {peopleAPI} from "../../api/api";


class PeopleContainer extends React.Component {

  componentDidMount() {

    this.props.toggleIsFetching(true);

    peopleAPI.getPeople(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setPeople(data.items);
        this.props.setTotalPeopleCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    peopleAPI.getPeople(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setPeople(data.items);
      });
  };

  render() {

    return (
      <div className={style.wrapper}>
        { this.props.isFetching ? <img className={style.preloader} src={preloader} alt="preloader"/> : null}
        <People
          totalPeopleCount={this.props.totalPeopleCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          people={this.props.people}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.peoplePage.people,
    pageSize: state.peoplePage.pageSize,
    totalPeopleCount: state.peoplePage.totalPeopleCount,
    currentPage: state.peoplePage.currentPage,
    isFetching: state.peoplePage.isFetching,
    followingInProgress: state.peoplePage.followingInProgress
  }
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setPeople,
  setCurrentPage,
  setTotalPeopleCount,
  toggleIsFetching,
  toggleFollowingProgress
})(PeopleContainer);