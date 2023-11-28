import React from "react";
import "./OurWorks.css";
import our_map1 from "../../assets/page-image/our_map.png";
import OurWorkGallery from "./OurWorkGallery";

export default function Ourworks() {
  return (
    <>
      <div className="our-works">
        <div className="our-works-head primarybg">
          <h2 className="our-works-head-heading">
            We help our clients expand and increase their profits by offering
            high-quality, affoedable services
          </h2>
          <img
            src={our_map1}
            alt=""
            height={450}
            className="our-works-head-map-img1"
          />
          <img
            src={our_map1}
            alt=""
            height={450}
            className="our-works-head-map-img2"
          />
        </div>
        <OurWorkGallery />
      </div>
    </>
  );
}
