import React from "react";
import "../styles/what.css";
import card1 from "../../assets/images/pc.png";
import card2 from "../../assets/images/mobile.png";
import card3 from "../../assets/images/paint.png";

function What() {
  return (
    <div className="whatWeDo primarybg">
      <div className="wt-subtitles secondary">
        <h4>
          <span>What We Do! -</span>
        </h4>
      </div>
      <section className="wt-info">
        <div className="wt-heading">
          <p>Our Inspiring & Innovative Services</p>
        </div>
        <div className="wt-text">
          <p>
            Unlock endless potential with our innovative IT solutions and
            user-centric design. Elevate your success with Infonits'
            cutting-edge technology and global perspective.
          </p>
        </div>
      </section>

      {/*card*/}
      <div className="wt-cards">
        <div className="card-box">
          <div className="layer secondarybg"></div>
          <div className="wt-card">
            <h1 className="title">Web Application Development</h1>
            <div className="w-image">
              <img src={card1} height={100} />
            </div>
            <p className="subt">
              Our Professinal web app developers design custom web application
            </p>
          </div>
        </div>
        <div className="card-box">
          <div className="layer secondarybg"></div>
          <div className="wt-card">
            <h1 className="title">Mobile App Development</h1>
            <div className="w-image">
              {" "}
              <img src={card2} height={100} />
            </div>
            <p className="subt">
              Our qualified mobile app developers make customized mobille Apps
            </p>
          </div>
        </div>
        <div className="card-box">
          <div className="layer secondarybg"></div>
          <div className="wt-card">
            <h1 className="title">Graphic Designing Work</h1>
            <div className="w-image">
              <img src={card3} height={100} />
            </div>
            <p className="subt">
              We provide the ideal graphic design services for your Business
            </p>
          </div>
        </div>
        <div className="card-box orange">
          <div className="wt-card">
            <button className="wt-card-btn">
              Read More &nbsp; <i class="fa fa-arrow-right" />
            </button>
            <p className="mssg">Explore Our Services</p>
          </div>
        </div>
      </div>
      {/* --this "for-tap" button only available for Tap and Mobile view-- */}
      <button className="for-tap">
        Explore more &nbsp;
        <i className="fa fa-arrow-right" />
      </button>
    </div>
  );
}

export default What;
