import React from "react";
import "../styles/testimonial.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import user1 from "../../assets/images/testimonial.png";
import user2 from "../../assets/images/testimonial.png";
import user3 from "../../assets/images/testimonial.png";
import clutch from "../../assets/images/t1.png";
import google from "../../assets/images/t2.png";
import trust from "../../assets/images/t3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Testimonial({ stars }) {
  return (
    <div class="testimonials primarybg">
      <div className="section-head">
        <div className="test-head-left">
          <h2 className="test-sub">TESTIMONIALS</h2>
          <h3 className="test-heading">Explore Client Feedback</h3>
        </div>
        <div className="test-head-right">
          <div className="t-companies">
            <img src={clutch} alt="clutch" height={30} className="t-com-imgs" />
            <img src={google} alt="google" height={30} className="t-com-imgs" />
            <img src={trust} alt="trust" height={30} className="t-com-imgs" />
          </div>
          <div className="t-r-mssg">
            Curious about why numerous companies choose to collaborate with us?
            Here's what they have to share about their experience.
          </div>
        </div>
      </div>

      <div className="testimonials-item">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={4}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ dynamicBullets: false }}
          navigation={false}
          slidesPerView={2}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="t-card ">
              <img src={user1} alt="lap-img" className="t-card-imgs" />
              <h3 className="t-card-h3">Theenathayalan E</h3>
              <h5 className="t-card-h5">
                Jaffna Drafting (pvt) Ltd - IT Director
              </h5>
              {[...Array(stars || 5)].map((star) => {
                return <span tag="h5">⭐ </span>;
              })}
              <p className="t-card-p">
                We are extremely happy with the deal we got with the company.
                Speaking with the team helped us to get what exactly we were
                looking for. We are satisfied with their service.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="t-card">
              <img src={user2} alt="lap-img" className="t-card-imgs" />
              <h3 className="t-card-h3">Malki Paranawithana</h3>
              <h5 className="t-card-h5">Customer</h5>
              {[...Array(stars || 5)].map((star) => {
                return <span tag="h5">⭐ </span>;
              })}
              <p className="t-card-p">
                {" "}
                Recently I was working with SS Creation Designs on creating my
                website. It was an absolute pleasure working with them. my
                website looks great and functions really good.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="t-card">
              <img src={user3} alt="lap-img" className="t-card-imgs" />
              <h3 className="t-card-h3">Navam Pirashanth</h3>
              <h5 className="t-card-h5">Food Gallery - Founder & CEO</h5>
              {[...Array(stars || 5)].map((star) => {
                return <span tag="h5">⭐ </span>;
              })}
              <p className="t-card-p">
                It was great experience on logo designing with SS.Creation.
                Timely, supportive and effectively completed the task of logo
                design for my food outlet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="t-card">
              <img src={user2} alt="lap-img" className="t-card-imgs" />
              <h3 className="t-card-h3">Yarl Salesforce Ohana</h3>
              <h5 className="t-card-h5">Information Technology Company</h5>
              {[...Array(stars || 5)].map((star) => {
                return <span>⭐ </span>;
              })}
              <p className="t-card-p">
                Amazing service and highly recommended. Got the logo and Website
                designed as expected looks great and really good. Kudos to the
                team for the fast and perfect service.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="t-card">
              <img src={user2} alt="lap-img" className="t-card-imgs" />
              <h3 className="t-card-h3">Suresh Suji</h3>
              <h5 className="t-card-h5">Code2future - Founder & CEO</h5>
              {[...Array(stars || 4)].map((star) => {
                return <span>⭐ </span>;
              })}
              <p className="t-card-p">
                In looking for a logo design, I had my eye on SS creation design
                from seeing his outstanding work at JUST Creative. Before
                contacting him, I hesitated thinking that it would be a long
                shot.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
