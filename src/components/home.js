import React from "react";
import NavBar from "./navbar.js";


function Home() {
  return (
    <div className="mainHome">
      <NavBar id="navBarModal" />
      <div id="Home">
        <img
          id="snsLogo"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698774/shieldnsheath%20assets/Shield_n_Sheath_Logo_white-01_1_zarssc.png"
          alt="Shield N Sheath Logo"
        />
        <div id="resLink">
          <a href="https://vantora.com/e/sns/">
            <div id="resTitle">BOOK NOW</div>
            <img
              id="resMask"
              src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698773/shieldnsheath%20assets/ninja1_yzuahg.png"
              alt="red ninja mask"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
