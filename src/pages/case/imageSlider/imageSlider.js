import React from 'react'

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

import './swiper.min.css'
import './style.css'
import image from '../../../media/image/image222.png';
import image2 from '../../../media/image/image333.png';
import image3 from '../../../media/image/slide2.png';
import image4 from '../../../media/image/slide3.png';

import ApiService from "../../../services/api";


import * as Style from '../styled';

import SwiperCore, {Mousewheel} from 'swiper';
// install Swiper modules
SwiperCore.use([Mousewheel]);

const api = new ApiService();

const ImageSlider = ({data}) => {

  return (
    <Style.ImageSliderWrap>
     <div className="container-fluid">
       <div className="row">
         <div className="col-12">
           <Swiper
             slidesPerView={2}
             spaceBetween={40}
             mousewheel={true}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
             centeredSlides={false}
           >
             {data && data.map(image => {
               return (
                 <SwiperSlide
                   key={image.id}
                   className={'swipeSlide2'}
                 >
                   <img className={'image2'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${image?.image}`} alt="image"/>
                 </SwiperSlide>
               )
             })}
           </Swiper>
         </div>
       </div>
     </div>
    </Style.ImageSliderWrap>
  )
}

export default ImageSlider;