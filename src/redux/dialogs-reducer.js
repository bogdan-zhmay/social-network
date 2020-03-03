const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dataMessages: [
    {
      id: 1,
      name: 'Me',
      src: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      message: 'Hi man! How are you?'
    },
    {
      id: 2,
      name: 'Sergey K.',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ88r6xoZrzc089TrdvE1tOfM7sCbdCdMRpl_eZT5BlgHOE9T2-',
      message: 'Hi, everything grate!'
    },
    {
      id: 3,
      name: 'Me',
      src: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      message: 'You are already tested this project?'
    },
  ],
  newMessageText: '',
  dataDialogs: [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Sergey'},
    {id: 3, name: 'Sergey K.'},
    {id: 4, name: 'Lucy'},
    {id: 5, name: 'Maria'},
    {id: 6, name: 'Viktor'},
    {id: 7, name: 'Lera'},
  ],
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        src: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        message: state.newMessageText,
        name: 'Me'
      };
      state.dataMessages.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.newMessageBody;
      break;
  }

  return state;
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessageBody: newMessage
});

export default dialogsReducer;