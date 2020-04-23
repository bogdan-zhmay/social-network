import React from "react";
import "./App.css";
import "./global.scss";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import PeopleContainer from "./components/People/PeopleContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="container">

        <div className="app-wrapper-inner">
          <NavbarContainer />
          <div className="app-wrapper-content">
            <Route path='/dialogs'
                   render={ () => <DialogsContainer />}/>
            <Route path='/profile/:userId?'
                   render={ () => <ProfileContainer /> }/>
            <Route path='/people'
                   render={ () => <PeopleContainer /> }/>

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
