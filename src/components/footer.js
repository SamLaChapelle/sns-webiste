import React from "react";
import facebookIcon from "../assets/icons8-facebook-48.png";
import instagramIcon from "../assets/icons8-instagram-48.png";
import tiktokIcon from "../assets/icons8-tiktok-48.png";
import IATFPic from "../assets/IATF Trophy Image.png";

function Footer() {
  return (
    <div id="mainFooter">
      <p className="footerInfo">
        Shield N Sheath
        <br />
        Scott's Addition
        <br />
        1511 Altamont Ave
        <br />
        Richmond, VA 23230
        <br />
        <br />
        <a href="tel: 1-833-293-5263">833-AXE-LANE</a>
        <br />
        <a href="mailto:info@shieldnsheath.com">info@shieldnsheath.com</a>
      </p>
      <p className="footerInfo">
        <a href="https://www.facebook.com/Shield-n-Sheath-Hatchet-House-104652208097116">
          {" "}
          <img className="footerIcons" src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/shieldnsheath/">
          {" "}
          <img
            className="footerIcons"
            src={instagramIcon}
            alt="instagram icon"
          />
        </a>
        <a href="https://www.tiktok.com/@shieldnsheath">
          {" "}
          <img className="footerIcons" src={tiktokIcon} alt="tiktok icon" />
        </a>
        <br />
        ©2022 Shield N Sheath
        <br />
        <img id="footerImage" src={IATFPic} alt="IATF Logo" />
        <br />
        <a style={{textDecoration:"underline"}} href="http://www.sambosauce.com/">
          Software Developer
          <br />
          www.sambosauce.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
