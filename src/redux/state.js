let store = {
  _state: {
    profilePage: {
      dataPosts: [
        {id: 1, message: 'Hi, how are you?', likes: "1"},
        {id: 2, message: 'It\'s my first post', likes: "25"},
      ],
      newPostText: 'Riseapps'
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
      dataDialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Sergey K.'},
        {id: 4, name: 'Lucy'},
        {id: 5, name: 'Maria'},
        {id: 6, name: 'Viktor'},
        {id: 7, name: 'Lera'},
      ]
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


  addPost() {

    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likes: 0
    };

    this._state.profilePage.dataPosts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {

    let newMessage = {
      id: 4,
      src: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      message: this._state.dialogsPage.newPostText,
      name: 'Me'
    };

    this._state.dialogsPage.dataMessages.push(newMessage);
    this._state.dialogsPage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessage(newText) {
    this._state.dialogsPage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {

    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likes: 0
      };

      this._state.profilePage.dataPosts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === 'ADD-MESSAGE') {

      let newMessage = {
        id: 4,
        src: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        message: this._state.dialogsPage.newPostText,
        name: 'Me'
      };
      this._state.dialogsPage.dataMessages.push(newMessage);
      this._state.dialogsPage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE') {

      this._state.dialogsPage.newPostText = action.newText;
      this._callSubscriber(this._state);

    }
  },
};

window.state = store;

export default store;