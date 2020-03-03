let initialState ={
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
};

const navbarReducer = (state = initialState, action) => {

  return state;
};

export default navbarReducer;