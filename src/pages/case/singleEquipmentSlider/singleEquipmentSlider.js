import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"

import * as Style from '../styled';

import './swiper.min.css'
import './navigation.min.css';
import './style.css'

import ApiService from "../../../services/api";

import SwiperCore, {Navigation, Pagination} from 'swiper';
import image from "../../../media/image/sliderimg.png";
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


const api = new ApiService()



const SingleEquipmentSlider = ({data}) => {

  return (
    <Style.SingleEquipmentSliderWrap>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              navigation={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className={'swiper-container3'}
              // pagination={{
              //   type: 'fraction',
              // }}
            >
              {
                data && data.map(item => {
                  return (
                    <SwiperSlide key={item.id} className={'swipeSlide3'}>
                      <div className="title_block">
                        <img src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${item?.image}`} alt="image"/>
                        <div className="nameEquip">{item.name}</div>
                      </div>
                      <div className="textBlock">
                        <div className="block">
                          <div className="block_item">
                            <div className="block_title">Корпус</div>
                            <div className="block_text">
                              {item.body}
                            </div>
                          </div>
                          <div className="block_item">
                            <div className="block_title">Источники света</div>
                            <div className="block_text">
                              {item.sources_of_light}
                            </div>
                          </div>
                        </div>
                        <div className="block">
                          <div className="block_item">
                            <div className="block_title">Питание</div>
                            <div className="block_text">
                              {item.supply}
                            </div>
                          </div>
                          <div className="block_item">
                            <div className="block_title">Светораспределение</div>
                            <div className="block_text">
                              {item.light_distribution}
                            </div>
                          </div>
                        </div>
                        <div className="block">
                          <div className="block_item">
                            <div className="block_title">Аксессуары</div>
                            <div className="block_text">
                              {item.accessories}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </Style.SingleEquipmentSliderWrap>
  )
}

export default SingleEquipmentSlider;