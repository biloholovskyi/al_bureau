import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

import * as Style from '../styled'

import './swiper.min.css'
import './navigation.min.css';
import './style.css'
import image from '../../../media/image/sliderimg.png';

import SwiperCore, {Navigation, Pagination} from 'swiper';
import photo from "../../../media/image/ava.svg";
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SingleQuoteSlider = () => {
  return (
    <Style.SingleQuoteSliderWrap>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={false}
        loop={true}
        pagination={{
          type: 'fraction'
        }}
        className={'swiper-container5'}
      >
        <SwiperSlide className={'swipeSlide5'}>
          <div className="quoteText">
            <div className="title">
              Жизнь современного города настолько интенсивна и насыщена, что ограничить ее только светлым временем суток невозможно.
            </div>
            <div className="author">
              <img className={'photo'} src={photo} alt="image"/>
              <div className="name">Татьяна Прокофьева</div>
              <div className="position">Главный архитектор Казани</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={'swipeSlide5'}>
          <div className="quoteText">
            <div className="title">
              Жизнь современного города настолько интенсивна и насыщена, что ограничить ее только светлым временем суток невозможно.
            </div>
            <div className="author">
              <img className={'photo'} src={photo} alt="image"/>
              <div className="name">Татьяна Прокофьева</div>
              <div className="position">Главный архитектор Казани</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={'swipeSlide5'}>
          <div className="quoteText">
            <div className="title">
              Жизнь современного города настолько интенсивна и насыщена, что ограничить ее только светлым временем суток невозможно.
            </div>
            <div className="author">
              <img className={'photo'} src={photo} alt="image"/>
              <div className="name">Татьяна Прокофьева</div>
              <div className="position">Главный архитектор Казани</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={'swipeSlide5'}>
          <div className="quoteText">
            <div className="title">
              Жизнь современного города настолько интенсивна и насыщена, что ограничить ее только светлым временем суток невозможно.
            </div>
            <div className="author">
              <img className={'photo'} src={photo} alt="image"/>
              <div className="name">Татьяна Прокофьева</div>
              <div className="position">Главный архитектор Казани</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Style.SingleQuoteSliderWrap>
  )
}

export default SingleQuoteSlider;