import React from "react";
import "../styles/companies.css";
import company1 from "../../assets/images/c1.png";
import company2 from "../../assets/images/c2.png";
import company3 from "../../assets/images/c3.png";
import company4 from "../../assets/images/c4.webp";
import company5 from "../../assets/images/c5.webp";
import company6 from "../../assets/images/c6.webp";
import company7 from "../../assets/images/c7.png";
import company8 from "../../assets/images/c8.webp";

function Companies() {
  return (
    <div className="company">
      <div className="c-imgs">
        <img src={company1} alt="company stanic soft" />
        <img src={company2} alt="company fort corner" />
        <img src={company3} alt="company hi2world" />
        <img src={company4} alt="company yarlsfo" />
        <img src={company5} alt="company jaffna drafting" />
        <img src={company6} alt="company crystal ice" />
        <img src={company7} alt="company kuduko" />
        <img src={company8} alt="company learnhut" />
      </div>
    </div>
  );
}

export default Companies;
