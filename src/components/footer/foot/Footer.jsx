import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-sub secondarybg">
        <p className="footer-sub-heading">Brighten up your thoughts</p>
        <div className="footer-sub-text">
          <div className="sub-text-1st">HELP DESK 24h x 7</div>
          <div className="telephone">
            <i className="fa fa-phone" />
            &nbsp;+9477 607 9157
          </div>
        </div>
      </section>
      <div className="footer-links primarybg">
        <div className="footer-link">
          <h2 className="services">
            Services<hr></hr>
          </h2>

          <li>
            <a to="/">
              <i className="fa fa-paint-brush" /> Graphic Design
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-globe" /> Web Development
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-tablet" />
              &nbsp; Mobile Development
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-desktop" /> Digital Marketing
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-laptop" /> Software Development
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-search" /> Search Engine Optimization
            </a>
          </li>
        </div>
        <div className="footer-link">
          <h2 className="comp">
            Company<hr></hr>
          </h2>
          <li>
            <a to="/about-us">
              <i className="fa fa-user" /> &nbsp;About Us
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-briefcase" /> Our Works
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-copy" /> Blog
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-book" /> Our Story
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-list" /> FAQ
            </a>
          </li>
          <li>
            <a to="/">
              <i className="fa fa-signal" /> Careers
            </a>
          </li>
        </div>
        <div className="last-coloum">
          <h2 className="parag">Have some questions that need answer?</h2>
          <button className="footer-talk">
            LET'S TALK&nbsp;
            <i className="fa fa-arrow-right" />
          </button>
          <section className="social-media">
            <div className="social-box">
              <div className="social-layer">
                <a
                  href="https://web.facebook.com/infonitsIO?_rdc=1&_rdr"
                  target="_blank"
                >
                  <i className="fa fa-facebook" />
                </a>
              </div>
              <div className="social-icons">
                <li>
                  <i className="fa fa-facebook" />
                </li>
              </div>
            </div>
            <div className="social-box">
              <div className="social-layer">
                <a href="https://instagram.com/infonitsIO" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <div className="social-icons">
                <li>
                  <i className="fa fa-instagram" />
                </li>
              </div>
            </div>
            <div className="social-box">
              <div className="social-layer">
                <a href="https://mobile.twitter.com/infonitsIO" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </div>
              <div className="social-icons">
                <li>
                  <i className="fa fa-twitter" />
                </li>
              </div>
            </div>
            <div className="social-box">
              <div className="social-layer">
                <a href="https://youtube.com/infonitsIO" target="_blank">
                  <i className="fa fa-youtube" />
                </a>
              </div>
              <div className="social-icons">
                <li>
                  <i className="fa fa-youtube" />
                </li>
              </div>
            </div>
            <div className="social-box">
              <div className="social-layer">
                <a
                  href="https://www.linkedin.com/company/infonitsio/mycompany/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </div>
              <div className="social-icons">
                <li>
                  <i className="fa fa-linkedin" />
                </li>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bottom-part">
        <p>
          Copyright &copy; {new Date().getFullYear()} infonits, All Rights
          Reserved
        </p>
        <section>
          <div className="terms-privacy">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
