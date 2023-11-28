import React from "react";
import "../styles/map.css";
import maps from "../../assets/images/world.webp";
import indicator from "../../assets/images/map-icon.png";

function Map() {
  return (
    <div className="maps">
      <div className="map" style={{ position: "relative" }}>
        <div className="map-left">
          <img src={maps} alt="world map" />
        </div>
        <div className="small">
          <img
            src={indicator}
            alt="srilanka"
            className="indi sl"
            style={{ position: "absolute", top: 190, left: 388 }}
          />
          <img
            src={indicator}
            alt="usa"
            className="indi us"
            style={{ position: "absolute", top: 150, left: 100 }}
          />
          <img
            src={indicator}
            alt="canada"
            className="indi can"
            style={{ position: "absolute", top: 110, left: 70 }}
          />
          <img
            src={indicator}
            alt="aus"
            className="indi aus"
            style={{ position: "absolute", top: 240, left: 460 }}
          />
          <img
            src={indicator}
            alt="uk"
            className="indi uk"
            style={{ position: "absolute", top: 135, left: 280 }}
          />
          <img
            src={indicator}
            alt="swiss"
            className="indi swiss"
            style={{ position: "absolute", top: 100, left: 310 }}
          />
        </div>
      </div>
      <div className="map-right">
        <h4 className="map-subtitle secondary">
          <span>DEDICATED TO SERVING YOUR NEEDS -</span>
        </h4>
        <h2 className="map-title primary">We're All Over The World</h2>
        <p className="map-text">
          We proudly rank among the top IT-based firms in Sri Lanka and hold a
          renowned presence as a globally recognized brand in the UK, USA,
          Canada, and beyond
        </p>
        <button className="map-btn secondarybg">EXPLORE MORE</button>
      </div>
    </div>
  );
}

export default Map;
