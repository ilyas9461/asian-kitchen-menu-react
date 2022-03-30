import React from "react";
import "../App.css";
import logo from "../assets/images/menu-icon.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-items">
        <img
          src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
          alt=""
          className="photo"
        />
        <div class="menu-info">
          <div class="menu-title"> title</div>
          <div class="price">10.99 </div>
          <div class="menu-text">Description </div>
        </div>
      </div>
      <div className="menu-items">
        <img
          src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
          alt=""
          className="photo"
        />
        <div class="menu-info">
          <div class="menu-title"> title</div>
          <div class="price">10.99 </div>
          <div class="menu-text">Description </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
