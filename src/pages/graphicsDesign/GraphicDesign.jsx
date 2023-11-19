import React from "react";
import "./GraphicDesign.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import GH1 from "../../assets/page-image/GH1.webp";
import GH2 from "../../assets/page-image/GH2.webp";
import GH3 from "../../assets/page-image/GH3.webp";
import graphic from "../../assets/page-image/graphic.webp";
import ps from "../../assets/page-image/ps.png";
import pr from "../../assets/page-image/pr.png";
import ai from "../../assets/page-image/ai.png";
import lr from "../../assets/page-image/lr.png";
import xd from "../../assets/page-image/xd.png";
import rw11 from "../../assets/page-image/rw11.webp";
import rw12 from "../../assets/page-image/rw12.webp";
import rw13 from "../../assets/page-image/rw13.webp";
import rw14 from "../../assets/page-image/rw14.webp";
import rw15 from "../../assets/page-image/rw15.webp";
import rw16 from "../../assets/page-image/rw16.webp";
import rw21 from "../../assets/page-image/rw21.webp";
import rw22 from "../../assets/page-image/rw22.webp";
import rw23 from "../../assets/page-image/rw23.webp";
import rw24 from "../../assets/page-image/rw24.webp";
import rw25 from "../../assets/page-image/rw25.webp";
import rw26 from "../../assets/page-image/rw26.webp";

