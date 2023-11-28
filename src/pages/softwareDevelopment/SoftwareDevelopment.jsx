import React from "react";
import "./SoftwareDevelopment.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SWH1 from "../../assets/page-image/SWH1.webp";
import software from "../../assets/page-image/software.webp";
import anqular from "../../assets/page-image/anqular.png";
import php from "../../assets/page-image/php.png";
import wordpress from "../../assets/page-image/wordpress.png";
import node from "../../assets/page-image/node.png";
import presta from "../../assets/page-image/presta.png";
import magento from "../../assets/page-image/magento.png";
import joomla from "../../assets/page-image/joomla.png";

function SoftwareDevelopment() {
  return (
    <>
      <section className="software-dev">
        <div className="software">
          <div className="software-header  primarybg">
            <div className="software-header-left">
              <h3 className="software-header-sub">Customized | Elegant</h3>
              <h2 className="software-header-heading secondary">
                Software development
              </h2>
              <p className="software-header-p">Let's get coding!</p>
              <button className="software-header-btn secondarybg">
                GET A QUOTE &nbsp;
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="software-header-right">
              <img
                src={SWH1}
                className="software-image1"
                alt="software-image1"
              />
            </div>
          </div>
          <div className="software-header-part2">
            <h2 className="software-header-part2-heading primary">
              Would you like to know the basics of software development?
            </h2>
            <p className="software-header-part2-p">
              We're here to help you come up with creative solutions that will
              boost your productivity. You can choose from a variety of software
              development services we offer.
            </p>
            <div>
              <div className="software-header-part2-btns">
                <button className="software-header-part2-btn">
                  Custom Software
                </button>
                <button className="software-header-part2-btn">
                  POS System
                </button>
                <button className="software-header-part2-btn">
                  Business Management
                </button>
              </div>
              <div className="software-header-part2-btns">
                <button className="software-header-part2-btn">
                  Student Management Portal
                </button>
                <button className="software-header-part2-btn">
                  Account Management
                </button>
                <button className="software-header-part2-btn">
                  CRM Software
                </button>
              </div>
            </div>
          </div>
          <div className="software-lets-all-banner primarybg">
            <div>
              <h2 className="software-lets-all-banner-h2">
                Let's all get your business swooping like an eagle?
              </h2>
            </div>
            <div>
              <button className="software-lets-all-banner-btn secondarybg">
                Request a call back <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="software-findout-more">
            <div className="software-findout-more-left">
              <img
                src={software}
                className="software-findout-more-left-image"
                alt="software"
                height={300}
              />
            </div>
            <div className="software-findout-more-right">
              <text className="software-findout-more-right-sub secondary">
                FINDOUT MORE
              </text>
              <h2 className="software-findout-more-right-heading primary">
                Why does Infonits provide software development services?
              </h2>
              <p className="software-findout-more-right-p">
                It can be difficult to assess your demand for unique software.
                Don't worry, our outstanding services are guaranteed to help
                you.
              </p>
              <div className="software-findout-more-right-li">
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Emphasize your expertise
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Exclusiveness
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Security and adaptability
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Cost efficiency
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Uniqueness
                </li>
              </div>
              <button className="software-findout-more-right-btn primary">
                Our Works <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="software-cards">
            <h2 className="software-cards-banner">form of execution</h2>
            <p className="software-cards-heading primary">
              Let's employ our initiatives to increase your brand.
            </p>
            <div className="software-main">
              <div className="software-card">
                <div className="software-border-card-round">
                  <div className="software-card-round">
                    <i className="fa fa-file" />
                  </div>
                </div>
                <div>
                  <h2 className="software-border-card-h2">Planning</h2>
                  <p className="software-border-card-p">
                    Once the client has provided the general requirements, it is
                    necessary to clearly define the scope of the development and
                    analyze it before developing an executable approach.
                  </p>
                </div>
              </div>
              <div className="software-card">
                <div className="software-border-card-round">
                  <div className="software-card-round">
                    <i className="fa fa-book" />
                  </div>
                </div>
                <div>
                  <h2 className="software-border-card-h2">Implementing</h2>
                  <p className="software-border-card-p">
                    Software implementation refers to the process of
                    incorporating an application into the workflow of an
                    organization. Establishing a plan and selecting a vendor are
                    usually the first steps in the process.
                  </p>
                </div>
              </div>
              <div className="software-card">
                <div className="software-border-card-round">
                  <div className="software-card-round">
                    <i className="fa fa-code" />
                  </div>
                </div>
                <div>
                  <h2 className="software-border-card-h2">Testing</h2>
                  <p className="software-border-card-p">
                    In this step, we verify that the actual software product
                    complies with the stated requirements and is
                    error-free.Testing is the final step before releasing a
                    product to the market.
                  </p>
                </div>
              </div>
              <div className="software-card">
                <div className="software-border-card-round">
                  <div className="software-card-round">
                    <i className="fa fa-comment" />
                  </div>
                </div>
                <div>
                  <h2 className="software-border-card-h2">
                    Deployment & Maintanance
                  </h2>
                  <p className="software-border-card-p">
                    The duration of time that you have the legal right to use
                    software maintenance and deployment services that are
                    offered under the Agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="software-mastery-tools">
            <div className="software-mastery-tool-up">
              <h2 className="software-mastery-tool-sub">mastery tools</h2>
              <h1 className="software-mastery-tool-heading">
                Exhibit of our proficiency tools
              </h1>
              <p className="software-mastery-tool-p">
                All the works are our own concepts and mockups made from
                original designs using these professional tools.
              </p>
            </div>
            <div className="software-mastery-tool-bottom">
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
                  <div className="software-tools-logo">
                    <img
                      src={php}
                      alt="php"
                      className="software-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="software-tools-logo">
                    <img
                      src={anqular}
                      alt="anqular"
                      className="software-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="software-tools-logo">
                    <img
                      src={node}
                      alt="node"
                      className="software-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="software-tools-logo">
                    <img
                      src={wordpress}
                      alt="wordpress"
                      className="software-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="software-tools-logo">
                    <img
                      src={presta}
                      alt="presta"
                      className="software-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="software-tools-logo">
                    <img
                      src={magento}
                      alt="magento"
                      className="software-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="software-tools-logo">
                    <img
                      src={joomla}
                      alt="joomla"
                      className="software-mastery-tool-logos"
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

export default SoftwareDevelopment;
