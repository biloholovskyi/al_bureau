import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

import * as Style from '../styled'

import './swiper.min.css'
import './navigation.min.css';
import './style.css'
import image from '../../../media/image/sliderimg.png';

import SwiperCore, {Navigation} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation]);

const EquipmentSlider = () => {
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
              <SwiperSlide
                className={'swipeSlide'}
              >
                <img className={'image1'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={'swipeSlide'}
              >
                <img className={'image1'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={'swipeSlide'}
              >
                <img className={'image1'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={'swipeSlide'}
              >
                <img className={'image1'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={'swipeSlide'}
              >
                <img className={'image1'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={'swipeSlide'}
              >
                <img className={'image1'} src={image} alt="image"/>
                <div className="name2">Roof IP 65</div>
                <div className="text2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue erat,
                  a consectetur lorem placerat ac
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Style.EquipmentSliderWrap>
  )
}

export default EquipmentSlider;