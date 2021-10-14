import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import ApiService from "../../../services/api";

import * as Style from '../styled'

import './swiper.min.css'
import './navigation.min.css';
import './style.css'
import image from '../../../media/image/sliderimg.png';

import SwiperCore, {Navigation, Pagination} from 'swiper';
import photo from "../../../media/image/ava.svg";

const api = new ApiService()
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SingleQuoteSlider = ({data}) => {
  const slides = data.map(quote => {
    return (
      <SwiperSlide className={'swipeSlide5'}>
        <div className="quoteText">
          <div className="title">{quote?.text}</div>
          <div className="author">
            <img className={'photo'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${quote?.image}`} alt="image"/>
            <div className="name">{quote?.author}</div>
            <div className="position">{quote?.position}</div>
          </div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <Style.SingleQuoteSliderWrap className={'case-main-block'}>
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
        {slides}
      </Swiper>
    </Style.SingleQuoteSliderWrap>
  )
}

export default SingleQuoteSlider;