import React from "react";
import "./Aboutus.css";
import about1 from "../../assets/page-image/about1.webp";
import about2 from "../../assets/page-image/about2.webp";
import about3 from "../../assets/page-image/about3.webp";
import about4 from "../../assets/page-image/about4.webp";
import about5 from "../../assets/page-image/about5.webp";
import about6 from "../../assets/page-image/about6.webp";
import Map from "../../components/home/Map";
import Team from "../../assets/page-image/about_team.webp";
import about_team2 from "../../assets/page-image/about_team2.webp";
import signature from "../../assets/page-image/signature_of_ceo.png";
import Tabs from "./Tabs";

function Aboutus() {
  return (
    <>
      <div className="about primarybg">
        <div className="about-right">
          <h2 className="about-right-heading">
            Leading Design Hub in Sri Lanka and UK
          </h2>
          <p className="about-right-p">
            Empowering Design and IT Solution Since 2014:Your Trusted Partner in
            Sri Lanka and the UK
          </p>
          <button className="about-right-btn secondarybg">
            <span>GET STARTED NOW</span>
          </button>
        </div>
        <div className="about-left">
          <div className="about-left-img">
            <img src={Team} alt="" height={500} />
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="about-us-left">
          <div className="aboutus-img">
            <img src={about_team2} alt="" height={550} />
          </div>
        </div>
        <div className="about-us-right">
          <h4 className="about-us-right-sub secondary">ABOUT US</h4>
          <h1 className="about-us-right-heading primary">
            We Strive for Your Remarkable Success
          </h1>
          <p className="about-us-right-p">
            We have a rare combination of branding, coding, and marketing
            expertise which gives us the capabilities of building some tough and
            personalized for our clients. Our team is equipped with all leading
            technologies and platforms so that we can provide the most unique
            skills.{" "}
          </p>

          <div>
            <Tabs />
          </div>
          <div className="signature_of_ceo">
            <img src={signature} alt="" height={10} />
          </div>
        </div>
      </div>

      <div className="about-memories primarybg">
        <div className="about-memories-head">
          <div className="about-memories-left">
            <h4 className="about-memories-left-sub secondary">Memories</h4>
            <h3 className="about-memories-left-heading">
              Infonits Team: Our Greatest Asset.
            </h3>
          </div>
          <div className="about-memories-right">
            <p className="about-p">
              We offer innovative solutions to help companies reach their full
              potential. We offer specialized solutions to boost sales, improve
              leads, and turn your company into a dominant force in its sector.
            </p>
          </div>
        </div>
        <div className="about-memories-bottom">
          <div className="about-memo-img">
            <img src={about1} width={380} />
            <img src={about2} width={380} />
            <img src={about3} width={380} />
          </div>
          <div className="about-memo-img">
            <img src={about4} width={380} />
            <img src={about5} width={380} />
            <img src={about6} width={380} />
          </div>
        </div>
      </div>
      <Map />
    </>
  );
}

export default Aboutus;
