import React from 'react'

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

import './swiper.min.css'
import './style.css'
import image from '../../../media/image/image222.png';
import image2 from '../../../media/image/image333.png';
import image3 from '../../../media/image/slide2.png';
import image4 from '../../../media/image/slide3.png';


import * as Style from '../styled';

import SwiperCore, {Mousewheel} from 'swiper';
// install Swiper modules
SwiperCore.use([Mousewheel]);

const ImageSlider = () => {
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
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image} alt="image"/>
             </SwiperSlide>
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image2} alt="image"/>
             </SwiperSlide>
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image3} alt="image"/>
             </SwiperSlide>
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image} alt="image"/>
             </SwiperSlide>
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image2} alt="image"/>
             </SwiperSlide>
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image2} alt="image"/>
             </SwiperSlide>
             <SwiperSlide
              className={'swipeSlide2'}
             >
               <img className={'image2'} src={image} alt="image"/>
             </SwiperSlide>

           </Swiper>
         </div>
       </div>
     </div>
    </Style.ImageSliderWrap>
  )
}

export default ImageSlider;