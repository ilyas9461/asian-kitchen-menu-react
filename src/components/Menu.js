import React from "react";
import "../App.css";
import logo from "../assets/images/menu-icon.png";

const Menu = (props) => {
  return (
    <div className="grid grid-1-2 md-grid-full">
      {props.items.map((item) => {
        return (
          <div className="grid-cell">            
            <img src={item.img} alt={item.title} className="photo" />
            <div class="menu-info">
              <div class="menu-title">{item.title} <span className="menu-price">{item.price}</span> </div> 
              <div class="menu-text">{item.desc} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
