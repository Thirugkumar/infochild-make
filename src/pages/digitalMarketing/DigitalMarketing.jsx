import React from "react";
import "./DigitalMarketing.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import DMH1 from "../../assets/page-image/DMH1.webp";
import digital from "../../assets/page-image/digital.webp";
import yt from "../../assets/page-image/yt.webp";
import insta from "../../assets/page-image/insta.webp";
import fb from "../../assets/page-image/fb.webp";
import tw from "../../assets/page-image/tw.webp";
import lin from "../../assets/page-image/lin.webp";

function DigitalMarketing() {
  return (
    <>
      <section className="digital-marketing">
        <div className="digital">
          <div className="digital-header  primarybg">
            <div className="digital-header-left">
              <h3 className="digital-header-sub">Touting | Gleam</h3>
              <h2 className="digital-header-heading secondary">
                Digital marketing
              </h2>
              <p className="digital-header-p">
                Get in touch with your audience!
              </p>
              <button className="digital-header-btn secondarybg">
                GET A QUOTE &nbsp;
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="digital-header-right">
              <img src={DMH1} className="digital-image1" alt="digital-image1" />
            </div>
          </div>
          <div className="digital-header-part2">
            <h2 className="digital-header-part2-heading primary">
              Do you need professional knowledge to work as a marketing
              assistant?
            </h2>
            <p className="digital-header-part2-p">
              We're here to assist with creating marketing initiatives and sales
              plans to increase business earnings. We provide a range of
              marketing services from which you can pick.
            </p>
            <div>
              <div className="digital-header-part2-btns">
                <button className="digital-header-part2-btn">
                  Advertisment
                </button>
                <button className="digital-header-part2-btn">
                  Email Marketing
                </button>
                <button className="digital-header-part2-btn">
                  Social Media Marketing
                </button>
              </div>
              <div className="digital-header-part2-btns">
                <button className="digital-header-part2-btn">SEO</button>
                <button className="digital-header-part2-btn">
                  Content Management
                </button>
                <button className="digital-header-part2-btn">E-Commerce</button>
              </div>
            </div>
          </div>
          <div className="digital-lets-all-banner primarybg">
            <div>
              <h2 className="digital-lets-all-banner-h2">
                Let's all get your business swooping like an eagle?
              </h2>
            </div>
            <div>
              <button className="digital-lets-all-banner-btn secondarybg">
                Request a call back <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="digital-findout-more">
            <div className="digital-findout-more-left">
              <img
                src={digital}
                className="digital-findout-more-left-image"
                alt="digital"
                height={500}
              />
            </div>
            <div className="digital-findout-more-right">
              <text className="digital-findout-more-right-sub secondary">
                FINDOUT MORE
              </text>
              <h2 className="digital-findout-more-right-heading primary">
                Why does Infonits offer services for digital marketing?
              </h2>
              <p className="digital-findout-more-right-p">
                Maximize your infer growth...
                <br />
                Don't worry, We are guaranteed to help you.
              </p>
              <div className="digital-findout-more-right-li">
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}increased user satisfaction
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Multiple approaches
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Effective global targeting
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Multiple types of content
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Affordable
                </li>
              </div>
              <button className="digital-findout-more-right-btn primary">
                Our Works <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="digital-cards">
            <h2 className="digital-cards-banner">form of execution</h2>
            <p className="digital-cards-heading primary">
              Let's leverage our tactics to elevate your reputation.
            </p>
            <div className="digital-main">
              <div className="digital-card">
                <div className="digital-border-card-round">
                  <div className="digital-card-round">
                    <i className="fa fa-file" />
                  </div>
                </div>
                <div>
                  <h2 className="digital-border-card-h2">
                    Environmental analysis
                  </h2>
                  <p className="digital-border-card-p">
                    Analyzing the existing state of the business, especially in
                    the digital area, is the first step in starting our
                    marketing plan. The three sorts of analysis that make up
                    this point are SWOT, internal, and external.
                  </p>
                </div>
              </div>
              <div className="digital-card">
                <div className="digital-border-card-round">
                  <div className="digital-card-round">
                    <i className="fa fa-book" />
                  </div>
                </div>
                <div>
                  <h2 className="digital-border-card-h2">Defining Goals</h2>
                  <p className="digital-border-card-p">
                    In the digital marketing the company's digital, financial,
                    and human resource status will have a significant impact on
                    the objectives.
                  </p>
                </div>
              </div>
              <div className="digital-card">
                <div className="digital-border-card-round">
                  <div className="digital-card-round">
                    <i className="fa fa-code" />
                  </div>
                </div>
                <div>
                  <h2 className="digital-border-card-h2">Action Strategy</h2>
                  <p className="digital-border-card-p">
                    The strategy for achieving these goals will be laid out.
                    Using techniques like SEO strategy, content strategy, social
                    media strategy, and others, we'll decide what has to be done
                    to achieve our objectives.
                  </p>
                </div>
              </div>
              <div className="digital-card">
                <div className="digital-border-card-round">
                  <div className="digital-card-round">
                    <i className="fa fa-comment" />
                  </div>
                </div>
                <div>
                  <h2 className="digital-border-card-h2">
                    Monitoring and Control
                  </h2>
                  <p className="digital-border-card-p">
                    The final step will be to design the course of action for
                    achieving these goals, as well as perform the monitoring and
                    controlling, in the digital marketing strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="digital-mastery-tools">
            <div className="digital-mastery-tool-up">
              <h2 className="digital-mastery-tool-sub">mastery tools</h2>
              <h1 className="digital-mastery-tool-heading primary">
                Exhibit of our proficiency tools
              </h1>
              <p className="digital-mastery-tool-p">
                Using these specialist technologies and our marketing tactics,
                we generated the appropriate promotional campaigns.
              </p>
            </div>
            <div className="digital-mastery-tool-bottom">
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
                  <div className="digital-tools-logo">
                    <img
                      src={yt}
                      alt="yt"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={insta}
                      alt="insta"
                      className="digital-mastery-tool-logos"
                      height={80}
                      style={{ borderRadius: 15 }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={fb}
                      alt="fb"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={tw}
                      alt="tw"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={lin}
                      alt="in"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={yt}
                      alt="yt"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={insta}
                      alt="insta"
                      className="digital-mastery-tool-logos"
                      height={80}
                      style={{ borderRadius: 15 }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={fb}
                      alt="fb"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={tw}
                      alt="tw"
                      className="digital-mastery-tool-logos"
                      height={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="digital-tools-logo">
                    <img
                      src={lin}
                      alt="in"
                      className="digital-mastery-tool-logos"
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
export default DigitalMarketing;
