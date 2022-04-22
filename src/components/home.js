import React from "react";
import resMask from "../assets/ninja mask reservation.png";
import NavBar from "./navbar.js";

function Home() {

  return (
    <div className="mainHome">
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
