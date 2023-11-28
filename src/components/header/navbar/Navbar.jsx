import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import WhatDropdown from "../dropDown/What-Dropdown";
import WhoDropdown from "../dropDown/Who-Dropdown";
import MoreDropdown from "../dropDown/More-Dropdown";
import Logo from "../../../assets/images/logo.webp";

function Navbar() {
  const [click, setClick] = useState(false);
  const [whatDrop, setWhatDropdown] = useState(false);
  const [whoDrop, setWhoDropdown] = useState(false);
  const [moreDrop, setMoreDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*--What We Do--*/
  const onMouseEnter_what = () => {
    if (window.innerWidth < 960) {
      setWhatDropdown(false);
    } else {
      setWhatDropdown(true);
    }
  };

  const onMouseLeave_what = () => {
    if (window.innerWidth < 960) {
      setWhatDropdown(false);
    } else {
      setWhatDropdown(false);
    }
  };
  /*--Who We Are--*/
  const onMouseEnter_who = () => {
    if (window.innerWidth < 960) {
      setWhoDropdown(false);
    } else {
      setWhoDropdown(true);
    }
  };

  const onMouseLeave_who = () => {
    if (window.innerWidth < 960) {
      setWhoDropdown(false);
    } else {
      setWhoDropdown(false);
    }
  };
  /*--More--*/
  const onMouseEnter_more = () => {
    if (window.innerWidth < 960) {
      setMoreDropdown(false);
    } else {
      setMoreDropdown(true);
    }
  };
  const onMouseLeave_more = () => {
    if (window.innerWidth < 960) {
      setMoreDropdown(false);
    } else {
      setMoreDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Logo" height={60} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter_what}
            onMouseLeave={onMouseLeave_what}
          >
            <Link
              to="/services/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              What We Do <i className="fa fa-caret-down" />
            </Link>
            {whatDrop && <WhatDropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter_who}
            onMouseLeave={onMouseLeave_who}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Who We Are <i className="fa fa-caret-down" />
            </Link>
            {whoDrop && <WhoDropdown />}
          </li>
          <li className="nav-item">
            <Link to="/our-works/" className="nav-links" onClick={handleClick}>
              Our Works
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter_more}
            onMouseLeave={onMouseLeave_more}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              More <i className="fa fa-caret-down" />
            </Link>
            {moreDrop && <MoreDropdown />}
          </li>
          <li className="nav-item">
            <Link to="/lets-talk/" className="nav-links" onClick={handleClick}>
              <button className="nav-links-talk">
                <i className="fa fa-share" /> &nbsp; LET'S TALK !
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
