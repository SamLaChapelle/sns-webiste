import React from "react";

function Leagues() {
  return (
    <div id="League">
      <img
        id="IATFPic"
        src="https://res.cloudinary.com/shield-n-sheath/image/upload/v1651698773/shieldnsheath%20assets/IATF_Trophy_Image_wkcvqm.png"
        alt="IATF Certification"
      />
      <h3 id="leagueTitle">LEAGUES</h3>
      <p id="leagueInfo">
        We welcome new as well as experienced axe & knife throwing athletes to
        partake in our Leagues that are offered at both of our locations. No
        experience needed! Learn new techniques, break bad habits, make awesome
        new friends, and slam those clutches!
        <br />
        <br />
        Our 8-week regular season consists of 7 consecutive weeks of playing
        matches and building your skillset. League nights typically run for
        2.5-3 hours per league session. There is an optional 30-minute practice
        time before each of them. Week 8 is a double elimination playoff
        following official International Axe Throwing Federation Rules.
      </p>
      <h4 id="leagueSubTitle">LEAGUE MEMBER BENEFITS</h4>
      <div id="leagueMemInfo">
        <ul>
          <li className="leagueList">
            2.5 hours of axe throwing per week (practice + matches)
          </li>
          <li className="leagueList">
            Complimentary U.K.A.T. Rules Knife League
          </li>
          <li className="leagueList">
            20% Off for your bookings and equipment purchases during league
            season
          </li>
          <li className="leagueList">
            Professional training and assistance from our expert coaches
          </li>
          <li className="leagueList">
            A chance to qualify for the International Axe Throwing Championship!
          </li>
        </ul>
      </div>
      <p id="leagueTimeInfo">
        <b>
          <u>Leagues Run On Tuesday Evenings</u>
        </b>
        <br />
        6:00 - 8:30pm / $199
      </p>
    </div>
  );
}

export default Leagues;
