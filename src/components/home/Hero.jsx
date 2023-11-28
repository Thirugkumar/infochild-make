import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/images/bro.webp";
import "../styles/hero.css";
import CountUp from "react-countup";
import bgbg from "../../assets/images/hero-bg.png";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="bgbgbg">
          <img src={bgbg} alt="" className="bgbg" />
        </div>
        <div className="hero">
          <div className="hero-left">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="hero-heading primary"
            >
              Empowering Your Digital Vision With{" "}
              <span style={{ color: "#ff6600" }}>infonits.</span>
            </motion.h1>
            <p className="hero-p">
              We deliver Branding and IT solution,
              <br /> propelling your success to new heights.
            </p>
            <div>
              <button className="hero-btn primarybg">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src={img} alt="img" className="hero-img" />
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span>
              <CountUp start={1} end={9} duration={4} />
              <span>&nbsp;+</span>
            </span>
            <span className="stat-text"> YEARS OF EXPERIENCE</span>
          </div>
          <div className="stat">
            <span>
              <CountUp start={600} end={850} duration={4} />
              <span>&nbsp;+</span>
            </span>
            <span className="stat-text">TRUSTED CLIENTS</span>
          </div>
          <div className="stat">
            <span>
              <CountUp start={700} end={950} duration={4} />
              <span>&nbsp;+</span>
            </span>
            <span className="stat-text">PROJECT COMPLETED</span>
          </div>
          <div className="stat">
            <span>
              <CountUp start={90} end={190} duration={4} />
              <span>&nbsp;+</span>
            </span>
            <span className="stat-text">BRANDS CREATED</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
