import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import peopleReducer from "./people-reducer";
import authReducer from "./auth-reducer";

const  reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  peoplePage: peopleReducer,
  auth: authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;