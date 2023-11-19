import React from "react";
import "./MobileApp.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import MH1 from "../../assets/page-image/MH1.webp";
import mobile from "../../assets/page-image/mobile.webp";
import mobile_anqular from "../../assets/page-image/ma.webp";
import reactjs from "../../assets/page-image/reactjs.webp";
import o from "../../assets/page-image/o.webp";
import boxx from "../../assets/page-image/boxx.webp";
import f from "../../assets/page-image/f.webp";
import flutter from "../../assets/page-image/flutter.webp";

function MobileApp() {
  return (
    <>
      <section className="mobile-dev">
        <div className="mobile">
          <div className="mobile-header  primarybg">
            <div className="mobile-header-left">
              <h3 className="mobile-header-sub">Kooky | Jubilant</h3>
              <h2 className="mobile-header-heading secondary">
                app development
              </h2>
              <p className="mobile-header-p">
                Advancements that will distinguish you!
              </p>
              <button className="mobile-header-btn secondarybg">
                GET A QUOTE &nbsp;
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="mobile-header-right">
              <img src={MH1} className="mobile-image1" alt="mobile-image1" />
            </div>
          </div>
          <div className="mobile-header-part2">
            <h2 className="mobile-header-part2-heading primary">
              Will you indeed require expert help with a mobile app?
            </h2>
            <p className="mobile-header-part2-p">
              We're here to provide you with specialized development methods to
              assist you in creating your mobile applications. You can pick from
              a range of services we provide for developing mobile applications.
              We encourage you to look over our offerings if you are interested.
            </p>
            <div>
              <div className="mobile-header-part2-btns">
                <button className="mobile-header-part2-btn">IOS App</button>
                <button className="mobile-header-part2-btn">Android App</button>
              </div>
            </div>
          </div>
          <div className="mobile-lets-all-banner primarybg">
            <div>
              <h2 className="mobile-lets-all-banner-h2">
                Let's all get your business swooping like an eagle?
              </h2>
            </div>
            <div>
              <button className="mobile-lets-all-banner-btn secondarybg">
                Request a call back <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="mobile-findout-more">
            <div className="mobile-findout-more-left">
              <img
                src={mobile}
                className="mobile-findout-more-left-image"
                alt="mobile"
                height={400}
              />
            </div>
            <div className="mobile-findout-more-right">
              <text className="mobile-findout-more-right-sub secondary">
                FINDOUT MORE
              </text>
              <h2 className="mobile-findout-more-right-heading primary">
                Why would you select Infonits' mobile app development services?
              </h2>
              <p className="mobile-findout-more-right-p">
                Maximize your target users...
                <br />
                Don't worry, we are here to assist you with any prominent
                developments!
              </p>
              <div className="mobile-findout-more-right-li">
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Customized services
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Convenient Customer Experience Proven App Development
                  Process
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Maintain Your Relevance in the Digital Age
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Obtain Lower Operating Costs
                </li>
              </div>
              <button className="mobile-findout-more-right-btn primary">
                Our Works <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="mobile-cards">
            <h2 className="mobile-cards-banner">form of execution</h2>
            <p className="mobile-cards-heading primary">
              Let's deploy our tactics to elevate your brand.
            </p>
            <div className="mobile-main">
              <div className="mobile-card">
                <div className="mobile-border-card-round">
                  <div className="mobile-card-round">
                    <i className="fa fa-file" />
                  </div>
                </div>
                <div>
                  <h2 className="mobile-border-card-h2">Idea Creation</h2>
                  <p className="mobile-border-card-p">
                    Your idea and minimum viable product (MVP) should be
                    specified.
                  </p>
                </div>
              </div>
              <div className="mobile-card">
                <div className="mobile-border-card-round">
                  <div className="mobile-card-round">
                    <i className="fa fa-book" />
                  </div>
                </div>
                <div>
                  <h2 className="mobile-border-card-h2">Sketch & Wireframe</h2>
                  <p className="mobile-border-card-p">
                    To ensure that everyone involved understands the app's
                    fundamental idea and Make a detailed illustration of the
                    app's appearance.
                  </p>
                </div>
              </div>
              <div className="mobile-card">
                <div className="mobile-border-card-round">
                  <div className="mobile-card-round">
                    <i className="fa fa-code" />
                  </div>
                </div>
                <div>
                  <h2 className="mobile-border-card-h2">Develop & Test</h2>
                  <p className="mobile-border-card-p">
                    Created the application's code nd offered to test it for
                    flows.
                  </p>
                </div>
              </div>
              <div className="mobile-card">
                <div className="mobile-border-card-round">
                  <div className="mobile-card-round">
                    <i className="fa fa-comment" />
                  </div>
                </div>
                <div>
                  <h2 className="mobile-border-card-h2">Launch</h2>
                  <p className="mobile-border-card-p">
                    Launch the application after testing is complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-mastery-tools">
            <div className="mobile-mastery-tool-up">
              <h2 className="mobile-mastery-tool-sub">mastery tools</h2>
              <h1 className="mobile-mastery-tool-heading primary">
                Exhibit of our proficiency tools
              </h1>
              <p className="mobile-mastery-tool-p">
                Using these specialist resources and our own creative ideas, we
                are developing the entire mobile app development.
              </p>
            </div>
            <div className="mobile-mastery-tool-bottom">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={4}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={false}
                navigation={false}
                slidesPerView={6}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={reactjs}
                      alt="reactjs"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={mobile_anqular}
                      alt="mobile-anqular"
                      className="mobile-mastery-tool-logos"
                      height={75}
                      style={{ borderRadius: 15 }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={boxx}
                      alt="boxx"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={o}
                      alt="o"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={f}
                      alt="f"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={flutter}
                      alt="flutter"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={reactjs}
                      alt="reactjs"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={mobile_anqular}
                      alt="mobile-anqular"
                      className="mobile-mastery-tool-logos"
                      height={75}
                      style={{ borderRadius: 15 }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={boxx}
                      alt="boxx"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={o}
                      alt="o"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={f}
                      alt="f"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-tools-logo">
                    <img
                      src={flutter}
                      alt="flutter"
                      className="mobile-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileApp;
