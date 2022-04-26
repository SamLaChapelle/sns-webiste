import React from "react";
import facebookIcon from "../assets/icons8-facebook-48.png";
import instagramIcon from "../assets/icons8-instagram-48.png";
import tiktokIcon from "../assets/icons8-tiktok-48.png";
import merchShirtPic1 from "../assets/IMG_2663.png";
import merchShirtPic2 from "../assets/IMG_2665.png";
import merchHoodiePic from "../assets/IMG_2667.png";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

function MerchGCSocials() {
  return (
    <div id="MGS">
      <h3 className="MGSTitles">MERCH</h3>
      <div id="merchMGS">
        <img
          className="merchPics"
          src={merchShirtPic1}
          alt="Shield N Sheath Michael Myers T-Shirt"
        />
        <img
          className="merchPics"
          src={merchShirtPic2}
          alt="Shield N Sheath T-Shirt"
        />
        <img
          className="merchPics"
          src={merchHoodiePic}
          alt="Shield N Sheath Hoodie"
        />
        <p id="giftCardsMSG">
          <b>
            <u>GIFT CARDS</u>
          </b>
          <br />
          <a href="https://squareup.com/gift/MLD2V2AT7B0VT/order">
            {" "}
            <CardGiftcardIcon id="giftCardIcon" />
          </a>
        </p>
      </div>
      <h3 className="MGSTitles" id="socialTitle" >SOCIALS</h3>
      <div id="socialsMGS">
        <a href="https://www.facebook.com/Shield-n-Sheath-Hatchet-House-104652208097116">
          {" "}
          <img className="socialIcons" src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/shieldnsheath/">
          {" "}
          <img
            className="socialIcons"
            src={instagramIcon}
            alt="instagram icon"
          />
        </a>
        <a href="https://www.tiktok.com/@shieldnsheath">
          {" "}
          <img className="socialIcons" src={tiktokIcon} alt="tiktok icon" />
        </a>
      </div>
    </div>
  );
}

export default MerchGCSocials;
