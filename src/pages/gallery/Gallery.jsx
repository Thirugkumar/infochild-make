import React from "react";
import "./Gallery.css";
import NpyItems from "./NpyItems";
import EsoftItems from "../gallery/EsoftItems";
import ShuttleItems from "../gallery/ShuttleItems";
import InternItems from "../gallery/InternItems";
import YarlItems from "../gallery/YarlItems";
import NccItems from "../gallery/NccItems";
import NallurItems from "../gallery/NallurItems";
import CgpItems from "../gallery/CgpItems";
import TripItems from "../gallery/TripItems";
import HFSuccessItems from "./HFSuccessItems";
import HFItems from "./HFItems";
import ClimathonItems from "./ClimathonItems";
import AnniversaryItems from "./AnniversaryItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Nothern Province Youth Online Business Bootcamp</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {NpyItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.npy_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>ESOFT Metro Campus WorldPress Workshop</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {EsoftItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.esoft_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Shuttleclash</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {ShuttleItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Shuttle_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Interns Meeting</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {InternItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Intern_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Yarl Dreamin 23</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {YarlItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Yarl_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Nothern Corporate Cricket Festival</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {NccItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Ncc_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Nallur Festival Stall</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {NallurItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Nallur_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Career Guidance Program</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {CgpItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Cgp_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Annual Trip 2022</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {TripItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Trip_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Hackforce22 Success Meetup</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {HFSuccessItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.HFSuccess_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Hackforce21</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {HFItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.HF_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Climathon Jaffna 2021</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {ClimathonItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Climathon_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="gallery-items">
        <div className="gallery-heading primary">
          <h2>Our 7th Anniversary</h2>
        </div>
        <div className="gallery-view">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={false}
            navigation={false}
            slidesPerView={4}
            loop={true}
            className="mySwiper"
          >
            {AnniversaryItems.map((pics) => {
              return (
                <SwiperSlide>
                  <div className="gallery-imgs">
                    <img src={pics.Anniversary_image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
