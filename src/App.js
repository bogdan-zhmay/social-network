import React from "react";
import "./App.css";
import "./global.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="container">

        <div className="app-wrapper-inner">
          <Navbar/>
          <div className="app-wrapper-content">
            {/*<Profile />*/}
            <Dialogs/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
