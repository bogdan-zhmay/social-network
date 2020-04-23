const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PEOPLE = 'SET_PEOPLE';
const SET_CURRENT_PAGE = 'SET__CURRENT_PAGE';
const SET_TOTAL_PEOPLE_COUNT = 'SET_TOTAL_PEOPLE_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  people: [],
  pageSize: 9,
  totalPeopleCount: 0,
  currentPage: 1,
  isFetching: false
};

const peopleReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return  {
        ...state,
        people: state.people.map( people => {
          if (people.id === action.userId) {
            return {...people, followed: true}
          }
          return people;
        })
      };
    case UNFOLLOW:
      return  {
        ...state,
        people: state.people.map( people => {
          if (people.id === action.userId) {
            return {...people, followed: false}
          }
          return people;
        })
      };
    case SET_PEOPLE:
      return { ...state, people: action.people };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_PEOPLE_COUNT:
      return { ...state, totalPeopleCount: action.totalPeopleCount };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setPeople = (people) => ({ type: SET_PEOPLE, people });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalPeopleCount = (totalPeopleCount) => ({ type: SET_TOTAL_PEOPLE_COUNT, totalPeopleCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default peopleReducer;