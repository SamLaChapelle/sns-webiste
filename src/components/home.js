import React from "react";
import resMask from "../assets/ninja mask reservation.png";
import ninja1 from "../assets/ninja1.png";
import ninja2 from "../assets/ninjatwo.png";
import NavBar from "./navbar.js";
import snsLogo from "../assets/Shield n Sheath Logo white (1).svg"

function Home() {

  return (
    <div className="mainHome">
      <NavBar id="navBarModal" />
      <div id="Home">
          <img id="snsLogo" src={snsLogo} alt="Shield N Sheath Logo"/>
        <div id="resLink">
          <a href="https://vantora.com/e/sns/">
            <div id="resTitle">BOOK NOW</div>
            <img id="resMask" src={ninja1} alt="red ninja mask"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
