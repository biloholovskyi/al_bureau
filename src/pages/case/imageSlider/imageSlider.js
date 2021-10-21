import React from 'react'

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import './swiper.min.css'
import './style.css'

import ApiService from "../../../services/api";


import * as Style from '../styled';

import SwiperCore, {Mousewheel} from 'swiper';
// install Swiper modules
SwiperCore.use([Mousewheel]);

const api = new ApiService();

const ImageSlider = ({data, title}) => {

  return (
    <Style.ImageSliderWrap className={'case-main-block'}>
     <div className="container-fluid">
       <div className="row">
         <div className="col-12">
           <h2>{title}</h2>

           <div className="slider-wrapper-box">
             {data && data.map(image => {
               return (
                 <img key={image.id} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${image?.image}`} alt="image"/>
               )
             })}
           </div>
           {/*<Swiper*/}
           {/*  slidesPerView={55}*/}
           {/*  spaceBetween={40}*/}
           {/*  // mousewheel={true}*/}
           {/*  // onSlideChange={() => console.log('slide change')}*/}
           {/*  // onSwiper={(swiper) => console.log(swiper)}*/}
           {/*  // centeredSlides={true}*/}
           {/*  pagination={{*/}
           {/*    type: 'fraction',*/}
           {/*  }}*/}
           {/*>*/}
           {/*  {data && data.map(image => {*/}
           {/*    return (*/}
           {/*      <SwiperSlide*/}
           {/*        key={image.id}*/}
           {/*        className={'swipeSlide2'}*/}
           {/*      >*/}
           {/*        <img className={'image2'} src={`${api.getApi().split('api/v_0.1/')[0].slice(0, -1)}${image?.image}`} alt="image"/>*/}
           {/*      </SwiperSlide>*/}
           {/*    )*/}
           {/*  })}*/}
           {/*</Swiper>*/}
         </div>
       </div>
     </div>
    </Style.ImageSliderWrap>
  )
}

export default ImageSlider;