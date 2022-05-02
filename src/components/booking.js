import React from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import targetPic from "../assets/icons8-accuracy-64.png";

function Booking() {
  return (
    <div id="Booking">
      <h3 id="bookingTitle">BOOKING DETAILS</h3>
      <p id="bookingSubTitle">
        <b>Reservation / Walk In : Per Person</b>
      </p>
      <div id="bookingSection">
        <div id="bookingInfoSec">
          <p className="bookingInfo">
            <b>
              <u>Pricing:</u>
            </b>
            <br />
            55min: $25
            <br />
            1hr 25min: $35
          </p>
          <p className="bookingInfo">
            <b>
              <u>Extras:</u>
            </b>
            <br />
            Ninja Pack: $5
            <br />
            Throwing Knives: $10
          </p>
          <p className="bookingInfo">
            <b>
              <u>Required:</u>
            </b>
            <br />
            Closed Toed Shoes
            <br />
            Waiver
          </p>
          <div id="bookingWaiver">
            <a href="https://www.vantora.com/e/sns/waiver/default.asp?ev=361753704">
              <DocumentScannerIcon className="bookingIcons" />
              <p className="bookingInfo">
                <b>Waiver</b>
              </p>
            </a>
          </div>
          <div>
          <img id="targetPic" src={targetPic} alt="cartoon target" />
          </div>
          <div id="bookingLink">
            <a href="https://vantora.com/e/sns/">
              <BookOnlineIcon className="bookingIcons" />
              <p className="bookingInfo">
                <b>Book Now</b>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
