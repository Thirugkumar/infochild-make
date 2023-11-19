import React from "react";
import "./SearchEngine.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SEH1 from "../../assets/page-image/SEH1.webp";
import search from "../../assets/page-image/search.webp";
import searchtool2 from "../../assets/page-image/searchtool2.webp";
import searchtool1 from "../../assets/page-image/searchtool1.webp";
import searchtool4 from "../../assets/page-image/searchtool4.webp";
import searchtool3 from "../../assets/page-image/searchtool3.webp";
import searchtool5 from "../../assets/page-image/searchtool5.webp";

function SearchEngine() {
  return (
    <>
      <section className="search-engine">
        <div className="search">
          <div className="search-header  primarybg">
            <div className="search-header-left">
              <h3 className="search-header-sub">Profound | Authoritative</h3>
              <h2 className="search-header-heading secondary">
                Search Engine Optimization
              </h2>
              <p className="search-header-p">Let's publicize!</p>
              <button className="search-header-btn secondarybg">
                GET A QUOTE &nbsp;
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="search-header-right">
              <img src={SEH1} className="search-image1" alt="search-image1" />
            </div>
          </div>
          <div className="search-header-part2">
            <h2 className="search-header-part2-heading primary">
              Not reaching the guaranteed SEO rankings?
            </h2>
            <p className="search-header-part2-p">
              We are experts at resolving problems with your website's ranking
              that will produce safe, long-lasting outcomes.
            </p>
            <div>
              <div className="search-header-part2-btns">
                <button className="search-header-part2-btn">On page SEO</button>
                <button className="search-header-part2-btn">
                  Link Building
                </button>
                <button className="search-header-part2-btn">
                  Speed Optimization{" "}
                </button>
              </div>
              <div className="search-header-part2-btns">
                <button className="search-header-part2-btn">
                  Keyword Research{" "}
                </button>
                <button className="search-header-part2-btn">
                  Google Analytics{" "}
                </button>
                <button className="search-header-part2-btn">
                  Link removal{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="search-lets-all-banner primarybg">
            <div>
              <h2 className="search-lets-all-banner-h2">
                Let's all get your business swooping like an eagle?
              </h2>
            </div>
            <div>
              <button className="search-lets-all-banner-btn secondarybg">
                Request a call back <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="search-findout-more">
            <div className="search-findout-more-left">
              <img
                src={search}
                className="search-findout-more-left-image"
                alt="search"
                height={400}
              />
            </div>
            <div className="search-findout-more-right">
              <text className="search-findout-more-right-sub secondary">
                FINDOUT MORE
              </text>
              <h2 className="search-findout-more-right-heading primary">
                What makes us the leading providers of SEO services?{" "}
              </h2>
              <p className="search-findout-more-right-p">
                Having trouble achieving the SEO ranking you were promised?
                paying for useless SEO services? We want to assist you in
                overcoming your challenges!
              </p>
              <div className="search-findout-more-right-li">
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Guaranteed first page results
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Customized SEO & digital marketing tactics
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Dominating search engines
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Competition analysis is a constant strategy
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Local and global SEO optimization
                </li>
              </div>
              <button className="search-findout-more-right-btn primary">
                Our Works <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="search-cards">
            <h2 className="search-cards-banner">form of execution</h2>
            <p className="search-cards-heading primary">
              Let us assist you in upgrading your ranking via our practices.
            </p>
            <div className="search-main">
              <div className="search-card">
                <div className="search-border-card-round">
                  <div className="search-card-round">
                    <i className="fa fa-file" />
                  </div>
                </div>
                <div>
                  <h2 className="search-border-card-h2">
                    Address your key aspects
                  </h2>
                  <p className="search-border-card-p">
                    The first thing is to make sure that your website can be
                    indexed and crawled.
                  </p>
                </div>
              </div>
              <div className="search-card">
                <div className="search-border-card-round">
                  <div className="search-card-round">
                    <i className="fa fa-book" />
                  </div>
                </div>
                <div>
                  <h2 className="search-border-card-h2">
                    Find a target keyword
                  </h2>
                  <p className="search-border-card-p">
                    This will be the subject of your article and the primary
                    driver of organic traffic.
                  </p>
                </div>
              </div>
              <div className="search-card">
                <div className="search-border-card-round">
                  <div className="search-card-round">
                    <i className="fa fa-code" />
                  </div>
                </div>
                <div>
                  <h2 className="search-border-card-h2">
                    Create an optimized page
                  </h2>
                  <p className="search-border-card-p">
                    In this stage when the user seeks for interesting and
                    helpful stuff. Google it
                  </p>
                </div>
              </div>
              <div className="search-card">
                <div className="search-border-card-round">
                  <div className="search-card-round">
                    <i className="fa fa-comment" />
                  </div>
                </div>
                <div>
                  <h2 className="search-border-card-h2">Create links to it </h2>
                  <p className="search-border-card-p">
                    At the final stage create the most significant ranking
                    elements which is a link.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="search-mastery-tools">
            <div className="search-mastery-tool-up">
              <h2 className="search-mastery-tool-sub">mastery tools</h2>
              <h1 className="search-mastery-tool-heading">
                Our expertise SEO tools{" "}
              </h1>
              <p className="search-mastery-tool-p">
                With the use of our powerful SEO boosting tools, we assist you
                in finding solutions to your dilemmas.
              </p>
            </div>
            <div className="search-mastery-tool-bottom">
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
                  <div className="search-tools-logo">
                    <img
                      src={searchtool1}
                      alt="searchtool1"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool2}
                      alt="searchtool2"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool3}
                      alt="searchtool3"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool4}
                      alt="searchtool4"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool5}
                      alt="searchtool5"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool1}
                      alt="searchtool1"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool2}
                      alt="searchtool2"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool3}
                      alt="searchtool3"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool4}
                      alt="searchtool4"
                      className="search-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="search-tools-logo">
                    <img
                      src={searchtool5}
                      alt="searchtool5"
                      className="search-mastery-tool-logos"
                      width={80}
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

export default SearchEngine;
