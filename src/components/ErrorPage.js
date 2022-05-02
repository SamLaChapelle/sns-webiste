import React from "react";
import snsLogo from "../assets/Shield n Sheath Logo white (1).svg";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

function ErrorPage() {
  return (
    <div id="errorPage">
      <img id="snsErrorLogo" src={snsLogo} alt="Shield N Sheath Logo" />
      <h1 id="errorTitle">404 ERROR</h1>
      <p className="errorInfo">
        Shield N Sheath is currently experiencing technical issues. <br />{" "}
        Please refer to the links below to reserve a time or fill out the
        waiver. <br /> Sorry for the inconvenience.
      </p>
      <div id="errorLinks">
        <a href="https://www.vantora.com/e/sns/waiver/default.asp?ev=361753704">
          <DocumentScannerIcon className="errorIcons" />
          <p className="errorInfo">
            <b>Waiver</b>
          </p>
        </a>
        <a href="https://vantora.com/e/sns/">
          <BookOnlineIcon className="errorIcons" />
          <p className="errorInfo">
            <b>Book Now</b>
          </p>
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
