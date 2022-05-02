import React from "react";
import drinksPic from "../assets/IMG_2672.png";
import snsMenuPic from "../assets/SHIELD N SHEATH MENU SPRING MENU.jpg";
import pizzaPic from "../assets/icons8-pizza-100.png";
import beerPic from "../assets/icons8-beer-100.png";

function Menu() {
  return (
    <div id="Menu">
      <h3 id="menuTitle">MENU</h3>
      <img
        id="drinksPic"
        src={drinksPic}
        alt="nonalcoholic and alcoholic drinks sitting on a wooden shelf"
      />
      <div id="menuFlex">
        <img id="pizzaPic" src={pizzaPic} alt="cartoon beer can"/>
        <img id="snsMenuPic" src={snsMenuPic} alt="Shield N Sheath Menu" />
        <img id="beerPic" src={beerPic} alt="cartoon beer mug"/>
      </div>
    </div>
  );
}

export default Menu;
