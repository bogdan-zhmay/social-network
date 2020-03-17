const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  dataPosts: [
    {id: 1, message: 'Hi, how are you?', likes: "1"},
    {id: 2, message: 'It\'s my first post', likes: "25"},
  ],
  newPostText: ''
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
    default:
      return state
  }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (newPost) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newPost
});

export default profileReducer;