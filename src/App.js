import React from "react";
import "./App.css";
import "./global.scss";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  // debugger;

  return (
    <div className="app-wrapper">
      <Header/>
      <div className="container">

        <div className="app-wrapper-inner">
          <Navbar data={props.state.navbar}/>
          <div className="app-wrapper-content">
            <Route path='/dialogs'
                   render={ () => <Dialogs
                     data={props.state.dialogsPage}
                     dispatch={props.dispatch}
                   />}/>
            <Route path='/profile'
                   render={ () => <Profile
                     data={props.state.profilePage}
                     dispatch={props.dispatch}
                   /> }/>
            <Route path='/news' render={ () => <News /> }/>
            <Route path='/music' render={ () => <Music /> }/>
            <Route path='/settings' render={ () => <Settings /> }/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
