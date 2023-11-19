import React from "react";
import "./LetsTalk.css";
import srilanka from "../../assets/page-image/srilanka.webp";
import london from "../../assets/page-image/london.webp";

function LetsTalk() {
  return (
    <>
      <div className="contact">
        <div className="contact-right">
          <h3 className="contact-right-sub">Contact Us</h3>
          <h1 className="contact-right-heading">
            Feel Free to Contact Us for Any Consult Reason
          </h1>
          <p className="contact-right-p">
            It is incredibly easy. Simply complete the contact form, and will
            contact you.You can get in touch with us here if you're interested
            in partnership, developments, etc.
          </p>
          <div className="contact-right-social-icons">
            <i className="fa fa-facebook fb" />
            <i className="fa fa-instagram insta" />
            <i className="fa fa-twitter twitt" />
            <i className="fa fa-youtube yt" />
          </div>
        </div>
        <div className="contact-left">
          <form>
            <div>
              <label>
                Name
                <br />
                <input type="text" name="name" id="form" placeholder="Name" />
              </label>
            </div>
            <div>
              <label>
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  id="form"
                  placeholder="Email"
                />
              </label>
            </div>
            <div>
              <label>
                Select Country
                <br />
                <select id="form">
                  <option value=""> India </option>
                  <option value=""> United Kingdom </option>
                  <option value=""> United State </option>
                  <option value=""> Japan </option>
                  <option value=""> Germany </option>
                  <option value=""> Singapore </option>
                  <option value=""> Canada </option>
                  <option value=""> Srilanka </option>
                  <option value=""> Others </option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Select Subject
                <br />
                <select id="form">
                  <option value=""> Graphic Design </option>
                  <option value=""> Web Development </option>
                  <option value=""> Mobile App Development </option>
                  <option value=""> Digital Marketing </option>
                  <option value=""> Software Development </option>
                  <option value=""> Search Engine Optimization </option>
                  <option value=""> Others </option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Message
                <br />
                <textarea name="message" id="mssg" placeholder="Message" />{" "}
              </label>
            </div>

            <button className="contact-submit-btn secondarybg" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="contact-card-whole">
        <div className="contact-countries">
          <div className="contact-country">
            <img src={srilanka} alt="" height={40} />
            <h2 className="contact-country-title">Sri Lanka</h2>
            <div className="contact-cards">
              <div className="contact-card-box">
                <div className="layer"></div>
                <div className="contact-card">
                  <div>
                    <i className="fa fa-map" />
                  </div>
                  <div className="contact-card-information">
                    <p className="contact-card-title">Location:</p>
                    <p className="contact-card-info">
                      {" "}
                      1st Lane Arasady Road, Nallur, Jaffna, Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="layer"></div>
                <div className="contact-card">
                  <div>
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="contact-card-information">
                    <p className="contact-card-title">Mail:</p>
                    <p className="contact-card-info">support@infonits.io</p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="layer"></div>
                <div className="contact-card">
                  <div>
                    <i className="fa fa-phone" />
                  </div>
                  <div className="contact-card-information">
                    <p className="contact-card-title">Call Us:</p>
                    <p className="contact-card-info">+94 77 607 9157</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-country">
            <img src={london} alt="" height={40} />
            <h2 className="contact-country-title">London</h2>
            <div className="contact-cards">
              <div className="contact-card-box">
                <div className="layer"></div>
                <div className="contact-card">
                  <div>
                    <i className="fa fa-map" />
                  </div>
                  <div className="contact-card-information">
                    <p className="contact-card-title">Location:</p>
                    <p className="contact-card-info">
                      63 Selan Gardens, Hayes, Middlesex, United Kingdom, UB4
                      0EB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="layer"></div>
                <div className="contact-card">
                  <div>
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="contact-card-information">
                    <p className="contact-card-title">Mail:</p>
                    <p className="contact-card-info">support@infonits.io</p>
                  </div>
                </div>
              </div>
              <div className="contact-card-box">
                <div className="layer"></div>
                <div className="contact-card">
                  <div>
                    <i className="fa fa-phone" />
                  </div>
                  <div className="contact-card-information">
                    <p className="contact-card-title">Call Us:</p>
                    <p className="contact-card-info">+44 7523232343</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsTalk;
