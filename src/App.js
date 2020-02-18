import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
        <div className="app-wrapper-inner">
          <Header />
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
