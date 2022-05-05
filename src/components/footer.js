import React from "react";

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
          <img
            className="footerIcons"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-facebook-48_qx4zqw.png"
            alt="facebook icon"
          />
        </a>
        <a href="https://www.instagram.com/shieldnsheath/">
          {" "}
          <img
            className="footerIcons"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-instagram-48_bhu8wy.png"
            alt="instagram icon"
          />
        </a>
        <a href="https://www.tiktok.com/@shieldnsheath">
          {" "}
          <img
            className="footerIcons"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-tiktok-48_zdtup5.png"
            alt="tiktok icon"
          />
        </a>
        <br />
        ©2022 Shield N Sheath
        <br />
        <img
          id="footerImage"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698773/shieldnsheath%20assets/IATF_Trophy_Image_wkcvqm.png"
          alt="IATF Logo"
        />
        <br />
        <a
          style={{ textDecoration: "underline" }}
          href="http://www.sambosauce.com/"
        >
          Software Developer
          <br />
          www.sambosauce.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
