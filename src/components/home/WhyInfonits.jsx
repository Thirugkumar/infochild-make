import React from "react";
import "../styles/whyInfonits.css";
import Image from "../../assets/images/why.webp";
import settings from "../../assets/images/settings.png";
import man from "../../assets/images/man.png";

function WhyInfonits() {
  return (
    <div className="whyInfonits">
      <div className="w-left">
        <div className="sub">
          <span>WHY INFONITS ? -</span>
        </div>
        <h1 className="why-heading">
          We Help Our Clients to Achieve Their Goal
        </h1>
        <span>
          <p className="why-p">
            infonits is a leading IT company with end-to-end customized digital
            solutions&nbsp;
            <span className="since">&nbsp;since 2014.&nbsp;</span>
          </p>
        </span>
        <div className="lists">
          <div className="set">
            <img
              src={settings}
              height={70}
              className="list-img"
              alt="setting"
            />
            &nbsp;&nbsp;
            <div className="s-info">
              We team up closely with clients, understanding their goals and
              challenges. Our aim: custom solutions that drive them to success.
            </div>
          </div>
          <div className="man">
            <img src={man} height={70} className="list-img" alt="man" />{" "}
            &nbsp;&nbsp;
            <div className="s-info">
              We provide strong support, helping clients conquer challenges and
              achieve goals. Our commitment goes beyond services - we're success
              partners.
            </div>
          </div>
        </div>
      </div>
      <div className="w-right">
        <img src={Image} alt="why-pic" height={550} className="w-img" />
      </div>
    </div>
  );
}

export default WhyInfonits;
