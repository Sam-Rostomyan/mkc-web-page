import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import "./home.scss";

import img1 from "../../assets/images/sliderImg1.png"
import leftArrow from "../../assets/images/headerArrowLeft.svg";
import rightArrow from "../../assets/images/headerArrowRight.svg";

const Home = ({ inViewRef }) => {
   return (
      <header className="header" id="home" ref={inViewRef}>
         <div className="header__slider">
            <div className="header__slider_controls">
               <button className="header__slider_controls-leftArrow header__slider_controls-btn">
                  <img src={leftArrow} alt="left arrow" />
               </button>
               <button className="header__slider_controls-rightArrow header__slider_controls-btn">
                  <img src={rightArrow} alt="right arrow" />
               </button>
            </div>

            <Swiper
               className="mySwiper"
               navigation={{
                  nextEl: ".header__slider_controls-rightArrow",
                  prevEl: ".header__slider_controls-leftArrow"
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
               <SwiperSlide className="header__slider_slide">
                  <div className="header__slider_photo">
                     <img className="header__slider_img" src={img1} alt="img1" />
                  </div>
                  <div className="header__slider_footer">
                     <p className="header__slider_text">1.Բիզնեսի կառավարման Mobile Հավելված</p>
                     <CustomLink className="header__slider_link custom-link" to="/scanit">Ավելին</CustomLink>
                  </div>
               </SwiperSlide >

               <SwiperSlide className="header__slider_slide">
                  <div className="header__slider_photo">
                     <img className="header__slider_img" src={img1} alt="img1" />
                  </div>
                  <div className="header__slider_footer">
                     <p className="header__slider_text">2.Բիզնեսի կառավարման Mobile Հավելված</p>
                  </div>
               </SwiperSlide >

               <SwiperSlide className="header__slider_slide">
                  <div className="header__slider_photo">
                     <img className="header__slider_img" src={img1} alt="img1" />
                  </div>
                  <div className="header__slider_footer">
                     <p className="header__slider_text">3.Բիզնեսի կառավարման Mobile Հավելված</p>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </header>
   )
};

export default Home;
