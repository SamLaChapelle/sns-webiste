import React from "react";

function CorpEvents() {
  return (
    <div id="Corp">
      <h3 id="corpTitle">CORPORATE EVENTS & TEAM BUILDING</h3>
      <p id="corpInfo">
        Our corporate and large group team-building axe throwing activities are
        always 2 hours in duration - enough time to have an amazingly fun time
        but not so long that your party gets bored. During this time, you have a
        dedicated axe throwing coach (or several coaches for larger groups) who
        walk you through the rules, safety and of course- how to throw an axe.{" "}
        <br /> We make your corporate event completely stress free. If you have
        any special requests or would like any more information, please don’t
        hesitate to contact us. The most popular times for corporate events are
        during the week, but if you’d like to book on a weekend, please let us
        know as soon as possible as times do fill up fast!
      </p>{" "}
      <p id="faqTitle">
        <b>
          <u>Frequently Asked Questions</u>
        </b>
      </p>
      <div id="corpQs">
        <br />
        <b>
          <p className="faqQTitles">Do you offer food options?</p>
        </b>{" "}
        Yes, we offer full service large group food options
        <br />
        <b>
          <p className="faqQTitles">Do you service alcohol?</p>
        </b>{" "}
        Yes, we offer a large range of beers, ciders and canned cocktails
        <br />
        <b>
          <p className="faqQTitles">What is your capacity?</p>
        </b>{" "}
        We can host very large groups using our indoor and outdoor seating. Give
        us a shout we are sure we can accommodate!
        <br />
        <br />{" "}
        <p id="corpContact">
          {" "}
          <a href="mailto:info@shieldnsheath.com">info@shieldnsheath.com</a>
          <br />
          <a href="tel: 1-833-293-5263">833-AXE-LANE</a>
        </p>
      </div>
    </div>
  );
}

export default CorpEvents;
