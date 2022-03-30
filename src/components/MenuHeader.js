import React from "react";
import "../App.css";
import logo from "../assets/images/menu-icon.png";

function MenuHeader() {
  return (
    <header className="App-header">
      <div className="logo-container">
       <img src={logo} alt="logo"  className="logo"/>
      </div>
      <div className="title-container">
        <h2 className="title"> Asian Kitchen 's Menu</h2>
      </div>
    </header>
  );
}

export default MenuHeader;
