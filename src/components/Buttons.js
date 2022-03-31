import React from "react";
import "../App.css";

const Buttons = (props) => {
  function clickHandler(value) {
    console.log("click", value);
    return props.onClick(value);
  }

  return (
    <div className="buttons-container">
      {props.categories.map((item, index) => {
        return (
          <button key={index} className="button-items" onClick={() => clickHandler(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
