import React from "react";
import "../../pages/ourTeam/OurTeam.css";

import ourteam from "../../assets/page-image/ourteam.webp";
import ceo from "../../assets/page-image/ceo.webp";
import coo from "../../assets/page-image/coo.webp";
import cto from "../../assets/page-image/cto.webp";
import pm from "../../assets/page-image/pm.webp";
import qa from "../../assets/page-image/qa.webp";
import legal from "../../assets/page-image/legal.webp";
import senior_web from "../../assets/page-image/senior-web.webp";
import artist from "../../assets/page-image/artist.webp";
import video_editor from "../../assets/page-image/video-editor.webp";
import intern1 from "../../assets/page-image/intern1.webp";
import intern2 from "../../assets/page-image/intern2.webp";
import intern3 from "../../assets/page-image/intern3.webp";
import intern4 from "../../assets/page-image/intern4.webp";
import intern5 from "../../assets/page-image/intern5.webp";
import intern6 from "../../assets/page-image/intern6.webp";

import { motion } from "framer-motion";

function OurTeam() {
  return (
    <div className="our-team">
      <div className="team-profile">
        <img className="ourteamimg" src={ourteam} alt="" />
      </div>
      <div className="meet-head">
        <h4>EXPERT PEOPLE MATTER</h4>
        <h1 className="meet-head-heading primary">Meet Our Team</h1>
        <p>
          We have extensive expertise in both entrepreneurship and information
          technology and we use all of our craft the ideal solution for each
          client's requirements.
        </p>
      </div>
      <div className="team">
        <motion.div
          className="team-rows"
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="team-card">
            <img src={ceo} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">S.Chandramouleesan</h3>
              <h5 className="team-card-h5">FOUNDER & CEO</h5>
            </div>
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={coo} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">A.Yathupriyan</h3>
              <h5 className="team-card-h5">CHIEF OPERATING OFFICER</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={cto} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              {" "}
              <h3 className="team-card-h3">B.Sivabanu</h3>
              <h5 className="team-card-h5">CHIEF TECHNOLOGY OFFICER</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
        </motion.div>
        <motion.div
          className="team-rows"
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="team-card">
            <img src={pm} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">Arthika.A</h3>
              <h5 className="team-card-h5">PROJECT MANAGER</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={qa} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">Arthika.J</h3>
              <h5 className="team-card-h5">QA TESTER</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={senior_web} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">Janusha.B</h3>
              <h5 className="team-card-h5">SKETCH ARTIST</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
        </motion.div>
        <motion.div
          className="team-rows"
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="team-card">
            <img src={legal} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">RM Senthuran</h3>
              <h5 className="team-card-h5">SENIOR WEB DEVELOPER</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={artist} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">K.Riviharan</h3>
              <h5 className="team-card-h5">LEGAL ADVISOR</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={video_editor} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">P.Mithurshan</h3>
              <h5 className="team-card-h5">VIDEO EDITOR</h5>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
        </motion.div>
      </div>
      <div className="meet-head">
        <h4>EXPERT PEOPLE MATTER</h4>
        <h1 className="primary">Get to Know Our Interns</h1>
        <p>
          Meet our interns,passionate minds contributing fresh ideas, playing a
          vital role in our mission with innovative commitment to excellence.
        </p>
      </div>
      <motion.div
        className="team"
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <div className="team-rows">
          <div className="team-card">
            <img src={intern1} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">R. Adshayan</h3>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={intern2} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">A.Zaljey</h3>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={intern3} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">V.Abiramy</h3>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
        </div>
        <div className="team-rows">
          <div className="team-card">
            <img src={intern4} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">R.Vijitha</h3>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={intern5} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">S.Thirugkumar</h3>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
          <div className="team-card">
            <img src={intern6} alt="lap-img" className="team-card-imgs" />
            <div className="overlay">
              <div className="social-links">
                <i className="fa fa-facebook" />
                &nbsp; &nbsp;
                <i className="fa fa-linkedin" />
              </div>
            </div>
            <div className="name-card">
              <h3 className="team-card-h3">S. Thusithan</h3>
            </div>{" "}
            <i className="fa fa-clone card-icon" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurTeam;
