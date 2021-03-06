import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";


function About() {
  return (
    <div id="About">
      <h3 id="mainTitle">Shield N Sheath</h3>
      <div id="aboutSection">
        {" "}
        <img
          id="aboutPic"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700930/shieldnsheath%20assets/IMG_2656_bcmkwk.png"
          alt="axe throwing lanes with targets"
        ></img>
        <p className="aboutInfo" id="aboutInfoMain">
          Shield N Sheath Hatchet House was established in 2021 and is female
          owned. Perfect for family, friends and corporate events. Book today to
          have a fun and unique experience throwing not only axes but ninja
          stars, knives, throwing cards and the one and only batarang! <br />
        </p>{" "}
        <p className="aboutInfo" id="aboutHours">
          <b>
            <u>Hours Of Operation:</u>
          </b>
          <br />
          Mon: Closed
          <br />
          Tues - Thurs: 3:00 - 9:30pm
          <br />
          Fri: 3:00 - 10:00pm
          <br />
          Sat: 12:00 - 10pm
          <br />
          Sun: 12:00 - 8pm
        </p>
        <p className="aboutInfo" id="aboutLoc">
          <b>
            <u>Location & Contact:</u>
          </b>
          <br />
          1511 Altamont Ave Richmond, VA 23230
          <br />
          <a href="tel: 1-833-293-5263">
            <CallIcon className="contactIcons" />
            833-AXE-LANE
          </a>
          <br />
          <a href="mailto:info@shieldnsheath.com">
            <EmailIcon className="contactIcons" />
            info@shieldnsheath.com
          </a>
        </p>{" "}
        <img
          className="aboutPic2"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700916/shieldnsheath%20assets/IMG_2643_eunsof.png"
          alt="ninja star, throwing cards, knives and batarang laying on wooden table"
        ></img>{" "}
        <img
          className="aboutPic2"
          src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651700918/shieldnsheath%20assets/IMG_2646_abteye.png"
          alt="three axes laying on wooden table"
        ></img>
      </div>
    </div>
  );
}

export default About;
