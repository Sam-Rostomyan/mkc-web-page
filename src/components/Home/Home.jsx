import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import "./home.scss";

import img1 from "../../assets/images/homeSliderImg1.png";
import img2 from "../../assets/images/homeSliderImg2.png";
import leftArrow from "../../assets/images/homeArrowLeft.svg";
import rightArrow from "../../assets/images/homeArrowRight.svg";

const Home = ({ inViewRef }) => {
   return (
      <section className="home" id="home" ref={inViewRef}>
         <div className="home__slider">
            <div className="home__slider_controls">
               <button className="home__slider_controls-leftArrow home__slider_controls-btn">
                  <img src={leftArrow} alt="left arrow" />
               </button>
               <button className="home__slider_controls-rightArrow home__slider_controls-btn">
                  <img src={rightArrow} alt="right arrow" />
               </button>
            </div>

            <Swiper
               className="mySwiper"
               navigation={{
                  nextEl: ".home__slider_controls-rightArrow",
                  prevEl: ".home__slider_controls-leftArrow"
               }}
               modules={[Navigation, Autoplay, Mousewheel]}
               slidesPerView={1}
               loop={true}
               mousewheel={true}
               speed={800}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
            >
               <SwiperSlide className="home__slider_slide">
                  <div className="home__slider_photo">
                     <img className="home__slider_img" src={img1} alt="scanit logo" />
                  </div>
                  <div className="home__slider_footer">
                     <p className="home__slider_text">Բիզնեսի կառավարման Mobile Հավելված</p>
                     <CustomLink className="home__slider_link custom-link" to="/scanit">Ավելին</CustomLink>
                  </div>
               </SwiperSlide >

               <SwiperSlide className="home__slider_slide">
                  <div style={{ height: "279px" }} className="home__slider_photo">
                     <img className="home__slider_img" src={img2} alt="ctrlB logo" />
                  </div>
                  <div style={{ marginTop: "0" }} className="home__slider_footer">
                     <p className="home__slider_text">Բիզնես պրոցեսների ավտոմատացում</p>
                     <CustomLink className="home__slider_link custom-link" to="/ctrb">Ավելին</CustomLink>
                  </div>
               </SwiperSlide >

               <SwiperSlide className="home__slider_slide">
                  <div className="home__slider_photo">
                     <img className="home__slider_img" src={img1} alt="img" />
                  </div>
                  <div className="home__slider_footer">
                     <p className="home__slider_text">3.Բիզնեսի կառավարման Mobile Հավելված</p>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </section>
   )
};

export default Home;
