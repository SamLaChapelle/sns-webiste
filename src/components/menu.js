import React from "react";
import drinksPic from "../assets/IMG_2672.png";
import snsMenuPic from "../assets/SNS MENU.png";

function Menu() {
  return (
    <div id="Menu">
      <h3 id="menuTitle">MENU</h3>
      <img
        id="drinksPic"
        src={drinksPic}
        alt="nonalcoholic and alcoholic drinks sitting on a wooden shelf"
      />
      <img id="snsMenuPic" src={snsMenuPic} alt="Shield N Sheath Menu" />
    </div>
  );
}

export default Menu;
