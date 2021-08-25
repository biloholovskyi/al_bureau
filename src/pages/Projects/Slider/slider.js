import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"

import './swiper.min.css'
import './style.css'
import image from '../../../media/image/slide.png';
import image2 from '../../../media/image/slide1.png';
import image3 from '../../../media/image/slide2.png';
import image4 from '../../../media/image/slide3.png';

import SwiperCore, {Mousewheel} from 'swiper';
// install Swiper modules
SwiperCore.use([Mousewheel]);

const test = [
  {name: 'МЕДИЦИНСКИЙ ЦЕНТР', city: 'г. Казань ул. Подлужная', date: 2020, img: image},
  {name: 'Сургутнефтегаз', city: 'г. Казань ул. Подлужная', date: 2020, img: image2},
  {name: 'Клубный Дом «Шаляпин»', city: 'г. Казань ул. Подлужная', date: 2020, img: image3},
  {name: 'офисный комплекс «urban»', city: 'г. Казань ул. Подлужная', date: 2020, img: image4},
  {name: 'МЕДИЦИНСКИЙ ЦЕНТР', city: 'г. Казань ул. Подлужная', date: 2020, img: image2},
  {name: 'Сургутнефтегаз', city: 'г. Казань ул. Подлужная', date: 2020, img: image3},
  {name: 'Клубный Дом «Шаляпин»', city: 'г. Казань ул. Подлужная', date: 2020, img: image},
  {name: 'офисный комплекс «urban»', city: 'г. Казань ул. Подлужная', date: 2020, img: image2},
]

const Slider = () => {

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={80}
        mousewheel={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        >
        {
          test.map((item, key)=> {
            return(
              <SwiperSlide>
                <a href="#">
                  <img src={item.img} alt="image"/>
                  <div className="info">
                    <div className="name">{item.name}</div>
                    <div className="desc d-flex align-items-center">
                      {item.city}
                      /
                      {item.date}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default Slider;