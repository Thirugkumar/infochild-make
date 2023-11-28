import React from "react";
import "../styles/casestudies.css";
import caseimg_1 from "../../assets/images/case-1.webp";
import caseimg_2 from "../../assets/images/case-2.webp";
import caseimg_3 from "../../assets/images/case-3.webp";
import caseimg_4 from "../../assets/images/case-4.webp";

function Casestudies() {
  return (
    <div className="casestudies">
      <div className="subtitle secondary">
        <h4 className="case-sub-h4">
          <span>Our Case Studies -</span>
        </h4>
      </div>

      <div className="case">
        <h2 className="case-left primary">
          We've Excelled in Impressive Projects.
        </h2>
        <p className="case-right">
          With our extensive experience across diverse fields, we provide
          excellent solutions that come with user-friendly interfaces. Our
          services encompass expert and responsive IT solutions, as well as
          graphic design services, catering to clients worldwide.
        </p>
      </div>
      <div className="cards">
        <div className="c-image">
          <div className="case-card">
            <img
              src={caseimg_1}
              alt="case-1"
              height={350}
              width={250}
              className="case-card-img"
            />
            <div className="c-info">
              <p className="info">
                Membership <br /> Portal for <br />
                JHC
              </p>
              <h4 className="info-title">Case Studies</h4>
              <button className="c-btn">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="case-card">
            <img
              src={caseimg_2}
              alt="case-2"
              height={350}
              width={250}
              className="case-card-img"
            />
            <div className="c-info">
              <p className="info">
                Mobiles <br />
                System &
                <br />
                Website
              </p>
              <h4 className="info-title">Case Studies</h4>
              <button className="c-btn">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="case-card">
            <img
              src={caseimg_3}
              alt="case-3"
              height={350}
              width={250}
              className="case-card-img"
            />
            <div className="c-info">
              <p className="info">
                Student <br /> Management <br />
                System
              </p>
              <h4 className="info-title">Case Studies</h4>
              <button className="c-btn">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="case-card">
            <img
              src={caseimg_4}
              alt="case-4"
              height={350}
              width={250}
              className="case-card-img"
            />
            <div className="c-info">
              <p className="info">
                Invoice
                <br />
                Management <br />
                System
              </p>
              <h4 className="info-title">Case Studies</h4>
              <button className="c-btn">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casestudies;
