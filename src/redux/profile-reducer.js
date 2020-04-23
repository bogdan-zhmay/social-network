const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PEOPLE_PROFILE = 'SET_PEOPLE_PROFILE';

let initialState = {
  dataPosts: [
    {id: 1, message: 'Hi, how are you?', likes: "1"},
    {id: 2, message: 'It\'s my first post', likes: "25"},
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        dataPosts:  [...state.dataPosts, newPost],
        newPostText:  ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_PEOPLE_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state
  }
};

export const addPostCreator = () => ({type: ADD_POST});
export const setPeopleProfile = (profile) => ({type: SET_PEOPLE_PROFILE, profile});
export const updateNewPostTextCreator = (newPost) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newPost
});

export default profileReducer;