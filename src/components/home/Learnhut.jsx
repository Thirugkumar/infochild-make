import React from "react";
import "../styles/learnhut.css";
import l_image from "../../assets/images/learn-logo.png";
import right_image from "../../assets/images/learn.png";

function Learnhut() {
  return (
    <div className="learnhut" style={{ display: "flex" }}>
      <div className="learn-left">
        <div className="l-logo">
          <img src={l_image} alt="logo-for-learnhut" height={80} />
        </div>
        <div className="l-info">
          <h1 className="l-heading" style={{ color: "rgb(0,0,0,0.8" }}>
            Your Gateway to{" "}
            <span style={{ color: "blue" }}>Future success.</span>
          </h1>
          <p className="learn-p">
            Launch. Pivot, or Elevate Your Career with a Rich Array of Courses
            and Professinal Certifications offered by LearnHut Institute.
          </p>
          <button className="l-btn">View More</button>
        </div>
      </div>
      <div className="learn-right">
        <div className="l-pic">
          <img src={right_image} alt="pic for learnhut" height={450} />
        </div>
      </div>
    </div>
  );
}

export default Learnhut;
