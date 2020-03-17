const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PEOPLE = 'SET_PEOPLE';

let initialState = {
  people: []
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
      return { ...state, people: [...state.people, ...action.people] };
    default:
      return state;
  }
};

export const followCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setPeopleCreator = (people) => ({ type: SET_PEOPLE, people });

export default peopleReducer;