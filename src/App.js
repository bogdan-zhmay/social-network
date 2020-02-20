import React, { Component } from "react";
import "./App.css";
import "./global.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <div className="app-wrapper-inner">
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
