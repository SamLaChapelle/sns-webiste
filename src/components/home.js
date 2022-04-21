import React from "react";
import { useState } from "react";
import navAxe from "../assets/icons8-axe-47.png";
import resMask from "../assets/ninja mask reservation.png";
import NavBar from "./navbar.js";

function Home() {
//   const [navModal, setNavModal] = useState(false);

//   function openNavModal(e) {
//     e.preventDefault();
//     if (navModal === true) {
//       setNavModal(false);
//     } else if (navModal === false) {
//       setNavModal(true);
//     }
//   }

  return (
    <div className="mainHome">
      {/* <div id="navBar">
        <img id="navAxe" src={navAxe} alt="axe" onClick={openNavModal}></img>
      </div> */}
      <NavBar id="navBarModal" />
      <header className="homeHeader">
        <div id="logo"> LOGO </div>
        <div id="resLink">
          <a href="https://vantora.com/e/sns/">
            <div id="resTitle">BOOK NOW</div>
            <img id="resMask" src={resMask} alt="red ninja mask"></img>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;
