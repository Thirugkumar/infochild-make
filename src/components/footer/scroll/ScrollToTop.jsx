import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        className="btn-scrollTop secondary"
        style={{ display: isVisible ? "block" : "none" }}
        onClick={goTop}
      >
        <FaArrowCircleUp />
      </button>
      <div>
        {" "}
        <a href="/lets-talk/" className="notification secondarybg">
          <span>
            <i className="fa fa-whatsapp" /> Reach us on Whatsapp
          </span>
          <span class="badge">1</span>
        </a>
      </div>
    </>
  );
};

export default ScrollToTop;
