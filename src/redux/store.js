import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _state: {
    profilePage: {
      dataPosts: [
        {id: 1, message: 'Hi, how are you?', likes: "1"},
        {id: 2, message: 'It\'s my first post', likes: "25"},
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    navbar: {
      friends: [
        {
          id: 1,
          name: 'Sergey K.',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ88r6xoZrzc089TrdvE1tOfM7sCbdCdMRpl_eZT5BlgHOE9T2-'
        },
        {
          id: 2,
          name: 'Dmitry',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP8o-T9YKgkqxdkRm5MiC6jGcZR6H9shwTa7jdwoybtc7Ao0PU'
        },
        {
          id: 3,
          name: 'Maria',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3YFC0HcLtuf03TlGIwNSkaqW51T--OJyEelSIEnuc6nkfx_kn'
        }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  }
};

window.state = store;

export default store;