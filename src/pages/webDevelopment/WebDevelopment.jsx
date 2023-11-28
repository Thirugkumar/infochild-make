import React from "react";
import "./WebDevelopment.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import WH1 from "../../assets/page-image/WH1.webp";
import WH2 from "../../assets/page-image/WH2.webp";
import WH3 from "../../assets/page-image/WH3.webp";
import web from "../../assets/page-image/web.webp";
import anqular from "../../assets/page-image/anqular.png";
import php from "../../assets/page-image/php.png";
import wordpress from "../../assets/page-image/wordpress.png";
import node from "../../assets/page-image/node.png";
import presta from "../../assets/page-image/presta.png";
import magento from "../../assets/page-image/magento.png";
import joomla from "../../assets/page-image/joomla.png";
import webrow11 from "../../assets/page-image/webrow11.webp";
import webrow12 from "../../assets/page-image/webrow12.webp";
import webrow13 from "../../assets/page-image/webrow13.webp";
import webrow14 from "../../assets/page-image/webrow14.webp";
import webrow15 from "../../assets/page-image/webrow15.webp";
import webrow16 from "../../assets/page-image/webrow16.webp";
import webrow17 from "../../assets/page-image/webrow17.webp";
import webrow21 from "../../assets/page-image/webrow21.webp";
import webrow22 from "../../assets/page-image/webrow22.webp";
import webrow23 from "../../assets/page-image/webrow23.webp";
import webrow24 from "../../assets/page-image/webrow24.webp";
import webrow25 from "../../assets/page-image/webrow25.webp";
import webrow26 from "../../assets/page-image/webrow26.webp";
import webrow27 from "../../assets/page-image/webrow27.webp";
import webrow28 from "../../assets/page-image/webrow28.webp";
import webrow29 from "../../assets/page-image/webrow29.webp";
import webrow210 from "../../assets/page-image/webrow210.webp";
import webrow211 from "../../assets/page-image/webrow211.webp";
import webrow212 from "../../assets/page-image/webrow212.webp";
import webrow213 from "../../assets/page-image/webrow213.webp";
import webrow214 from "../../assets/page-image/webrow214.webp";
import webrow215 from "../../assets/page-image/webrow215.webp";
import webrow216 from "../../assets/page-image/webrow216.webp";

