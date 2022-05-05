import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

function MerchGCSocials() {
  return (
    <div id="MGS">
      <h3 className="MGSTitles">MERCH</h3>
      <p id="merchDisc">*Purchased In Store*</p>
      <div id="merchMGS">
        <img
          className="merchPics"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700926/shieldnsheath%20assets/IMG_2663_elbqmz.png"
          alt="Shield N Sheath Michael Myers T-Shirt"
        />
        <img
          className="merchPics"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700930/shieldnsheath%20assets/IMG_2665_aci5uk.png"
          alt="Shield N Sheath T-Shirt"
        />
        <img
          className="merchPics"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700931/shieldnsheath%20assets/IMG_2667_cyh6yp.png"
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
      <h3 className="MGSTitles" id="socialTitle">
        SOCIALS
      </h3>
      <div id="socialsMGS">
        <a href="https://www.facebook.com/Shield-n-Sheath-Hatchet-House-104652208097116">
          {" "}
          <img
            className="socialIcons"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-facebook-48_qx4zqw.png"
            alt="facebook icon"
          />
        </a>
        <a href="https://www.instagram.com/shieldnsheath/">
          {" "}
          <img
            className="socialIcons"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-instagram-48_bhu8wy.png"
            alt="instagram icon"
          />
        </a>
        <a href="https://www.tiktok.com/@shieldnsheath">
          {" "}
          <img
            className="socialIcons"
            src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698776/shieldnsheath%20assets/icons8-tiktok-48_zdtup5.png"
            alt="tiktok icon"
          />
        </a>
      </div>
    </div>
  );
}

export default MerchGCSocials;
