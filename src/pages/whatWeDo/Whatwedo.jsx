import React from "react";
import "./Whatwedo.css";
import W_background from "../../assets/page-image/WWb.webp";
import W_images1 from "../../assets/page-image/WW1.webp";
import W_images2 from "../../assets/page-image/WW2.webp";
import W_images3 from "../../assets/page-image/WW3.webp";
import W_images4 from "../../assets/page-image/WW4.webp";
import W_images5 from "../../assets/page-image/WW5.webp";
import W_images6 from "../../assets/page-image/WW6.webp";
import Companies from "../../components/home/Companies";

export default function Whatwedo({ children, text, ...rest }) {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const [show5, setShow5] = React.useState(false);
  const [show6, setShow6] = React.useState(false);
  return (
    <>
      <div className="what-we-do">
        <div>
          <img className="WWb" src={W_background} alt="WWb" />
        </div>
        <div className="what-we-do-flex">
          <div className="what-we-do-imgs">
            <div className="extraa">
              <div
                className="tooltip tooltip-WW1"
                style={show1 ? { visibility: "visible" } : {}}
              >
                <h3>Digital Marketing</h3>
                <p>
                  We're here to assist with creating marketing initiatives and
                  sales plans to increase business earnings. We provide a range
                  of marketing services from which you can pick.
                </p>
                <span className="tooltip-arrow" />
              </div>
              <span
                onMouseEnter={() => setShow1(true)}
                onMouseLeave={() => setShow1(false)}
              >
                <img className="WW1" src={W_images1} alt="WW1" height={400} />
              </span>
            </div>
            <div className="extraa">
              <div
                className="tooltip tooltip-WW2"
                style={show2 ? { visibility: "visible" } : {}}
              >
                <h3>Search Engine Optimization</h3>
                <p>
                  We are experts at resolving problems with your website's
                  ranking that will produce safe, long- lasting outcomes. Having
                  trouble achieving the SEO ranking you were promised? paying
                  for useless SEO services? We want to assist you in overcoming
                  your challenges!
                </p>
                <span className="tooltip-arrow" />
              </div>
              <span
                onMouseEnter={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
              >
                <img className="WW2" src={W_images2} alt="WW2" height={400} />
              </span>
            </div>
            <div className="extraa">
              <div
                className="tooltip tooltip-WW3"
                style={show3 ? { visibility: "visible" } : {}}
              >
                <h3>Graphic Design</h3>
                <p>
                  We're here to inspire new designs that will boost your brand.
                  You can receive any kind of graphic design services from us.
                  Designs are easy to understand but difficult to do.. Don't
                  Worry we are here to help you with outstanding designs!
                </p>
                <span className="tooltip-arrow tooltip-arrow-right" />
              </div>
              <span
                onMouseEnter={() => setShow3(true)}
                onMouseLeave={() => setShow3(false)}
              >
                <img className="WW3" src={W_images3} alt="WW3" height={400} />
              </span>
            </div>
          </div>
          <div className="what-we-do-imgs2">
            <div className="extraa">
              <section
                className="tooltip tooltip-WW4"
                style={show4 ? { visibility: "visible" } : {}}
              >
                <h3>Web Development</h3>
                <p>
                  We're here to help you build your brand by offering innovative
                  site designs. We offer a variety of web design services that
                  you may choose from. Interested applicants are welcome to
                  explore our offerings.
                </p>
                <span className="tooltip-arrow" />
              </section>
              <span
                onMouseEnter={() => setShow4(true)}
                onMouseLeave={() => setShow4(false)}
              >
                <img className="WW4" src={W_images4} alt="WW4" height={300} />
              </span>
            </div>
            <div className="extraa">
              <div
                className="tooltip tooltip-WW5"
                style={show5 ? { visibility: "visible" } : {}}
              >
                <h3>Mobile Application Development</h3>
                <p>
                  We're here to provide you with specialized development methods
                  to assist you in creating your mobile applications. You can
                  pick from a range of services we provide for developing mobile
                  applications. We encourage you to look over our offerings if
                  you are interested.
                </p>
                <span className="tooltip-arrow" />
              </div>
              <span
                onMouseEnter={() => setShow5(true)}
                onMouseLeave={() => setShow5(false)}
              >
                <img className="WW5" src={W_images5} alt="WW5" height={340} />
              </span>
            </div>
            <div className="extraa">
              <div
                className="tooltip tooltip-WW6"
                style={show6 ? { visibility: "visible" } : {}}
              >
                <h3>Software Development</h3>
                <p>
                  We're here to help you come up with creative solutions that
                  will boost your productivity. You can choose from a variety of
                  software development services we offer. It can be difficult to
                  assess your demand for unique software. Don't worry, our
                  outstanding services are guaranteed to help you.
                </p>
                <span className="tooltip-arrow tooltip-arrow-right" />
              </div>
              <span
                onMouseEnter={() => setShow6(true)}
                onMouseLeave={() => setShow6(false)}
              >
                <img className="WW6" src={W_images6} alt="WW6" height={300} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Companies />
    </>
  );
}