function WebDevelopment() {
  return (
    <>
      <section className="web-dev">
        <div className="web">
          <div className="web-header  primarybg">
            <div className="web-header-left">
              <h3 className="web-header-sub">Ethereal | Idyllic</h3>
              <h2 className="web-header-heading secondary">web Designs</h2>
              <p className="web-header-p">
                Develoanqular that will reached you apart!
              </p>
              <button className="web-header-btn secondarybg">
                GET A QUOTE &nbsp;
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="web-header-right">
              <img
                src={WH1}
                className="web-image1"
                alt="web-image1"
                height={220}
              />
              <img
                src={WH2}
                className="web-image2"
                alt="web-image2"
                height={300}
              />
              <img
                src={WH3}
                className="web-image3"
                alt="web-image3"
                height={220}
              />
            </div>
          </div>
          <div className="web-header-part2">
            <h2 className="web-header-part2-heading primary">
              Would you need phpofessional website assistance?
            </h2>
            <p className="web-header-part2-p">
              We're here to help you build your brand by offering innovative
              site designs. We offer a variety of web design services that you
              may choose from interested applicants are welcome to explore our
              offerings.
            </p>
            <div>
              <div className="web-header-part2-btns">
                <button className="web-header-part2-btn">CMS Website</button>
                <button className="web-header-part2-btn">
                  Ecommerce Website
                </button>
                <button className="web-header-part2-btn">
                  Dynamic Website
                </button>
              </div>
            </div>
          </div>
          <div className="web-findout-more">
            <div className="web-findout-more-left">
              <img
                src={web}
                className="web-findout-more-left-image"
                alt="web"
                height={400}
              />
            </div>
            <div className="web-findout-more-right">
              <text className="web-findout-more-right-sub secondary">
                FINDOUT MORE
              </text>
              <h2 className="web-findout-more-right-heading primary">
                Why does Infonits grant web design services ?
              </h2>
              <p className="web-findout-more-right-p">
                Create your own web masterpiece...
                <br />
                Don't worry we are here to help you with outstanding designs!
              </p>
              <div className="web-findout-more-right-li">
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Gives a Good First Imphpession.
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Helanqular You Rank on Search Engines like Google.
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Helanqular to Get Leads and Convert Sales.
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}You Can Measure Up to Competitors.
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Gives You a Brand Personality.
                </li>
              </div>
              <button className="web-findout-more-right-btn primary">
                Our Works <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="web-cards">
            <h2 className="web-cards-banner">form of execution</h2>
            <p className="web-cards-heading primary">
              Let's use our strategies to make your brand outstanding.
            </p>
            <div className="web-main">
              <div className="web-card">
                <div className="web-border-card-round">
                  <div className="web-card-round">
                    <i className="fa fa-file" />
                  </div>
                </div>
                <div>
                  <h2 className="web-border-card-h2">Gather Information</h2>
                  <p className="web-border-card-p">
                    Assemble all the necessary data. In a sense, this creates
                    the structure for the remwordpressning steanqular.
                  </p>
                </div>
              </div>
              <div className="web-card">
                <div className="web-border-card-round">
                  <div className="web-card-round">
                    <i className="fa fa-book" />
                  </div>
                </div>
                <div>
                  <h2 className="web-border-card-h2">Make a Plan</h2>
                  <p className="web-border-card-p">
                    Dividing the material into distinct sections for design,
                    content, and phpogramming.
                  </p>
                </div>
              </div>
              <div className="web-card">
                <div className="web-border-card-round">
                  <div className="web-card-round">
                    <i className="fa fa-code" />
                  </div>
                </div>
                <div>
                  <h2 className="web-border-card-h2">Implement & Develop</h2>
                  <p className="web-border-card-p">
                    At this moment, use three distinct steanqular, such as
                    design, phpogramming, and content.
                  </p>
                </div>
              </div>
              <div className="web-card">
                <div className="web-border-card-round">
                  <div className="web-card-round">
                    <i className="fa fa-comment" />
                  </div>
                </div>
                <div>
                  <h2 className="web-border-card-h2">Test & Launch</h2>
                  <p className="web-border-card-p">
                    Once all of the stages have been carried out, written and
                    functional phpoject will be ready for launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="web-recent-works">
            <h2 className="web-recent-works-sub">recent works</h2>
            <h1 className="web-recent-works-heading">
              We are proud of what we do
            </h1>
            <div className="web-images-slider1">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={4}
                centeredSlides={true}
                autoplay={{ delay: 2000, enableOnInteraction: true }}
                pagination={false}
                navigation={true}
                slidesPerView={4}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow11}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow12}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow13}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow14}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow15}
                      alt="prestaweb-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow16}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow17}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="web-images-slider2">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={4}
                centeredSlides={true}
                autoplay={{ delay: 2500, enableOnInteraction: true }}
                pagination={false}
                navigation={true}
                slidesPerView={4}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow21}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow22}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow23}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow24}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow25}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow26}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow27}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow28}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow29}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow210}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow211}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow212}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow213}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow214}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow215}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="web-works">
                    <img
                      src={webrow216}
                      alt="web-recent works images"
                      className="web-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="web-lets-all-banner primarybg">
            <div>
              <h2 className="web-lets-all-banner-h2">
                Let's all get your business swooping like an eagle?
              </h2>
            </div>
            <div>
              <button className="web-lets-all-banner-btn secondarybg">
                Request a call back <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="web-mastery-tools">
            <div className="web-mastery-tool-up">
              <h2 className="web-mastery-tool-sub">mastery tools</h2>
              <h1 className="web-mastery-tool-heading">
                Exhibit of our proficiency tools
              </h1>
              <p className="web-mastery-tool-p">
                We built the entire CMS and web designs from end-to-end using
                these specialized tools and our own unique ideas.
              </p>
            </div>
            <div className="web-mastery-tool-bottom">
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
                  <div className="tools-logo">
                    <img
                      src={php}
                      alt="php"
                      className="web-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tools-logo">
                    <img
                      src={anqular}
                      alt="anqular"
                      className="web-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tools-logo">
                    <img
                      src={node}
                      alt="node"
                      className="web-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tools-logo">
                    <img
                      src={wordpress}
                      alt="wordpress"
                      className="web-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tools-logo">
                    <img
                      src={presta}
                      alt="presta"
                      className="web-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tools-logo">
                    <img
                      src={magento}
                      alt="magento"
                      className="web-mastery-tool-logos"
                      width={80}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tools-logo">
                    <img
                      src={joomla}
                      alt="joomla"
                      className="web-mastery-tool-logos"
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

export default WebDevelopment;