function GraphicDesign() {
  return (
    <>
      <section className="graphic-design">
        <div className="graphic">
          <div className="graphic-header  primarybg">
            <div className="graphic-header-left">
              <h3 className="graphic-header-sub">Boundless | Adorable</h3>
              <h2 className="graphic-header-heading secondary">
                Graphic Designs
              </h2>
              <p className="graphic-header-p">Designs to make you stand out!</p>
              <button className="graphic-header-btn secondarybg">
                GET A QUOTE &nbsp;
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="graphic-header-right">
              <img
                src={GH1}
                className="graphic-image1"
                alt="graphic-image1"
                height={250}
              />
              <img
                src={GH2}
                className="graphic-image2"
                alt="graphic-image2"
                height={300}
              />
              <img
                src={GH3}
                className="graphic-image3"
                alt="graphic-image3"
                height={250}
              />
            </div>
          </div>
          <div className="graphic-header-part2">
            <h2 className="graphic-header-part2-heading primary">
              Are you seeking professional graphic design for your initiatives?
            </h2>
            <p className="graphic-header-part2-p">
              We're here to inspire new designs that will boost your brand. You
              can receive any kind of graphic design services from us. Please
              get into our services that we offer.
            </p>
            <div>
              <div className="graphic-header-part2-btns">
                <button className="graphic-header-part2-btn">
                  Visual Identity
                </button>
                <button className="graphic-header-part2-btn">
                  Marketing & Advertising
                </button>
                <button className="graphic-header-part2-btn">
                  User Interface
                </button>
              </div>
              <div className="graphic-header-part2-btns">
                <button className="graphic-header-part2-btn">
                  Publication
                </button>
                <button className="graphic-header-part2-btn">
                  Packaging Designs
                </button>
                <button className="graphic-header-part2-btn">
                  Motion & Animation
                </button>
              </div>
            </div>
          </div>
          <div className="graphic-exlore-more">
            <div className="graphic-exlore-more-left">
              <img
                src={graphic}
                className="graphic-exlore-more-left-image"
                alt="graphic"
                height={450}
              />
            </div>
            <div className="graphic-exlore-more-right">
              <text className="graphic-exlore-more-right-sub secondary">
                EXPLORE MORE
              </text>
              <h2 className="graphic-exlore-more-right-heading primary">
                Why is infonits the only provide of graphic design.?
              </h2>
              <p className="graphic-exlore-more-right-p">
                Designs are easy to understand but difficult to do..
                <br />
                don't Worry we are here to help you with outstanding designs!
              </p>
              <div className="graphic-exlore-more-right-li">
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}
                  No use of template
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Unlimited revision until final delivery
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Friendly communication
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Free consultation
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  {"  "}Original vector and illustrator designs
                </li>
              </div>
              <button className="graphic-exlore-more-right-btn primary">
                Our Works <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="graphic-cards">
            <h2 className="graphic-cards-banner">form of execution</h2>
            <p className="graphic-cards-heading primary">
              From our steps, let's make your brand awesome.
            </p>
            <div className="graphic-main">
              <div className="graphic-card">
                <div className="graphic-border-round">
                  <div className="graphic-round">
                    <i className="fa fa-file" />
                  </div>
                </div>
                <div>
                  <h2 className="graphic-border-card-h2">
                    Understanding the creative brief
                  </h2>
                  <p className="graphic-border-card-p">
                    It includes all project information, including the
                    audiences's full demographics, specifications, and the
                    design's intended use.
                  </p>
                </div>
              </div>
              <div className="graphic-card">
                <div className="graphic-border-round">
                  <div className="graphic-round">
                    <i className="fa fa-book" />
                  </div>
                </div>
                <div>
                  <h2 className="graphic-border-card-h2">
                    Understanding the creative brief
                  </h2>
                  <p className="graphic-border-card-p">
                    Analyze which aspects of your design, such as the font you
                    used, the color scheme you selected, Put that knowledge to
                    use when making your design.
                  </p>
                </div>
              </div>
              <div className="graphic-card">
                <div className="graphic-border-round">
                  <div className="graphic-round">
                    <i className="fa fa-code" />
                  </div>
                </div>
                <div>
                  <h2 className="graphic-border-card-h2">
                    Understanding the creative brief
                  </h2>
                  <p className="graphic-border-card-p">
                    With the help of our professional tools or the tool of your
                    choice, we commence drafting your design.
                  </p>
                </div>
              </div>
              <div className="graphic-card">
                <div className="graphic-border-round">
                  <div className="graphic-round">
                    <i className="fa fa-comment" />
                  </div>
                </div>
                <div>
                  <h2 className="graphic-border-card-h2">
                    Get feedback and approval from the client
                  </h2>
                  <p className="graphic-border-card-p">
                    Delivering our clients a rough sketch of our design enables
                    us to gather their feedback and make further adjustments to
                    approve it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="graphic-recent-works">
            <h2 className="graphic-recent-works-sub">recent works</h2>
            <h1 className="graphic-recent-works-heading primary">
              We are proud of what we do
            </h1>
            <div className="graphic-images-slider1">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={4}
                centeredSlides={true}
                autoplay={{ delay: 2000, enableOnInteraction: true }}
                pagination={false}
                navigation={true}
                slidesPerView={5}
                /*breakpoints={
                  ({ 835: { slidesPerView: 5 } },
                  { 768: { slidesPerView: 5 } },
                  { 428: { slidesPerView: 2 } },
                  { 390: { slidesPerView: 2 } })
                }*/
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw11}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw12}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw13}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw14}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw15}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw16}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="graphic-images-slider2">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={4}
                centeredSlides={true}
                autoplay={{ delay: 2500, enableOnInteraction: true }}
                pagination={false}
                navigation={true}
                slidesPerView={5}
                /*breakpoints={
                  ({ 835: { slidesPerView: 5 } },
                  { 768: { slidesPerView: 5 } },
                  { 428: { slidesPerView: 2 } },
                  { 390: { slidesPerView: 2 } })
                }*/
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw21}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw22}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw23}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw24}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw25}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-works">
                    <img
                      src={rw26}
                      alt="graphic-recent works images"
                      className="graphic-recent-work-image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="graphic-lets-all-banner primarybg">
            <div>
              <h2 className="graphic-lets-all-banner-h2">
                Let's all get your business swooping like an eagle?
              </h2>
            </div>
            <div>
              <button className="graphic-lets-all-banner-btn secondarybg">
                Request a call back <i className="fa fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="graphic-mastery-tools">
            <div className="graphic-mastery-tool-up">
              <h2 className="graphic-mastery-tool-sub">mastery tools</h2>
              <h1 className="graphic-mastery-tool-heading primary">
                Exhibit of our proficiency tools
              </h1>
              <p className="graphic-mastery-tool-p">
                All the works are our own concepts and mockups made from
                original designs using these professional tools
              </p>
            </div>
            <div className="graphic-mastery-tool-bottom">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={4}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={false}
                navigation={false}
                slidesPerView={6}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={pr}
                      alt="pr"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={ps}
                      alt="ps"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={lr}
                      alt="lr"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={ai}
                      alt="ai"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={xd}
                      alt="xd"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={pr}
                      alt="pr"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={ps}
                      alt="ps"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={lr}
                      alt="lr"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={ai}
                      alt="ai"
                      className="graphic-mastery-tool-logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="graphic-tools-logo">
                    <img
                      src={xd}
                      alt="xd"
                      className="graphic-mastery-tool-logos"
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

export default GraphicDesign;
