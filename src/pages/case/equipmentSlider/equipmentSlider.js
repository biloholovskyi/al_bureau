import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

import * as Style from '../styled'

import './swiper.min.css'
import './navigation.min.css';
import './style.css'
import image from '../../../media/image/sliderimg.png';

import SwiperCore, {Navigation} from 'swiper';

import ApiService from "../../../services/api";

const api = new ApiService()
// install Swiper modules
SwiperCore.use([Navigation]);

const EquipmentSlider = ({data}) => {
  return (
    <Style.EquipmentSliderWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12"><h2>test slider title</h2></div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={2}
              spaceBetween={40}
              navigation={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              centeredSlides={false}
            >

              {
                data && data.map(item => {
                  return (
                    <SwiperSlide
                      className={'swipeSlide'}
                      key={item.id}
                    >
                      <img className={'image1'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${item?.image}`} alt="image"/>
                      <div className="name2">{item?.name}</div>
                      <div className="text2 text-center">{item?.desc}</div>
                    </SwiperSlide>
                  )
                })
              }

            </Swiper>
          </div>
        </div>
      </div>
    </Style.EquipmentSliderWrap>
  )
}

export default EquipmentSlider;