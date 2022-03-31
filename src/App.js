import { useState } from "react";
import "./App.css";
import MenuHeader from "./components/MenuHeader";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";
import { menu } from "./assets/data/data";

const categories = menu.reduce(
  (values, items) => {
    if (!values.includes(items.category)) {
      values.push(items.category);
    }
    return values;
  },
  ["ALL"],
);


function App() {
  const [menuItems, setMenuItems] =useState(menu);

  function getClickValue(value) {
    if (value === "ALL") {
      setMenuItems(menu);
    } else{
      const items = menu.filter((item) => {
        if (item.category === value) {
          return item;
        }
      });
      setMenuItems(items);
    }   
  }
  return (
    <div>
      <MenuHeader />
      <Buttons onClick={getClickValue} categories={categories} />
      <Menu items={menuItems}/>
    </div>
  );
}

export default App;
